---
title:  "Transferring Files via SCP and FileZilla"
description: "Copy files to and from Purdue's servers"
author: 
    - Noah Alderton
date:   2020-04-01 17:00:00 -0400
categories: technical
---


### Introduction

Sometimes there comes a need where you need to transfer a files between your personal computer and one of Purdue's servers (like data.cs.purdue.edu).  The tutorial will show you how to transfer files between your computer and a remote server (and vice versa) using SCP via command line and FileZilla.  These methods will work on Windows, Mac, and Linux.

### Solution 1: Command Line

#### Step 1

On Windows open “Windows PowerShell.” On Mac or Linux, open your respective Terminal.

![Windows Powershell](https://piazza.com/redirect/s3?bucket=uploads&prefix=attach%2Fk4xoekpg2qs2af%2Fj6jr6ij1sv162q%2Fk8gfyjjwujp5%2Fimage1.png)

#### Step 2

In order to transfer your files, we are going to use SCP. SCP works the same regardless of operating system. The SCP program takes the following parameters:

`scp <source_directory> <destination_directory>`

For our purposes of transferring homework from data, we are going to use the following command:

```bash
scp <purdue_username>@data.cs.purdue.edu:<homework_directory> <personal_machine_directory>
```

For example, if I wanted to transfer my hw2.c file to my current directory on my PC, I would run:

```bash
scp nalderto@data.cs.purdue.edu:~/cs240/hw2/hw2.c .
```

![Windows Powershell](https://piazza.com/redirect/s3?bucket=uploads&prefix=attach%2Fk4xoekpg2qs2af%2Fj6jr6ij1sv162q%2Fk8gfz3k1fmvd%2Fimage2.png)

#### Step 3

If everything ran properly, you should be able to access your homework on your personal machine. Keep in mind that this is a ***copy*** of your homework, so any changes you make on your personal machine will not be reflected on data and vice versa. If we want to transfer a file from our personal machine to data, we would need to run SCP again, flipping the source and destination directories.

For example, if I wanted to transfer my hw2.c file from my personal machine to data, I would run:

```bash
scp hw2.c nalderto@data.cs.purdue.edu:~/cs240/hw2/
```

### Solution 2: FileZilla

#### Step 1

If you are not comfortable with the command line, there are several graphical user interface programs that are available which provide the same functionality. In this tutorial we are covering FileZilla, as it is compatible with Windows, Mac, and Linux.

You can download FileZilla [here](https://filezilla-project.org/download.php?show_all=1).

#### Step 2

Once you have finished installing FileZilla, open it up. On the top, there should be 4 input boxes. Put in the following information:Host: `sftp://data.cs.purdue.edu`Username: Purdue UsernamePassword: Purdue Career Account Password (same password used to SSH into data)Port: 22

#### Step 3

Once the appropriate information is entered, click “Quickconnect”. A dialog might appear about trusting the connect. Go ahead and trust the connection.

#### Step 4

You should now be connected to data! Your data filesystem is on the right part of the screen, while your personal computer’s files are on the left. You can drag and drop the files between the machines as you wish!

![Filezilla example](https://piazza.com/redirect/s3?bucket=uploads&prefix=attach%2Fk4xoekpg2qs2af%2Fj6jr6ij1sv162q%2Fk8gfzjg5s2wl%2Fimage3.png)