#!/bin/sh -l

echo "Moving to SharePoint";
echo "Moving to SharePoint2";
cd $GITHUB_WORKSPACE
node /app/index.js
[ $? -eq 0 ]  || exit 1

