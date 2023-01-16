const merge = require('deepmerge')
const core = require('./core/drupal/.stylelintrc.json')

const opinionated = {
  "rules": {
    "at-rule-no-unknown": null,
    "function-no-unknown": null,
    "scss/at-extend-no-missing-placeholder": true,
    "string-quotes": "single",
    "unit-allowed-list": ['mm', 'cm']
  },
  "plugins": [
    "stylelint-scss"
  ],
  "overrides": [
    {
      "files": ["**/*.scss"],
      "customSyntax": "postcss-scss"
    }
  ]
}

module.exports = merge(core, opinionated)