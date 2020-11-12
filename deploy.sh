git push origin :gh-pages
git checkout -b gh-pages
mv -r dist/* .
git add .
git commit -m "deploy"
git push origin gh-pages --force
git checkout master
git checkout .
git branch -D gh-pagesc