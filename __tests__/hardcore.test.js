const eslint = require('eslint');
const path = require('path');

const checkPrettierRulesAsync = require('./tools/checkPrettierRulesAsync');
const getBaseConfig = require('./tools/getBaseConfig');
const lintAsync = require('./tools/lintAsync');

const configFile = path.resolve(__dirname, '../hardcore.js');

it(`has a Hardcore config`, () => {
  expect(
    () =>
      new eslint.ESLint({
        baseConfig: getBaseConfig(),
        overrideConfigFile: configFile,
        useEslintrc: false,
      }),
  ).not.toThrow();
});

it(`lints with the Hardcore config`, async () => {
  const results = await lintAsync(
    {
      baseConfig: getBaseConfig(),
      fix: true,
      ignore: false,
      overrideConfigFile: configFile,
      useEslintrc: false,
    },
    ['__tests__/fixtures/*all*', '__tests__/fixtures/*node*', '__tests__/fixtures/*react*'],
  );
  for (const result of results) {
    const relativeFilePath = path.relative(__dirname, result.filePath);
    delete result.filePath;
    expect(result).toMatchSnapshot(relativeFilePath);
  }
}, 20000);

it(`doesn't conflict with Prettier`, async () => {
  const { success, message } = await checkPrettierRulesAsync(configFile, 'hardcore');
  expect(success).toMatchSnapshot('success');
  expect(message).toMatchSnapshot('message');
}, 10000);
