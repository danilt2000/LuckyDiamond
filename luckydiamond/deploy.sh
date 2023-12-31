#!/usr/bin/env sh

# abort on errors
set -e
# build
npm run build

# navigate into the build output directory
cd dist
# git checkout main

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

# git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:danilt2000/danilt2000.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git pull origin
# git push -f git@github.com:danilt2000/LuckyDiamond.git main:gh-pages
# git subtree push --prefix dist origin gh-pages

cd -