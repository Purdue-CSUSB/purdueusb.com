#!/bin/bash

./clean.sh
[[ $1 != -h ]] && echo "Opening site in browser" && ./opensite.sh &
bundle exec jekyll serve --incremental --livereload
