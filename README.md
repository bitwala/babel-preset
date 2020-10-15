# @bitwala/babel-preset

[![npm version](https://badge.fury.io/js/%40bitwala%2Fbabel-preset.svg)](https://badge.fury.io/js/%40bitwala%2Fbabel-preset)
[![npm monthly downloads](https://img.shields.io/npm/dm/%40bitwala%2Fbabel-preset.svg)](https://img.shields.io/npm/dm/%40bitwala%2Fbabel-preset.svg)

Bitwala babel preset.

## Installation

Using npm:

```sh
npm install --save-dev --save-exact @bitwala/babel-preset
```

or using yarn:

```sh
yarn add --dev --exact @bitwala/babel-preset
```

## Usage

Create a new `babel.config.js` for your project and add the following configuration:

```js
module.exports = {
  presets: ["@bitwala/babel-preset"],
};
```

If you want to use the serverless preset, use the following configuration:

```js
module.exports = {
  presets: ["@bitwala/babel-preset/serverless"],
};
```

### Create a new release

1. Edit the version in the `package.json` file.
2. `git add package.json`.
3. Commit the changes `git commit -m vx.x.x`.
4. Create a new git tag `git tag -a vx.x.x -m vx.x.x`.
5. Run `yarn npm publish` to publish the package to the registry.
6. Push the changes `git push && git push --tags`.
