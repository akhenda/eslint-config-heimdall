module.exports = {
  extends: ['airbnb', 'airbnb-typescript', 'plugin:react/jsx-runtime'], // consider replacing Airbnb with Shopify's config
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
