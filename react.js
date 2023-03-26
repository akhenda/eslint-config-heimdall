module.exports = {
  env: { browser: true, commonjs: true },
  extends: ['./shared/core.js', './shared/react.js', './shared/prettier.js'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: './tsconfig.base.json',
      },
    },
    {
      env: { 'cypress/globals': true, node: false },
      extends: ['plugin:jest-dom/recommended', 'plugin:cypress/recommended'],
      files: [
        '**/test/**/*.[jt]s?(x)',
        '**/tests/**/*.[jt]s?(x)',
        '**/__tests__/**/*.[jt]s?(x)',
        '**/?(*.)+(spec|test).[jt]s?(x)',
      ],
      plugins: ['cypress', 'testing-library'],
    },
  ],
  rules: {},
};
