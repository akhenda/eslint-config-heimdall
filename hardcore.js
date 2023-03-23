module.exports = {
  extends: ['./shared/core.js', './shared/hardcore.js', './shared/prettier.js'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: './tsconfig.base.json',
      },
    },
  ],
};
