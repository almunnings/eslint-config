#!/bin/sh

# ./refresh.sh 10.0.x

BRANCH=$1

curl "https://raw.githubusercontent.com/drupal/drupal/${BRANCH}/core/.eslintrc.json?inline=false" --output drupal/.eslintrc.json
curl "https://raw.githubusercontent.com/drupal/drupal/${BRANCH}/core/.prettierrc.json?inline=false" --output drupal/.prettierrc.json
curl "https://raw.githubusercontent.com/drupal/drupal/${BRANCH}/core/.stylelintrc.json?inline=false" --output drupal/.stylelintrc.json
