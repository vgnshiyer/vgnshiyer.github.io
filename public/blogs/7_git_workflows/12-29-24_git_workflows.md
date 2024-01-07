---
title: 7 Essential Git Workflows made easier.
subtitle: Mastering git for streamlined development
date: Dec 29, 2023
cover: /blogs/7_git_workflows/images/cover.png
---

Git is an indispensable tool in a software engineer’s toolkit. Whether you are collaborating in a company or working in a group project, Git is one of the most used tool for track software development progress. Besides tracking progress, it also provides a gamut of extremely useful features that enhance your development experience. Knowing how and when to use these seemingly complex features is something that is incumbent on a good software engineer. 

Here is a simplified breakdown of 7 essential Git workflows that you will likely encounter in your journey as a Software Engineer.

### 1. Fast-forward merge

```
          D--E (feature)
         /
  A--B--C (main)

  git checkout main
  git merge feature

  A--B--C--D--E (main, feature)
```

Fast forwarding is a simplification performed while merging by Git and it happens by default when there is no new commits in the base (main) branch. In this case, Git will just move the head of the main branch to the tip of the feature branch.

### 2. No Fast-forward merge

```
          D--E (feature)
         /
  A--B--C (main)

  git checkout main
  git merge feature --no-ff

          D--E (feature)
         /    \
  A--B--C--F---G (main)
```

You can explicitly inform Git to not perform a fast-forward while merging. In this case, Git will create a new merge commit on the base branch. This happens by default when the base branch has drifted since you created your feature branch. In this case Git cannot just fast-forward and place the feature branch on the tip of main. 

While this preserves the branched structure, it makes the history non-linear. To avoid branched history, Git provides rebase which you will see next.

### 3. Rebasing main
The rebase command tells Git to reapply all the commits that are in current branch (and not in the other branch), on the tip of the other branch. In this example, it is telling Git to take all the commits of the feature branch and reapply them on the new HEAD (F in the example) of the main branch.

```
          D--E (feature)
         /
  A--B--C--F (main)

  git checkout feature
  git rebase main

             D--E (feature)
            /
  A--B--C--F (main)
```

You would do this when the base branch has drifted since you branched out to feature and you want to include the consequent changes from main. Running git rebase main takes all the changes made in the feature branch that aren’t in the main branch and reapplies them on top of the main branch.

ps: When your project has multiple branches and you want all of them to stay updated with your main, here are your options.

**a. Rebasing**

You can rebase all the feature branches onto main, so that it includes the latest changes in main. This will keep the history of the project clean and linear. However, you will lose the true information of your project history as your history will be rewritten.

**b. Merging**

Another option you have to keep all your feature branches up-to-date is using a merge. Git will create a new merge commit in every single one of your feature branches. While this does help you preserve the true history of your project, it tend to make your commit graph look a bit messy, especially when you are working on a large project with multiple branches.

### 3. Rebasing releases

```
          D--E (feature)
         /
  A--B--C--F (main)

  git checkout main
  git rebase feature

          D--E (feature)
         /    \
  A--B--C      F (main)
```

This is rather an unconventional way of rebasing. You would usually choose to do this when you move your code for a release or some experimentation temporarily on a separate branch while others are working on main. Once your work on this branch is complete you can rebase main onto feature branch to include the commits from your branch into main. 
The resulting graph will maintain a linear commit history, appearing as though branching never occurred.

### 4. Rebase & Merge

```
          D--E (feature)
         /
  A--B--C--F (main)

  git checkout feature
  git rebase main

             D--E (feature)
            /    
  A--B--C--F (main)

  git checkout main
  git merge feature

  A--B--C--F--D--E (main, feature)
```

This is a neat use of both commands together helping you maintain a clean and linear project history. By rebasing the feature branch onto the main branch you make sure that the feature branch has all the changes from main. Once you are done with your work on the feature, you can do a fast-forward merge with main.

### 5. Squash Merge

```
          D--E (feature)
         /
  A--B--C (main)

  git checkout main
  git merge feature --squash
  git commit -m "squashing commits from feature"

          D--E (feature)
         /    
  A--B--C------F (main)
```

This is a cool feature of Git that allows you to summarize multiple commits into one. You will run the merge command with the — squash option with a terse message describing your changes. Git makes a new commit with all the changes from the feature branch with a commit message that you provide. A branch that has a single individual feature or a simple bug fix is a good candidate for a squashed merge. If a branch has a lot of changes, it might be better to preserve the history.

### 6. Cherrypicking

```
          D--E (feature)
         /
  A--B--C--F (main)

  git checkout main
  git cherry-pick D

          D--E (feature)
         /
  A--B--C--F--D (main)
```

This is one extremely useful feature of Git that avoids a lot of rework and save a ton of time. You can pick certain commits from other branches to your branch. Say you found a really useful helper method that your peer wrote in their branch while working on a feature. Their feature is not fully developed, but you want to use the helper method. While you can always copy the contents of the file from their branch and commit a new one in your branch, Git provides a simple command that does that for you. Just pick the commit hash or a range of commit hashes and run the above command.

### 7. Interactive rebasing

With the help of interactive rebasing, you can rewrite the commit history of your project. However, this is something you should sparingly use due to its perilous nature.

Running below command will open an editor with all ’n’ commits.

```
# n is the number of commits you want to modify
git rebase -i HEAD~n
```

```
pick 9b5d36e added user input for name 
pick df04b1b revert this commit 
pick 2b90f4f added comment to hello world

# Rebase 4bf661e..2b90f4f onto 4bf661e (3 commands)
#
# Commands:
# p, pick ‹commit> = use commit
# r, reword <commit> = use commit, but edit the commit message
# e, edit <commit> = use commit, but stop for amending
# s, squash <commit> = use commit, but meld into previous commit
```

Here are certain scenarios where you may consider using this feature.

a] You realize that you have a lot of micro-commits in your project history and you want to squash some of them into one.

```
# Replace 'pick' with 'squash' for the commits you want to squash into the previous commit.
```

b] You find that files/changes related to certain commits are not required and you want to remove those commits.

```
# Delete the lines corresponding to the commits you want to remove.
```

c] You think that the some commits in your history should come over the others and you want to reorder the commits.

```
# Reorder the lines to change the order of the commits.
```

d] You noticed that the commit messages for certain commits are misleading and you want to change some of them.

```
# Replace 'pick' with 'reword' for the commits you want to change the message of.
# Save and close the editor. You will be prompted to change the commit messages.
```

e] You found that a commit includes major changes to multiple files and you would like to split it into multiple commits.

```
# Replace 'pick' with 'edit' for the commit you want to split.
# Save and close the editor. Git will pause at the commit you want to split.
# Use 'git reset --soft HEAD^' to unstage the commit.
# Use 'git add -p' to interactively stage parts of the files.
# Commit the changes with 'git commit'.
# You can repeat this as many times as you want.
# Once you are done, you can continue the rebase with 'git rebase --continue'.
```

Now you have this excerpt to come back to, the next time you face any issues while merging or rebasing.

Drawing these diagrams on the command line was fun. I hope you found this useful. Be sure to leave a feedback! :)

