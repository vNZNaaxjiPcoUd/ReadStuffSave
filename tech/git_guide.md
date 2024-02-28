

- [good reference](https://nulab.com/zh-tw/learn/software-development/git-tutorial/how-to-use-git/branching/)

# command
- clone : git clone -b $BranchName $Repo_SSH_URL $DirectoryName
- pull : git pull
- commit : git commit -m "$CommitMessage"
- commit continue : git commit --amend
- push : git push
- push force : git push -f
- delete commit : git revert HEAD
	- git reset --hard HEAD ~
	- remove two commit : git reset --hard HEAD ~~
	- call back remove : git reset --hard ORIG_HEAD
- add file : git add . or git add --all
- hard reset : git 
- branch change : git checkout $BranchName
- merge : git merge $BranchName
- delete branch : git branch -d $BranchName
- status : git status
- branch list and now : git branch
- branch create : git branch $BranchName
- rebase  and merge : git rebase $BranchName
	- conflict solve : git rebase --continue
	- merge : git merge $BranchName
- initial : git init
- tag add : git tag $TagName
	- add commend : git tag -am "$commend" $TagName
- tag show : git tag
- tag delelte : git tag -d $TagName
- log show : git log
	- git log --decorate
- copy commit to other branch : git cherry-pick $TargetID
	- if conflict, need solve it then git add, git commit again
- combine multi commit : git rebase -i HEAD~~





