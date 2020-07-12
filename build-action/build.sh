#!/bin/sh

ls /bin
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
bundle exec jekyll build --trace

echo Committing...
git add -A
git commit -m "Automatic build"

echo Done