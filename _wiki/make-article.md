---
title:  "Contribute to the Wiki"
description: "Add or edit an article on the Student Wiki"
author: Noah Alderton
date:   2020-10-28 12:00:00 -0400
categories: campus
---

### Introduction

The Student Wiki is designed to be a source of information that is useful for the Purdue CS/DS community.  We encourage anyone to create a new article for the Wiki or edit a preexisting article.  We only ask that new articles are tangentially useful to the CS/DS community.  We are using GitHub as the means of managing edits to the Student Wiki.  Therefore, to contribute to the Student Wiki, you must have a GitHub account

#### Create a New Article

##### Step 1
First, you need to fork the purdueusb.com website repository.  This can be done by going to the [GitHub repository page](https://github.com/Purdue-CSUSB/purdueusb.com), and click the "Fork" button on the top right.

##### Step 2
Once you are in your fork of the Purdue USB website repository, navigate to the `_wiki` directory.

##### Step 3
Next, click "Add file" on the top right, then click "Create new file".  

##### Step 4 
From here you are going to create a Markdown file for your article.  If you are not familiar with Markdown, please read through [this guide](https://guides.github.com/features/mastering-markdown/).

The name of your Markdown file's name should be no more that 3 words long, with dashes (-) separating the words.  The file should always end in the `.md` file extension.  The filename will be the URL slug, so `lawson-fob.md` becomes `/wiki/lawson-fob`.

To keep the flow of information consistent, please **do not use `h1 (#)` or `h2 (##)` headings**. 

You can also use emojis seen on this [cheat sheet](https://www.webfx.com/tools/emoji-cheat-sheet/)! :bangbang:

The beginning of your Markdown file should begin with "front matter."  This is metadata that is used by Jekyll to better organize your article.  This is an example of front matter.  

```yaml
---
title:  "Contribute to the Wiki"
description: "Add or edit an article on the Student Wiki"
author: Noah Alderton
date:   2020-10-28 12:00:00 -0400
categories: campus
---
```

- title: Title of the article
- description: Describe what the article is about. Keep this down to one sentence.
- author: List of author names exactly as they appear in membership data files.
- date: Date of most recent edit
- categories: Category this fits the article, like `technical` or `campus`. Multiple categories can be included, as long as they are comma separated, an between square brackets.

**A note about images**: Please only use images hosted by USB - not from an outside source. In addition, use descriptive and readable captions for wiki images, as they will be displayed to the user and read aloud via screen readers.  Add images to a directory in `/assets/images/wiki/<article-name>`.  From there, will be able to reference local images in your article like so:

```md
![Community Hub Homepage](/assets/images/wiki/connect-vpn/step1.png)
```

##### Step 5
Once you are finished typing up your article, add a commit message, and click the green "Commit new file" button on the bottom.

##### Step 6
Now, you need to go to the "Pull requests" tab, and click the green "New pull request" button.  Here, you are going to create a new pull request that merges your fork of the website into the Purdue-CSUSB/purdueusb.com repo.  