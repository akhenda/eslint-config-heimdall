const spawnAsync = require('@expo/spawn-async');
const fs = require('fs');
const path = require('path');

module.exports = async function checkPrettierRulesAsync(configFile, testName) {
  const testProjectPath = path.resolve(__dirname, '..', 'projects', testName);
  const relativeConfigFilePath = path.relative(path.resolve(__dirname, '../../..'), configFile);

  const configString = JSON.stringify({ extends: relativeConfigFilePath, root: true }, null, 2);
  fs.writeFileSync(path.resolve(testProjectPath, '.eslintrc.json'), configString);
  fs.writeFileSync(path.resolve(testProjectPath, 'index.ts'), '');

  let result;
  try {
    result = await spawnAsync('eslint-config-prettier', ['index.ts'], {
      cwd: testProjectPath,
    });
  } catch (e) {
    console.log({ e });
    if (e.status === 2) {
      result = e;
    } else {
      throw e;
    }
  }

  return {
    message: result.stderr,
    success: result.status === 0,
  };
};
