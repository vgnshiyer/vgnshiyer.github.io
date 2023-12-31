---
title: 7 Essential Git Workflows made easier.
author: Vignesh Iyer
date: 2023-12-28
---

Git is an indispensable tool in a software engineer's toolkit. Whether you are collaborating in a company or working in a group project, Git is one of the most used tool for track software development progress. Besides tracking progress, it also provides a gamut of extremely useful features that enhance your development experience. Knowing how and when to use these seemingly complex features is something that is incumbent on a good software engineer. \
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

Fast forwarding is a simplification performed while merging by Git and it happens by default when there is no new commits in the base branch. In this case, Git will just move the head of the main branch to the tip of the feature branch.

### 2. No Fast-forward merge

```
          D--E (feature)
         /
  A--B--C--F (main)

  git checkout main
  git merge feature --no-ff

          D--E (feature)
         /    \
  A--B--C--F---G (main)
```

You can explicitly inform Git to not perform a fast-forward while merging. In this case, Git will create a new merge commit on the base branch. This happens by default when the base branch has drifted since you created your feature branch. In this case Git cannot just fast-forward and place the feature branch on the tip of main. \
While this preserves the branched structure, it makes the history non-linear. To avoid branched history, Git provides `rebase` which you will see next.

### 3. Rebasing main

The `rebase` command tells Git to reapply all the commits that are in current branch (and not in the other branch), on the tip of the other branch. In this example, it is telling Git to take all the commits of the feature branch and reapply them on the new HEAD (F in the example) of the main branch.

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

You would do this when the base branch has drifted since you branched out to feature and you want to include the consequent changes from main. Running `git rebase main` takes all the changes made in the feature branch that aren't in the main branch and reapplies them on top of the main branch.

**ps:** When your project has multiple branches and you want all of them to stay updated with your main, here are your options.

**a. Rebasing**

You can `rebase` all the feature branches onto main, so that it includes the latest changes in main. This will keep the history of the project clean and linear. However, you will lose the true information of your project history as your history will be rewritten.

**b. Merging**

Another option you have to keep all your feature branches up-to-date is using a `merge`. Git will create a new merge commit in every single one of your feature branches. While this does help you preserve the true history of your project, it tend to make your commit graph look a bit messy, especially when you are working on a large project with multiple branches.

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

This is rather an unconventional way of rebasing. You would usually choose to do this when you move your code for a release or some experimentation temporarily on a separate branch while others are working on main. Once your work on this branch is complete you can rebase main onto feature branch to include the commits from your branch into main. \
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

### 5. Squash merge

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

This is a cool feature of git that allows you to summarize multiple commits into one. You will run the merge command with the `--squash` option with a terse message describing your changes. Git makes a new commit with all the changes from the feature branch with a commit message that you provide. A branch that has a single individual feature or a simple bug fix is a good candidate for a squashed merge. If a branch has a lot of changes, it might be better to preserve the history.

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

With the help of interactive rebasing, you can rewrite the commit history of your project. However, this is something you should sparingly use due to its perilous nature. Here are certain scenarios where you may consider using this feature of Git. 

a. You realize that you have a lot of micro-commits in your project history and you want to squash some of them into one. \
b. You find that files/changes related to certain commits are not required and you want to remove those commits. \
c. You think that the some commits in your history should come over the others and you want to reorder the commits. \
d. You noticed that the commit messages for certain commits are misleading and you want to change some of them. \
e. You found that a commit includes major changes to multiple files and you would like to split it into multiple commits.

The command you need to use for interactive rebasing is,

```bash
git rebase -i HEAD~n
```
where 'n' is the number of commits you want to modify.

Now you have this excerpt to come back to, the next time you face any issues while merging or rebasing. 
Drawing these diagrams on the command line was fun. I hope you found this useful. Be sure to leave a feedback. :\)