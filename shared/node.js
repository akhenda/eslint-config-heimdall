/* eslint-disable sort-keys-fix/sort-keys-fix */
module.exports = {
  env: { es2022: true },
  plugins: ['mongodb'],
  extends: ['plugin:n/recommended', 'plugin:security/recommended'],
  rules: {
    'n/no-missing-import': 'off',
  },
};
