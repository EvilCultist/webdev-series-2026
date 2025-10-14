# **Git**

### What is Git

<p align=center>
<img src="https://imgs.xkcd.com/comics/git.png" alt="xkcd git" />
</p>

> git is a version control system  

- [best way to learn git](https://git-scm.com/docs/gittutorial)
- [mit official resources](https://missing.csail.mit.edu/2020/version-control/)

**What is a version control system**:
> Tracks changes: Keeps a history of what was changed, when, and by whom.  
> Enables collaboration: Multiple people can work on the same files without overwriting each other’s work.  
> Allows rollback: You can revert to a previous version if something breaks or needs to be undone.  
> Branches and merges: You can experiment in separate "branches" and then merge successful changes into the main project.  

### **Why do I need version control**  

lets imagine a few scenarios,

1. You have a project. You want to add a new feature. Everything seems fine until suddenly, your old code stops working. You start debugging, add some print statements, maybe even step through with GDB. But things are getting messy.

How Git Helps:

- You could have created a branch for your feature. Your main code stays untouched.
- If the new feature breaks something, you can easily compare changes or roll back.
- No need to panic or manually undo changes.

2. You’re cleaning up your project and accidentally delete a module or overwrite a file with an older version. Now something is broken — and you can’t remember exactly what changed.

How Git Helps:

- Every change is recorded. You can recover deleted files or see previous versions of any file.
- You can even find exactly which commit introduced a bug using tools like git bisect.

3. You and two teammates are working on the same codebase. One of you updates a config file, another modifies the same function. Suddenly, there are conflicts and unexpected bugs.

How Git Helps:

- Git tracks who changed what and when.
- You can work on separate branches, and merge changes in a controlled way.
- If there's a conflict, Git highlights it clearly so you can resolve it without losing anyone's work.

4. You’re experimenting with a new algorithm. You’re not sure it’ll work, but you want to try it without messing up your current, working implementation.

How Git Helps:

- Create a temporary branch to experiment freely.
- If it works, merge it. If it doesn’t, just delete the branch.
- Your main code stays clean and stable.

5. You’re revisiting an old part of the project. You don’t remember why you wrote a function a certain way. You’re thinking about changing it, but you're not sure what impact that might have.

How Git Helps:

- Look at the commit history for that file.
- See the commit message explaining the change.
- Understand the context of the decision before modifying anything.

6. Your code is done, and you’re ready to ship it. You need to deploy to staging, then production. Maybe you even need to hotfix something on production later.

How Git Helps:

- You can create tags or releases (e.g. v1.0, v1.1-hotfix).
- You can maintain separate branches for development, staging, and production.
- Everything is traceable and reproducible.

7. A client, teacher, or recruiter asks: “Can you show me what you worked on and how it evolved?”

How Git Helps:

- Your commits tell the story of your work.
- You can show progress over time, not just the final result.
- A GitHub/GitLab/Bitbucket repo acts like a portfolio.

# Now, let us [Install Git](https://git-scm.com/downloads)

go to the link, download the version for you operating system.
it should be very plug and play. when installing make sure you add git to your path and install git cli.

## There are many ways to use git

### Gui based git Helpers

- git Gui
- [git kraken](https://www.gitkraken.com/git-client)

### Git Cli

initialize a git repository in an existing project

```bash
git init
```

# GitHub

what is github?  
  
github is a platform to store your git repositories so that others can access them.
