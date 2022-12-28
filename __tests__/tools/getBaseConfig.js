const packageConfig = require('../../.eslintrc');

module.exports = function getBaseConfig() {
  return {
    settings: {
      react: packageConfig.settings.react,
    },
  };
};
