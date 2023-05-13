/* eslint-disable sort-keys-fix/sort-keys-fix */
module.exports = {
  extends: ['airbnb', 'airbnb/hooks', 'plugin:react/jsx-runtime'], // consider replacing Airbnb with Shopify's config
  parserOptions: { ecmaFeatures: { jsx: true } },
  plugins: ['react', 'react-hooks'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['airbnb-typescript'],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: '../tsconfig.base.json',
      },
    },
    {
      env: { node: false },
      files: [
        '**/test/**/*.[jt]s?(x)',
        '**/tests/**/*.[jt]s?(x)',
        '**/__tests__/**/*.[jt]s?(x)',
        '**/?(*.)+(spec|test).[jt]s?(x)',
      ],
      plugins: ['testing-library'],
    },
  ],
  rules: {
    'import/prefer-default-export': 'off',
    'no-use-before-define': ['off', { classes: false, functions: false }],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: ['function-declaration', 'arrow-function'],
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/style-prop-object': [
      'error',
      {
        allow: ['StatusBar'],
      },
    ],
    'react/prop-types': 'off', // Since we do not use prop-types
    'react/require-default-props': 'off', // Since we do not use prop-types

    // Don"t explicitly add .js/.jsx/.tsx/.ts extensions
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],

    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsForRegex: ['^draft'] }],
  },
  settings: {
    react: { version: 'detect' },
  },
};
