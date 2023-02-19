/* eslint-disable sort-keys-fix/sort-keys-fix */
module.exports = {
  overrides: [
    {
      env: { es2022: true, jest: true, node: true, 'cypress/globals': true, 'jest/globals': true },
      files: [
        '**/test/**/*.[jt]s?(x)',
        '**/tests/**/*.[jt]s?(x)',
        '**/__tests__/**/*.[jt]s?(x)',
        '**/?(*.)+(spec|test).[jt]s?(x)',
      ],
      plugins: ['cypress', 'jest', 'jest-formatting', 'testing-library'],
      extends: ['plugin:cypress/recommended', 'plugin:jest/recommended', 'plugin:jest-formatting/recommended'],
      rules: {},
    },
  ],
};
