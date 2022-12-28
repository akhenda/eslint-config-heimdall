module.exports = {
  extends: ['plugin:unicorn/recommended', 'plugin:promise/recommended'],
  plugins: ['html', 'expires'],
  rules: {
    expires: 2,
  },
};
