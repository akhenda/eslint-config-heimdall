/* eslint-disable sort-keys-fix/sort-keys-fix */
module.exports = {
  env: { es2022: true, jest: true, node: true },
  parserOptions: {
    ecmaFeatures: { impliedStrict: true, jsx: true },
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  plugins: ['mongodb'],
  extends: ['plugin:n/recommended', 'plugin:security/recommended'],
  globals: {
    console: false,
    exports: false,
    global: false,
    module: false,
    require: false,
  },
};
