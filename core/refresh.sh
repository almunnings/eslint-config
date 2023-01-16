#!/bin/sh

# ./refresh.sh 10.0.x

BRANCH=$1

curl "https://git.drupalcode.org/project/drupal/-/raw/${BRANCH}/core/.eslintrc.json?inline=false" --output drupal/.eslintrc.json
curl "https://git.drupalcode.org/project/drupal/-/raw/${BRANCH}/core/.prettierrc.json?inline=false" --output drupal/.prettierrc.json
curl "https://git.drupalcode.org/project/drupal/-/raw/${BRANCH}/core/.stylelintrc.json?inline=false" --output drupal/.stylelintrc.json
