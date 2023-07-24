#!/usr/bin/env node
import * as swc from '@swc/core';
import { program } from 'commander';
import glob from 'fast-glob';
import fs from 'fs-extra';
import path from 'path';
import { $ } from 'zx';

const swcConfig = {
  jsc: {
    externalHelpers: true,
    target: 'es5',
    parser: {
      syntax: 'typescript',
      tsx: true,
    },
    transform: {
      react: {
        runtime: 'automatic',
      },
    },
  },
};

program
  .option('--for-release', 'converts workspace protocol dependencies to real ones')
  .option('--for-dev', 'builds for development');

program.parse(process.argv);
const options = program.opts();

/**
 * I tried my best to release AvidKit packages as ES modules ("type": "module") that support CJS requires using conditional exports according to this webpack article, but I failed: https://webpack.js.org/guides/package-exports/#providing-commonjs-and-esm-version-stateful
 * Finally this approach worked: https://www.sensedeep.com/blog/posts/2021/how-to-create-single-source-npm-module.html
 * But the main issue is that Node.js and webpack require file extensions for ES modules.
 * Check https://webpack.js.org/api/module-methods and https://github.com/facebook/jest/issues/9885
 * We cannot add extensions to import as SWC removes them automatically and don't have any options.
 * This is absolute shit. We should ask everyone to enable resolve.fullySpecified in their webpack config https://webpack.js.org/configuration/module/#resolvefullyspecified
 * So let's say goodbye to publishing { "type": "module" } packages until community gets out of this shit hole
 */

async function build() {
  // removing the dist dir
  await fs.remove('./dist');

  // reading the source file names using glob
  const [sourceFiles, assetFiles] = await Promise.all([
    glob('src/**/*.{ts,tsx}', { ignore: '**/*.stories.tsx' }),
    glob('src/**/*.json'),
  ]);
  // compiling the sources
  const filesPromise = sourceFiles.map(async (file) => {
    const source = await fs.readFile(file, 'utf-8');
    const [cjs, esm] = await Promise.all([
      swc.transform(source, { ...swcConfig, module: { type: 'commonjs' } }),
      swc.transform(source, { ...swcConfig, module: { type: 'es6' } }),
    ]);
    try {
      return {
        filePath: file,
        cjs,
        esm,
      };
    } catch (err) {
      throw new Error(`Error compiling ${file}: ${err.message}`);
    }
  });

  const compiledSources = await Promise.all(filesPromise);

  const writeFilePromises = compiledSources.map(async ({ filePath, cjs, esm }) => {
    // cjs sources
    await fs.outputFile(
      path.resolve(filePath.replace(/src\/(.*)\.tsx?$/, './dist/cjs/$1.js')),
      cjs.code,
    );
    // esm sources
    await fs.outputFile(
      path.resolve(filePath.replace(/src\/(.*)\.tsx?$/, './dist/esm/$1.js')),
      esm.code,
    );
  });

  await Promise.all(writeFilePromises);

  const copyAssetFilePromises = assetFiles.map(async (assetFilePath) => {
    await fs.copyFile(
      assetFilePath,
      path.resolve(assetFilePath.replace(/src\/(.*)\.json?$/, './dist/cjs/$1.json')),
    );
    await fs.copyFile(
      assetFilePath,
      path.resolve(assetFilePath.replace(/src\/(.*)\.json?$/, './dist/esm/$1.json')),
    );
  });

  await Promise.all(copyAssetFilePromises);
}

// TODO: this is to replace workspace:* dependencies with the actual version
// waiting for https://github.com/changesets/changesets/pull/674 to be merged
async function replaceWorkspaceRangesWithVersions() {
  await $`yarn pack && mkdir -p ./_release && tar zxvf ./package.tgz --directory ./_release && rm ./package.tgz`;
}

async function run() {
  await build();
  if (options.forRelease || options.forDev) {
    await replaceWorkspaceRangesWithVersions();
  }
}

run();
