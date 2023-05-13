module.exports = {
  extends: ['./shared/hardcore.js'],
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
