/* eslint-disable sort-keys-fix/sort-keys-fix */
const { jsExtensions, tsExtensions } = require('../utils/extensions');

const allExtensions = [...jsExtensions, ...tsExtensions];

module.exports = {
  extends: ['eslint:recommended', 'plugin:import/recommended', 'airbnb-base', 'plugin:lodash/recommended'], // consider replacing Airbnb with Shopify's config
  env: { es2022: true },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2022,
    ecmaFeatures: { impliedStrict: true, jsx: true },
  },
  globals: {
    console: false,
    exports: false,
    global: false,
    module: false,
    require: false,
  },
  plugins: [
    'import',
    'sort-class-members',
    'sort-keys-fix',
    'unused-imports',
    'simple-import-sort',
    // 'write-good-comments',
    'deprecate',
    'lodash',
  ],
  settings: {
    'import/extensions': jsExtensions,
    'import/ignore': [
      // react-native's main module is Flow, not JavaScript, and raises parse errors.
      // Other react-native-related packages still publish Flow code as their main source.
      '/node_modules/@?react-native',
    ],
    'import/resolver': {
      node: { extensions: jsExtensions },
    },
  },
  rules: {
    'sort-keys-fix/sort-keys-fix': 'warn',

    // Don"t explicitly add .js/.jsx/.tsx/.ts extensions
    'import/extensions': [
      2,
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],

    // Configure imports
    'import/first': 'warn',
    'import/newline-after-import': 'warn',
    'import/no-duplicates': 'warn',
    'import/prefer-default-export': 'off',

    // Configure simple sorting of imports
    'simple-import-sort/exports': 'warn',
    'simple-import-sort/imports': 'warn',

    // Configure eslint-plugin-sort-class-members
    'sort-class-members/sort-class-members': [
      2,
      {
        accessorPairPositioning: 'getThenSet',
        order: [
          '[static-properties]',
          '[static-methods]',
          '[properties]',
          'constructor',
          '[conventional-private-properties]',
          '[methods]',
          '[conventional-private-methods]',
        ],
      },
    ],

    // Write good comments
    // 'write-good-comments/write-good-comments': 'warn',

    // Support deprecate rules
    'deprecate/function': ['error', { name: 'legacyFunc', use: 'newFunc from this package' }],
    'deprecate/member-expression': ['error', { name: 'React.createClass', use: 'native es6 classes' }],
    'deprecate/import': [
      'error',
      { name: 'path/to/legacyModule', use: 'newModule' },
      { nameRegExp: '\\.sss', use: 'css imports' },
    ],

    'lodash/prefer-lodash-method': 'off',

    'no-use-before-define': ['off', { functions: false, classes: false }],

    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
  },
  overrides: [
    {
      files: ['*.d.ts'],
      rules: {
        'import/order': 'off',
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      extends: ['plugin:@typescript-eslint/recommended', 'plugin:import/typescript', 'airbnb-typescript/base'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/ban-types': [
          'error',
          {
            types: {
              Number: {
                message: 'Use `number` instead.',
                fixWith: 'number',
              },
              Boolean: {
                message: 'Use `boolean` instead.',
                fixWith: 'boolean',
              },
              Symbol: {
                message: 'Use `symbol` instead.',
                fixWith: 'symbol',
              },
              Object: {
                message: 'Use `object` instead.',
                fixWith: 'object',
              },
              String: {
                message: 'Use `string` instead.',
                fixWith: 'string',
              },
              '{}': {
                message: 'Use `object` instead.',
                fixWith: 'object',
              },
            },
            extendDefaults: false,
          },
        ],
        // '@typescript-eslint/naming-convention': [
        //   'error',
        //   {
        //     selector: 'default',
        //     format: ['camelCase'],
        //   },
        //   {
        //     selector: 'variable',
        //     format: ['PascalCase', 'UPPER_CASE'],
        //     types: ['boolean'],
        //     prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
        //   },
        //   {
        //     selector: 'variableLike',
        //     format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        //   },

        //   {
        //     selector: 'parameter',
        //     format: ['camelCase'],
        //   },
        //   {
        //     selector: 'memberLike',
        //     modifiers: ['private'],
        //     format: ['camelCase'],
        //     leadingUnderscore: 'forbid',
        //   },
        //   {
        //     selector: 'typeLike',
        //     format: ['PascalCase'],
        //   },
        //   {
        //     selector: 'property',
        //     modifiers: ['readonly'],
        //     format: ['PascalCase'],
        //   },
        //   {
        //     selector: 'enumMember',
        //     format: ['UPPER_CASE'],
        //   },
        // ],

        // The typescript-eslint FAQ recommends turning off "no-undef" in favor of letting tsc check for
        // undefined variables, including types
        'no-undef': 'off',
        'no-shadow': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-shadow': 'error',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
          'warn',
          {
            vars: 'all',
            varsIgnorePattern: '^_',
            args: 'after-used',
            argsIgnorePattern: '^_',
          },
        ],
      },
      settings: {
        'import/extensions': allExtensions,
        'import/parsers': {
          '@typescript-eslint/parser': tsExtensions,
        },
        'import/resolver': {
          node: { extensions: allExtensions },
        },
      },
    },
    {
      files: ['*.js', '*.ts', '*.jsx', '*.tsx'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              // Node.js builtins. You could also generate this regex if you use a `.js` config.
              // For example: `^(${require("module").builtinModules.join("|")})(/|$)`
              [
                '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
              ],
              // Packages. `react` related packages come first.
              ['^react', '^@?\\w'],
              // Side effect imports.
              ['^\\u0000'],
              // Internal packages.
              [
                '^(~|@|@root|@src|@types|@assets|@config|@components|@hooks|@screens|@pages|@services|@store|@state|@utils|@theme|@navigation|@redux|@helpers|@api|@models|@controllers|@middleware|@workers|@HOCs|@containers|@models|@providers)(/.*|$)',
              ],
              // Parent imports. Put `..` last.
              ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
              // Other relative imports. Put same-folder imports and `.` last.
              ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
              // Style imports.
              ['^.+\\.s?css$'],
            ],
          },
        ],
      },
    },
    {
      env: { es2022: true, jest: true, node: true, 'jest/globals': true },
      files: [
        '**/test/**/*.[jt]s?(x)',
        '**/tests/**/*.[jt]s?(x)',
        '**/__tests__/**/*.[jt]s?(x)',
        '**/?(*.)+(spec|test).[jt]s?(x)',
      ],
      plugins: ['jest', 'jest-formatting'],
      extends: ['plugin:jest/recommended', 'plugin:jest-formatting/recommended'],
      rules: {},
    },
  ],
};
