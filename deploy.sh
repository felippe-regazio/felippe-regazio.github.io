git push origin :gh-pages
git checkout -b gh-pages
mv ./dist/* .
git add .
git commit -m "deploy"
git push origin gh-pages --force
git checkout master
git branch -D gh-pages