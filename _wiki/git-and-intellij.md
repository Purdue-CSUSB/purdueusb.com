---
title:  "Cloning a Github Repository with Intellij"
description: "Learn how to use IntelliJ to clone a git repository and track your changes"
author: CS193 Team
date:   2021-03-26 12:00:00 -0400
categories: technical
---

In this tutorial, we will be cloning a Github Repository into our local machine using IntelliJ and practicing committing and pushing our changes. To recap:

Our *Github Repository* is the code hosted on Github. Our *local machine* is the computer/device you are going to be editing the code on.The changes made on your local machine will not be sent to our github repository until they are *committed and pushed*.

## Step 1: Clone this repository

Our first step is to clone a Github Repository onto our local machine

### How to clone remote repo to local repo and manage it with IntelliJ

1. Close any projects you currently have open

`File` -> `Close Project`

You should now see the main IntelliJ screen (It looks like the picture below).

2. Checkout a project from Version Control.  This is done from the welcome screen in Intellij!
![](/assets/images/wiki/git-intellij/git-intellij-welcome.png)

Click `Check out from Version Control` -> `Git` -> `Log in to GitHub...`

The **URL** is asking for the HTTPS clone link. You can access this link if you go to the repository you’re trying to open with Intellij, click on the green ‘Code’ button on the top right, and then copying the HTTPS link. 

![](/assets/images/wiki/git-intellij/git-intellij-cloneLink.png)

The **Directory** is where this project will be stored on YOUR computer. Specify where in your computer you’d like the project to be saved.

3. Click 'Clone'
![](/assets/images/wiki/git-intellij/git-intellij-welcomescreen.png)

4. Enter your GitHub credentials if asked for. (Note: The order of steps 3 and 4 might be flipped)

![](/assets/images/wiki/git-intellij/git-intellij-login.png)

5. Confirm checkout from version control. Click 'yes'

![](/assets/images/wiki/git-intellij/git-intellij-versionControl.png)

6. IntelliJ will now ask you if you want to customize setup or rely on the default. You can just click 'Yes' or 'Confirm' on the screens that follow

7. You’ve successfully cloned your git repository onto your computer (and opened it in Intellij)!

You should see the files from your git repository on your Intellij window now. Remember, we have just *cloned* your git repository- all changes you make to these Intellij files will STAY on your local machine unless you push them to the central repository in Github. In other words, if you change a file from your new cloned repository on IntelliJ and save that file, you will NOT see your changes if you check your Github repository online. To learn how to commit and push your changes, move on to the next step!


## Step 2: Push your changes to GitHub!

After you make new changes, you must **commit and push** them so your Github repository will be updated. You can find Intellij's Git options on the top right of the window. Depending on which IntelliJ version you have, the icons could appear differently.

![](/assets/images/wiki/git-intellij/git-intellij-gitButtons.PNG)

1. Commit and push your changes. **Note: Depending on version, the pull and commit may look like blue and green arrows instead.**

![](/assets/images/wiki/git-intellij/git-intellij-commitButton.png)
![](/assets/images/wiki/git-intellij/git-intellij-commitMsg.png)

**Only selecting 'Commit' will NOT push you changes to your Github repository!**

2. Confirm you'd like to push changes

![](/assets/images/wiki/git-intellij/git-intellij-pushDialog.png)

![](/assets/images/wiki/git-intellij/git-intellij-pullButton.png)




