#!/bin/bash 
mkdir -p vendor/bundle
mkdir html
bundle install --path vendor/bundle
bundle exec jekyll build --destination html || exit 1
echo "Done"