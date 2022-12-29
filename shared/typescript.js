/* eslint-disable sort-keys-fix/sort-keys-fix */
const { jsExtensions, tsExtensions } = require('../utils/extensions');

const allExtensions = [...jsExtensions, ...tsExtensions];

module.exports = {
  extends: ['airbnb-typescript/base'],
  parserOptions: {
    project: './tsconfig.base.json',
  },
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': tsExtensions,
        },
      },
    },
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      extends: ['plugin:import/typescript'],
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

        // The typescript-eslint FAQ recommends turning off "no-undef" in favor of letting tsc check for
        // undefined variables, including types
        'no-undef': 'off',
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
  ],
};
