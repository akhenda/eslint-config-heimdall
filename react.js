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
  ],
  rules: {
    // Since airbnb config enables these, disable them here again
    'import/extensions': [
      2,
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
};
