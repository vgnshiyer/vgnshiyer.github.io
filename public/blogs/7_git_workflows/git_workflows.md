---
title: 7 Essential Git Workflows made easier.
subtitle: Mastering git for streamlined development
date: Dec 29, 2023
cover: /blogs/7_git_workflows/images/cover.png
link: https://vgnshiyer.medium.com/7-essential-git-workflows-made-easier-e533b5ef56c0
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

