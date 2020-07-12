#!/bin/sh

echo "Node $(node --version)"
echo "Ruby $(ruby -v), RubgyGems $(gem -v)"
echo "GCC $(gcc -dumpversion), Make $(make -v)"

echo
echo Installing node packages...
npm install
npm install --only=dev

echo
echo Installing gems...
bundle install

echo
echo Cleaning cache and generated files...
rm -rf ./_site ./.jekyll-cache

echo
echo Building site...
eval JEKYLL_ENV="production" bundle exec jekyll build --trace

echo
echo Done