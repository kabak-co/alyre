# Convention

_This is the way_ ✨

## Commit
type(scope) topic

eg : `chore(book) add summary and author name`

Atomic commits, what you commit must not be broken !

### type list
- build
- ci
- feat
- fix
- perf
- refactor
- style
- docs
- test

(src)[https://buzut.net/cours/versioning-avec-git/bien-nommer-ses-commits]

## Branch
When you create a new branch, you must be up to date with **main** branch.

`git checkout -b newBranchName`


We try to rebase as much as possible. 

`git pull origin main --rebase`

No git merge !

## Variable
If it's a boolean :  hasXXX or isXXX .


