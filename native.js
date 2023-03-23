/* eslint-disable sort-keys-fix/sort-keys-fix */
const { jsExtensions, tsExtensions, platformSubextensions, computeExpoExtensions } = require('./utils/extensions');

const allExtensions = computeExpoExtensions([...jsExtensions, ...tsExtensions], platformSubextensions);

module.exports = {
  extends: ['./shared/core.js', './shared/react.js', './shared/prettier.js'],
  globals: {
    Atomics: false,
    ErrorUtils: false,
    FormData: false,
    SharedArrayBuffer: false,
    XMLHttpRequest: false,
    __DEV__: false,
    alert: false,
    cancelAnimationFrame: false,
    cancelIdleCallback: false,
    clearImmediate: false,
    clearInterval: false,
    clearTimeout: false,
    fetch: false,
    navigator: false,
    process: false,
    requestAnimationFrame: false,
    requestIdleCallback: false,
    setImmediate: false,
    setInterval: false,
    setTimeout: false,
    window: false,
  },
  overrides: [
    {
      env: { browser: true },
      files: ['*.web.*'],
    },
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: './tsconfig.base.json',
      },
    },
  ],
  settings: {
    'import/extensions': allExtensions,
    'import/resolver': {
      node: { extensions: allExtensions },
    },
  },
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
  },
};
