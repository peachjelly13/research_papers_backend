#!/bin/bash

if [ -f ".env" ]; then 
	source .env
else
	echo ".env file not found"
	exit 1
fi

git status

echo "If you want to add all the files enter . else enter the file path"

read filepath

if [ "$filepath" = "." ]; then
      git add .
else
  git add "$filepath"
fi 

echo "Enter your commit message"

read commitMessage 

if [ "$commitMessage" = "" ]; then
	echo "enter a commit message"
else
	git commit -m "$commitMessage"
fi

echo "Enter branch"

read branchName 

git branch -m "$branchName"

git push -u origin "$branchName"




