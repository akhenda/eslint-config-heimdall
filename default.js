module.exports = {
  extends: ['./shared/core.js', './shared/prettier.js'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: './tsconfig.base.json',
        tsconfigRootDir: __dirname,
      },
    },
  ],
};
