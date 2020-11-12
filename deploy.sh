git push origin :gh-pages
git checkout -b -gh-pages
rm README.md
mv dist .
git add .
git commit -m "deploy"
git push origin gh-pages
git checkout master
git branch -D gh-pages