const path = require('path');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  stories: [
    '../components/**/src/*.stories.@(ts|tsx)',
    '../icons/**/*.stories.@(ts|tsx)',
  ],
  addons: [
    'storybook-addon-react-router-v6',
    '@storybook/addon-links',
    // essentials
    {
      name: '@storybook/addon-essentials',
      options: {
        // TODO: use addon-background when this issue got resolved: https://github.com/storybookjs/storybook/issues/13287
        backgrounds: false,
      },
    },
    // To compile typescript with SWC
    {
      name: 'storybook-addon-swc',
      options: {
        enable: true,
        enableSwcLoader: true,
        enableSwcMinify: isProduction,
      },
    },
    '@storybook/addon-knobs',
    '@storybook/addon-a11y',
    'storybook-addon-locale/register',
    'storybook-addon-next-router',
    'storybook-addon-theme-toggle',
    'storybook-addon-pseudo-states',
    // Figma and Zeplin Designs
    'storybook-addon-designs',
    'storybook-zeplin/register',
  ],
  typescript: {
    check: true,
    reactDocgen: false,
    // reactDocgen: 'react-docgen-typescript',
    // reactDocgenTypescriptOptions: {
    //   shouldExtractLiteralValuesFromEnum: true,
    //   propFilter: (prop) =>
    //     prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    // },
  },
  core: {
    builder: {
      name: 'webpack5',
      options: {
        lazyCompilation: true,
        fsCache: true,
      },
    },
  },
  framework: '@storybook/react',
  // TODO: Fast Refresh does not currently work with node_modules (all the packages) (v6.5.11)
  // reactOptions: {
  //   fastRefresh: true,
  // },
  env: (config) => ({
    ...config,
    PROJECT_ROOT_PATH: JSON.stringify(path.resolve('.')),
  }),
  webpackFinal: (config) => {
    config.resolve.extensions.push('.ts', '.tsx');
    config.resolve.mainFields = ['typescript-main', 'module', 'main'];

    // Looks like storybook webpack picks the browser version of styled-components if we don't do the following:
    config.resolve.alias = {
      ...config.resolve.alias,
      'styled-components': require.resolve('styled-components'),
      'next/router': require.resolve('next/router'),
    };

    config.plugins.push(new NodePolyfillPlugin());

    // Only show error logs during production building
    if (isProduction) {
      config.stats = 'minimal';
      config.infrastructureLogging = { level: 'error' };
    }

    const tsLoaderRule = config.module.rules.find((rule) => rule.test.test('test.tsx'));
    tsLoaderRule.include = [
      path.resolve(__dirname, '..'),
      path.resolve(__dirname, '../components'),
      path.resolve(__dirname, '../icons'),
      path.resolve(__dirname, '../tools'),
    ];

    // this is to support using SVG icons in story files only
    config.module.rules.push({
      test: /\.svg$/,
      exclude: /node_modules\/(?!@avidkit)/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: {
                removeViewBox: false,
              },
            },
          },
        },
        // we don't use url-loader for now and we inline the SVGs so we can change them
        // { loader: 'url-loader', options: { limit: 1024 * 1024 } },
      ],
    });

    // Remove SVG from file loader
    const svgRule = config.module.rules.filter(
      ({ test, type }) => test.test('shit.svg') && type === 'asset/resource',
    )[0];
    svgRule.test =
      /\.(ico|jpg|jpeg|png|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/;

    return config;
  },
};
