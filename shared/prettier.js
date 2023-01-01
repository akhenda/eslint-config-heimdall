/* eslint-disable sort-keys-fix/sort-keys-fix */
module.exports = {
  extends: ['plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        bracketSpacing: true,
        singleQuote: true,
        trailingComma: 'all',
        semi: true,
        tabWidth: 2,
        printWidth: 120,
        jsxBracketSameLine: false,
        arrowParens: 'always',

        // below line is for windows users facing CLRF and eslint/prettier error
        // non windows users feel free to delete it
        endOfLine: 'auto',
      },
    ],
  },
};
