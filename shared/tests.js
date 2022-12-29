/* eslint-disable sort-keys-fix/sort-keys-fix */
module.exports = {
  overrides: [
    {
      env: { es2022: true, jest: true, node: true, 'cypress/globals': true, 'jest/globals': true },
      files: [
        'test/**',
        'tests/**',
        '__tests__/**',
        '*.test.js',
        '*.test.jsx',
        '*.spec.js',
        '*.spec.jsx',
        '*.test.ts',
        '*.test.tsx',
        '*.spec.ts',
        '*.spec.tsx',
      ],
      plugins: ['mocha', 'cypress', 'jest', 'jest-formatting'],
      extends: [
        'plugin:mocha/recommended',
        'plugin:cypress/recommended',
        'plugin:jest/recommended',
        'plugin:jest-formatting/recommended',
      ],
      rules: {},
    },
  ],
};
