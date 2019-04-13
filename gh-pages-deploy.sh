#!/bin/sh
if [ -z "build" ]
then
  echo "Create the 'build' folder, maybe by running `yarn build`"
  exit 1
fi
git subtree push --prefix build origin gh-pages
