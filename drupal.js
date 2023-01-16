const merge = require('deepmerge')
const core = require('./core/drupal/.eslintrc.json')

const opinionated = {
  "rules": {
    "func-names": 0,
    "no-var": 0,
    "object-shorthand": 0,
    "prefer-template": 0,
    "import/no-unresolved": 0,
    "class-methods-use-this": 0,
    "new-cap": "warn",
    "prefer-const": "warn",
    "no-new": 0,
  },
  "globals": {
    "$": true
  },
  "parser": "@babel/eslint-parser",
  "parserOptions": {
    "allowImportExportEverywhere": true,
    "requireConfigFile": false
  }
}

module.exports = merge(core, opinionated)