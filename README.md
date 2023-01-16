# Icon Agency Drupal Integrations

Trying to lighten the neutron star that is core/package.json.

Opinionated lint requirements on top of CMS cores for custom themes.

## Usage

`npm i --save-dev @iconagency/eslint-config`

`.eslintrc`
```json
{
  "extends": ["@iconagency/eslint-config/drupal"],
  "root": true 
}
```

`.stylelintrc`
```json
{
  "extends": ["@iconagency/eslint-config/style"],
}

```

`.prettierrc.js`
```js
module.exports = {
  ...require("@iconagency/eslint-config/prettier")
};
```

or

`package.json`
```json
{
  "devDependencies": {
    "@iconagency/eslint-config": "^0.0.1"
  },
  "eslintConfig": { "extends": ["@iconagency/eslint-config/drupal"], "root": true },
  "stylelint": { "extends": ["@iconagency/eslint-config/style"] },
  "prettier": "@iconagency/eslint-config/prettier"
}
```