module.exports = {
  extends: './node.js',
  root: true,
  rules: {
    'n/no-unpublished-require': [
      'error',
      {
        allowModules: ['@expo/spawn-async'],
      },
    ],
    'no-console': 'off',
    'no-restricted-syntax': 'off',
  },
  settings: { react: { version: '1000.0.0' } },
};
