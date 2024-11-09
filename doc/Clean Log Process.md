Git Clean Log
=============

```
#!/bin/bash
#cd git
#git clone -b ex git@github.com:vNZNaaxjiPcoUd/Exchange.git ex
#cd ex

# create new branch
git checkout --orphan new_ex
# add all remain file to new branch
git add -A
# commit
git commit -am "new_ex"
# delete old branch
git branch -D ex
# change new branch name to old branch name
git branch -m ex
# force push all change to remote repo
git push -f --set-upstream origin ex
# set remote branch
#git branch --set-upstream-to=origin/ex

```
