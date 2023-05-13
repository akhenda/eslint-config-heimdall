module.exports = {
  env: { node: true },
  extends: ['./shared/core.js', './shared/node.js', './shared/prettier.js'],
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
