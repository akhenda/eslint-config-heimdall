module.exports = {
  extends: ['airbnb', 'plugin:react/jsx-runtime'], // consider replacing Airbnb with Shopify's config

  parserOptions: { ecmaFeatures: { jsx: true } },

  plugins: ['react', 'react-hooks'],

  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['airbnb-typescript'],
      parserOptions: {
        project: '../tsconfig.base.json',
      },
    },
    {
      env: { node: false, 'cypress/globals': true },
      files: [
        '**/test/**/*.[jt]s?(x)',
        '**/tests/**/*.[jt]s?(x)',
        '**/__tests__/**/*.[jt]s?(x)',
        '**/?(*.)+(spec|test).[jt]s?(x)',
      ],
      plugins: ['cypress', 'testing-library'],
      extends: ['plugin:cypress/recommended'],
      rules: {},
    },
  ],

  rules: {},
  settings: {
    react: { version: 'detect' },
  },
};
