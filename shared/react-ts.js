module.exports = {
  extends: ['airbnb', 'airbnb-typescript', 'plugin:tailwindcss/recommended'], // consider replacing Airbnb with Shopify's config
  parserOptions: {
    ecmaFeatures: { jsx: true },
    project: './tsconfig.base.json',
  },
  plugins: ['react', 'react-hooks', 'tailwindcss'],
  rules: {},
  settings: {
    react: { version: 'detect' },
  },
};
