module.exports = {
  env: { browser: true, commonjs: true },
  extends: ['./shared/core.js', './shared/react.js', './shared/prettier.js'],
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

  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: './tsconfig.base.json',
      },
    },
  ],
};
