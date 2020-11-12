git checkout -b gh-pages
git reset --hard origin/master
mv ./dist/* .
git add .
git commit -m "deploy"
git push origin gh-pages --force
git checkout master