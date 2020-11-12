git push origin :gh-pages
git checkout -b -gh-pages
rm README.md
mv dist .
git push origin gh-pages
git checkout master
git branch -D gh-pages