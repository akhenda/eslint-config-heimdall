module.exports = {
  extends: ['airbnb', 'plugin:react/jsx-runtime'], // consider replacing Airbnb with Shopify's config
  parserOptions: { ecmaFeatures: { jsx: true } },
  plugins: ['react', 'react-hooks'],
  rules: {},
  settings: {
    react: { version: 'detect' },
  },
};
