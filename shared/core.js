/* eslint-disable sort-keys-fix/sort-keys-fix */
const { jsExtensions } = require('../utils/extensions');

module.exports = {
  extends: ['eslint:recommended', 'plugin:import/recommended', 'airbnb-base', 'plugin:lodash/recommended'], // consider replacing Airbnb with Shopify's config
  env: { es2022: true, jest: true },
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
    'write-good-comments',
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
        order: [
          '[static-properties]',
          '[static-methods]',
          '[properties]',
          '[conventional-private-properties]',
          'constructor',
          '[methods]',
          '[conventional-private-methods]',
        ],
        accessorPairPositioning: 'getThenSet',
      },
    ],

    // Write good comments
    'write-good-comments/write-good-comments': 'warn',

    // Support deprecate rules
    'deprecate/function': ['error', { name: 'legacyFunc', use: 'newFunc from this package' }],
    'deprecate/member-expression': ['error', { name: 'React.createClass', use: 'native es6 classes' }],
    'deprecate/import': [
      'error',
      { name: 'path/to/legacyModule', use: 'newModule' },
      { nameRegExp: '\\.sss', use: 'css imports' },
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
      rules: {
        'no-shadow': 'off',
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
                '^(~|@|@root|@src|@types|@assets|@config|@components|@hooks|@screens|@pages|@services|@store|@state|@utils|@theme|@navigation|@redux|@helpers|@api|@models|@controllers|@middleware|@workers|@HOCs|@containers|@models)(/.*|$)',
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
  ],
};
