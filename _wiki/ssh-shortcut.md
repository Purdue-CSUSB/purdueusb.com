---
title:  "SSH Shortcut for Purdue Servers"
description: "Tired of typing data.cs.purdue.edu?"
author: Jay Hankins
date:   2020-05-10 00:00:00 -0400
categories: technical
---

It can be tedious to type `ssh <username>@<machine>.cs.purdue.edu` over and over again whenever you need to login to a CS machine.

Here's a little shell function which shortens this command to just <username> with an optional argument of the machine you wish to connect to.

### Installation
Copy and paste the following code into your shell rc file. This may be `~/.bashrc` or `~/.zshrc`.

```shell
<username> () {
    ssh <username>@${1:-<default_machine>}.cs.purdue.edu
}
```

Make sure to replace any information in between the `<` and `>` symbols. For example, my function looks like this:

```shell
hankinsj () {
    ssh hankinsj@${1:-data}.cs.purdue.edu
}
```
My username is `hankinsj` and my default machine is `data` in this example.

### Usage
`$ <username>`
You can include an optional argument which specifies the machine to connect to. Otherwise, it will connect to your chosen default machine.

### Example
`$ hankinsj mc04`
This will connect me automatically to `mc04.cs.purdue.edu`.