#!/bin/sh

echo "Node $(node --version)"
echo "Ruby $(ruby -v), RubgyGems $(gem -v)"
echo "GCC $(gcc -v), Make $(make -v)"

echo NPM dependencies...
npm i -g --unsafe-perm now

echo Installing gems...
bundle install

echo Cleaning cache and generated files...
rm -rf ./_site ./.jekyll-cache

echo Building site...
eval JEKYLL_ENV="production" bundle exec jekyll build --trace

ls _site/
echo Done