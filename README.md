# eslint-config-heimdall

Shared ESLint configs for Node, Web, and universal Expo projects.

[![Test, Release & Publish](https://github.com/akhenda/eslint-config-heimdall/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/akhenda/eslint-config-heimdall/actions/workflows/main.yml) ![npm](https://img.shields.io/npm/v/eslint-config-heimdall) ![Branches](./badges/coverage-branches.svg) ![Functions](./badges/coverage-functions.svg) ![Lines](./badges/coverage-lines.svg) ![Statements](./badges/coverage-statements.svg) ![Jest coverage](./badges/coverage-jest%20coverage.svg)

## Installation

```sh
yarn add --dev eslint-config-heimdall
```

You will also need to install `eslint` and `prettier`:

```sh
yarn add --dev eslint prettier
```

## Usage

Import this config into your own ESLint configuration using the `extends` option. ESLint checks both `package.json` and `.eslintrc.*` files for its configuration:

### package.json

```js
{
  "eslintConfig": {
    // Choose from heimdall/native, heimdall/node, heimdall/web
    "extends": "heimdall"
  }
}
```

### .eslintrc.js

```js
module.exports = {
  extends: 'heimdall',
};
```

## Customizing Prettier

If you would like to customize the Prettier settings, create a file named `.prettierrc` in your project directory. An example of Prettier configuration file:

```json
{
  "bracketSpacing": true,
  "singleQuote": true,
  "trailingComma": "all",
  "semi": true,
  "tabWidth": 2,
  "printWidth": 120,
  "jsxBracketSameLine": false,
  "arrowParens": "always"
}
```

Read more about [configuring `prettier`](https://prettier.io/docs/en/configuration.html) and [all of the available options](https://prettier.io/docs/en/options.html).

## Support for Different Platforms

There are several configs for different platforms. They are:

- `heimdall`: the basic config for JavaScript projects for which there isn't a more specific config,
- `heimdall/native`: the config for React Native projects, including Expo projects, with support for React and JSX,
- `heimdall/web`: the config for code that runs in web browsers, with support for React and JSX,
- `heimdall/node`: the config for code that runs in Node.

For an Expo project, your configuration might look like this:

```js
"eslintConfig": {
  "extends": "heimdall/native"
}
```

You also can extend multiple configs, which is useful for projects that span several platforms:

```js
"eslintConfig": {
  "extends": ["heimdall/node", "heimdall/web"]
}
```

## Philosophy

This config is designed to mark severe problems (ex: syntax errors) as errors and stylistic issues as warnings. This lets your team apply policies like, "make sure a commit has no errors but ignore warnings if the commit didn't introduce them."

It's also designed to be a more lenient config for teams who are stronger at decision-making and have a culture of osmotically learning coding guidelines and benefit more from flexibility than rigid rules.

## Reference

[How to Create Your Own ESLint Config Package](https://www.freecodecamp.org/news/creating-your-own-eslint-config-package/)
[Expo Eslint Config](https://github.com/expo/expo/tree/main/packages/eslint-config-universe)
