const sharedNamingConventions = [
  {
    selector: 'default',
    format: ['camelCase'],
    leadingUnderscore: 'allow',
    trailingUnderscore: 'allow',
  },
  {
    selector: 'parameter',
    modifiers: ['destructured'],
    format: null,
  },
  {
    selector: 'typeLike',
    format: ['PascalCase'],
  },
  {
    selector: 'enumMember',
    format: ['PascalCase'],
  },
  {
    selector: 'objectLiteralProperty',
    format: null /** to cover some package options */,
  },
];

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2021,
  },
  plugins: ['prefer-arrow', 'unicorn', 'jsdoc', 'prettier', 'sonarjs'],
  extends: [
    'eslint:recommended',
    'plugin:jsdoc/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'plugin:sonarjs/recommended',
    'plugin:storybook/recommended',
  ],
  rules: {
    // prettier
    'prettier/prettier': 'error',
    'prefer-arrow-callback': 'off', // conflicts with prettier

    // enabled eslint rules
    'unicorn/explicit-length-check': 'error',
    'constructor-super': 'error',
    curly: ['error', 'multi-line'],
    'dot-notation': 'error',
    'guard-for-in': 'error',
    '@typescript-eslint/consistent-type-definitions': 'error',
    'no-useless-return': 'error',
    'max-classes-per-file': ['error', 1],
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-cond-assign': 'error',
    'no-console': 'warn',
    'no-debugger': 'error',
    'no-empty': 'error',
    'no-empty-function': [
      'error',
      {
        allow: ['constructors'],
      },
    ],
    'no-new-wrappers': 'error',
    'no-throw-literal': 'error',
    'no-undef-init': 'error',
    'no-unsafe-finally': 'error',
    'no-unused-labels': 'error',
    'no-unused-vars': [
      'error',
      {
        args: 'none',
      },
    ],
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-const': 'error',
    'prefer-template': 'error',
    radix: 'error',
    'use-isnan': 'error',
    'no-unused-expressions': 'error',
    'no-new-func': 'error',
    'spaced-comment': 'error',
    'no-param-reassign': 'error',
    'sonarjs/no-nested-template-literals': 'off',
    // prefer-arrow rules
    'prefer-arrow/prefer-arrow-functions': [
      'warn',
      {
        singleReturnOnly: true,
        classPropertiesAllowed: true,
      },
    ],
    // prevent default export because handling it is hard in compile pipeline
    'no-restricted-syntax': ['error', 'ExportDefaultDeclaration'],
    // import rules
    // TODO: disabled due to many conflicts with yarn pnp
    // 'import/no-duplicates': 'error',
    // 'import/no-extraneous-dependencies': 'error',
    // 'import/no-unresolved': [
    //   'error',
    //   { ignore: ['\\$.*$'] }, // all our aliases start with a $ sign
    // ],

    // disabled eslint rules
    'arrow-body-style': 'off',
    // TODO: this may be improved
    'arrow-parens': ['off', 'as-needed'],
    complexity: 'off',
    'eol-last': 'off',
    'linebreak-style': 'off',
    'new-parens': 'off',
    'newline-per-chained-call': 'off',
    'no-extra-semi': 'off',
    'no-fallthrough': 'off',
    'no-invalid-this': 'off',
    'no-irregular-whitespace': 'off',
    'no-multiple-empty-lines': 'off',
    'one-var': 'off',
    'quote-props': 'off',
    'space-before-function-paren': 'off',
    'valid-typeof': 'off',
    camelcase: [
      'error',
      {
        properties: 'never',
      },
    ],
    eqeqeq: ['error', 'smart'],
    'no-shadow': 'error',
    // jsdoc rules
    'jsdoc/require-jsdoc': 0,
    'jsdoc/require-param': 0,
    'jsdoc/require-param-type': 0,
    'jsdoc/require-returns-type': 0,
    'jsdoc/newline-after-description': 0,
  },
  overrides: [
    {
      files: ['*.stories.tsx'],
      rules: {
        'sonarjs/no-duplicate-string': 0,
        'no-restricted-syntax': 'off',
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        tsconfigRootDir: __dirname,
        project: ['tsconfig.json'],
      },
      plugins: ['@typescript-eslint'],
      rules: {
        // enabled typescript rules
        '@typescript-eslint/naming-convention': [
          'error',
          ...sharedNamingConventions,
          {
            selector: 'variable',
            format: ['camelCase'],
          },
          {
            selector: 'variable',
            modifiers: ['const'],
            format: ['camelCase', 'UPPER_CASE'],
            leadingUnderscore: 'allow',
            trailingUnderscore: 'allow',
          },
        ],
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/array-type': 'error',
        '@typescript-eslint/ban-types': [
          'error',
          {
            types: {
              Function: false, // e.g getProcessorName
              object: false, // is different with Object e.g. HttpError
            },
          },
        ],

        '@typescript-eslint/no-empty-interface': [
          'error',
          {
            allowSingleExtends: true,
          },
        ],
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-this-alias': 'error',
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/prefer-function-type': 'error',
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        '@typescript-eslint/unified-signatures': 'error',
        '@typescript-eslint/typedef': [
          'error',
          {
            arrowParameter: false,
            propertyDeclaration: false,
            memberVariableDeclaration: false,
          },
        ],
        '@typescript-eslint/explicit-member-accessibility': [
          'off',
          {
            overrides: {
              constructors: 'off',
            },
          },
        ],
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/member-delimiter-style': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-parameter-properties': 'off',
        '@typescript-eslint/no-use-before-declare': 'off',
        '@typescript-eslint/prefer-interface': 'off',
        '@typescript-eslint/type-annotation-spacing': 'off',
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            args: 'none',
          },
        ],
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/explicit-function-return-type': [
          'warn',
          {
            allowExpressions: true,
          },
        ],
        // comment these if you don't want to specify projects option on TypeScript parser
        '@typescript-eslint/triple-slash-reference': 'error',
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
        '@typescript-eslint/consistent-type-assertions': [
          'error',
          {
            assertionStyle: 'as',
            objectLiteralTypeAssertions: 'never',
          },
        ],
        'spaced-comment': [
          'error',
          'always',
          {
            markers: ['/'],
          },
        ],
        // e.g. next-env.d.ts
        'no-undef': 'off',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
        'no-shadow': 'off',
        'no-unused-vars': 'off',

        // unsupported tslint rules
        // TODO: please refer to https://github.com/typescript-eslint/typescript-eslint/blob/90b36ddac2f6de006fd59f2a9234df1eb2d1606e/packages/eslint-plugin/ROADMAP.md
        // 'object-shorthand-properties-first'
        // tslint-consistent-codestyle
        // tslint-microsoft-contrib
      },
    },
    {
      files: ['*.tsx'],
      settings: {
        react: {
          version: '16.14.0',
        },
        linkComponents: [
          {
            name: 'Link',
            linkAttribute: 'to',
          },
        ],
      },
      extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended'],
      plugins: ['react-hooks'],
      rules: {
        // Turn off rules that are no longer necessary in React 17
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/require-default-props': 'off',
        // react rules
        // react propTypes are not needed in a TypeScript only environment
        'react/prop-types': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/function-component-definition': [
          'error',
          {
            namedComponents: 'arrow-function',
          },
        ],
        'react/jsx-pascal-case': 'error',
        'react/self-closing-comp': 'error',
        'jsdoc/require-returns': 0,
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/naming-convention': [
          'error',
          ...sharedNamingConventions,
          {
            selector: 'variable',
            format: ['camelCase', 'PascalCase' /** cover styled components */],
          },
          {
            selector: 'variable',
            modifiers: ['const'],
            format: [
              'camelCase',
              'UPPER_CASE',
              'PascalCase' /** cover styled components */,
            ],

            leadingUnderscore: 'allow',
            trailingUnderscore: 'allow',
          },
          {
            selector: 'function',
            modifiers: ['exported'],
            format: ['PascalCase'],
          },
        ],
        '@typescript-eslint/ban-types': [
          'error',
          {
            types: {
              FunctionComponent: {
                message: 'use React.FC instead',
                fixWith: 'FC',
              },
            },
          },
        ],
      },
    },
    {
      files: ['*.test.ts', '*.e2e-test.ts'],
      plugins: ['jest'],
      settings: {
        jest: {
          version: 26,
        },
      },
      extends: [
        'plugin:jest/style',
        'plugin:jest-formatting/recommended',
        'plugin:jest/recommended',
      ],
      env: {
        'jest/globals': true,
      },
      rules: {
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-alias-methods': 'error',
        'jest/no-identical-title': 'error',
        'jest/no-jasmine-globals': 'error',
        'jest/no-jest-import': 'error',
        'jest/no-done-callback': 'warn',
        'jest/no-test-prefixes': 'error',
        'jest/no-test-return-statement': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/prefer-spy-on': 'error',
        'jest/valid-expect': 'error',
        'jest/consistent-test-it': 'error',
        'jest/expect-expect': 'error',
        'jest/no-duplicate-hooks': 'warn',
        'jest/no-export': 'error',
        'jest/no-if': 'warn',
        'jest/no-mocks-import': 'error',
        'jest/no-standalone-expect': 'error',
        'jest/no-try-expect': 'error',
        'jest/prefer-called-with': 'warn',
        'jest/prefer-hooks-on-top': 'warn',
        'jest/prefer-to-be-null': 'warn',
        'jest/prefer-to-be-undefined': 'warn',
        'jest/prefer-to-contain': 'warn',
        'jest/require-top-level-describe': 'error',
        'jest/require-to-throw-message': 'warn',
        'jest/valid-describe': 'warn',
        'jest/valid-title': 'warn',
      },
    },
  ],
};
