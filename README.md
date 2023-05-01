# Preferred eslint config

Trying to lighten the neutron star that is core/package.json.

Opinionated lint requirements on top of CMS cores for custom themes.

## Usage

`npm i --save-dev @almunnings/eslint-config`

`.eslintrc`

```json
{
  "extends": ["@almunnings/eslint-config/drupal"],
  "root": true
}
```

`.stylelintrc`

```json
{
  "extends": ["@almunnings/eslint-config/style"]
}
```

`.prettierrc.js`

```js
module.exports = {
  ...require("@almunnings/eslint-config/prettier"),
};
```

or

`package.json`

```json
{
  "devDependencies": {
    "@almunnings/eslint-config": "^0.0.3"
  },
  "eslintConfig": {
    "extends": ["@almunnings/eslint-config/drupal"],
    "root": true
  },
  "stylelint": { "extends": ["@almunnings/eslint-config/style"] },
  "prettier": "@almunnings/eslint-config/prettier"
}
```
