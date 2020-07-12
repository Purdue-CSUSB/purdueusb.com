#!/bin/bash

echo "Node $(node --version)"
echo "Ruby $(ruby -v), RubgyGems $(gem -v)"
echo "GCC $(gcc -v), Make $(make -v)"

echo Cleaning cache and generated files...
rm -rf ./_site ./.jekyll-cache

echo Building site...
bundle exec jekyll build --trace

echo Committing...
git add -A
git commit -m "Automatic build"

echo Done