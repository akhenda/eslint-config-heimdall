/* eslint-disable sort-keys-fix/sort-keys-fix */
module.exports = {
  plugins: [
    // 'boundaries',
    'no-secrets',
    'switch-case',
    'filenames',
    'no-constructor-bind',
    'html',
    'sonarjs',
    'functional',
  ],
  extends: [
    'plugin:eslint-comments/recommended',
    // 'plugin:boundaries/recommended',
    'plugin:jsonc/base',
    'plugin:switch-case/recommended',
    'plugin:array-func/recommended',
    'plugin:no-unsanitized/DOM',
    'plugin:promise/recommended',
    'plugin:sonarjs/recommended',
    'plugin:unicorn/recommended',
    'plugin:functional/external-recommended',
    'plugin:functional/recommended',
    'plugin:functional/stylistic',
  ],
  rules: {
    'eslint-comments/no-unused-disable': 'error',
    'no-secrets/no-secrets': 'error',
    'filenames/match-exported': [2, [null, 'kebab', 'camel']],
    'no-constructor-bind/no-constructor-bind': 'error',
    'no-constructor-bind/no-constructor-state': 'error',

    // conflicts with Prettier
    'unicorn/empty-brace-spaces': 'off',
    'unicorn/no-nested-ternary': 'off',
    'unicorn/number-literal-case': 'off',

    'unicorn/prefer-module': 'off',

    // Functional Programming
    'functional/immutable-data': [
      'error',
      {
        ignorePattern: ['^module.exports$'],
      },
    ],
    'functional/functional-parameters': [
      'error',
      {
        ignorePattern: [
          '^mounted$',
          '^created$',
          '^unmount$',
          '^unmounted$',
          '^beforeDestroy$',
          '^destroy$',
          '^updated$',
          '^beforeUpdate$',
          '^onBeforeUpdate$',
          '^onUpdated$',
          '^onMounted$',
        ],
      },
    ],
    'functional/no-expression-statement': [
      'error',
      {
        ignoreVoid: true,
      },
    ],
  },
  overrides: [
    // Top level files (config files).
    {
      files: ['./*'],
      extends: ['plugin:functional/off'],
    },
  ],
};
