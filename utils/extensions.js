/* eslint-disable no-restricted-syntax */
const jsExtensions = ['.js', '.jsx'];
const tsExtensions = ['.ts', '.tsx', '.d.ts'];
const platformSubextensions = ['.android', '.ios', '.web', '.native'];

function computeExpoExtensions(baseExtensions, _platformSubextensions) {
  const expoExtensions = [];
  for (const expo of ['.expo', '']) {
    for (const platform of [..._platformSubextensions, '']) {
      for (const base of baseExtensions) {
        expoExtensions.push(`${expo}${platform}${base}`);
      }
    }
  }
  return expoExtensions;
}

module.exports = {
  computeExpoExtensions,
  jsExtensions,
  platformSubextensions,
  tsExtensions,
};
