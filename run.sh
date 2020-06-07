#!/bin/bash

[[ $1 != -h ]] && ./opensite.sh &
bundle exec jekyll serve --incremental --livereload
