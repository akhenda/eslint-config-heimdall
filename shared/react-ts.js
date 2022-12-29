module.exports = {
  extends: ['airbnb', 'airbnb-typescript'],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    project: './tsconfig.base.json',
  },
  plugins: ['react', 'react-hooks'],
  rules: {},
  settings: {
    react: { version: 'detect' },
  },
};
