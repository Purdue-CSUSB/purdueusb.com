---
title: "Create a personal Purdue CS Website"
description: "Create a website hosted on the Purdue CS servers!"
author: Shriansh Chari
date: 2022-1-6
categories: technical
---
### Introduction
Learning HTML, CSS, and JavaScript is very useful for creating websites, which users can interact with on the browser. The Internet is a great place to showcase a number of things; for instance, a personal website that introduces yourself to others.

One of the most accessible ways of deploying websites on the Internet is actually through the Purdue CS lab servers, which can host the HTML files for your website. 

### How do I create my website?

#### Step 1.

SSH into one of Purdue's servers, or log in directly to a lab computer.

```bash
ssh <user>@data.cs.purdue.edu
```

#### Step 2.

Navigate into the `~/.www` folder.

```bash
cd ~/.www
```

#### Step 3.

Edit the `index.html` file located in the folder. If you reload the page in your browser, you will see the changes appear in your browser. For instance, putting the following HTML code into `index.html`:

```html
<html>
	<body>
		<h2 id="hello-world">Hello world!</h2>	
	</body>
	<style>
		#hello-world {
			color: goldenrod;
		}
	</style>
<html>
```

will result in the following site:

![Hello world!](https://raw.githubusercontent.com/shrianshChari/purdueusb.com/master/assets/images/wiki/purdue-website/hello-world-website.png)

### Limitations

If you want to expand what you can do with this page, there are some limitations imposed that you will need to keep in mind, namely that the site only allows you to utilize a single file: `index.html`. This means that:

- You will not be able to have multiple pages as part of your personal website; it must all be on `index.html`.
- Any CSS styling cannot come from `.css` files within the folder. They must either come from in-line styling, between `<style>` tags within `index.html`, or external CSS files you import that are not within the `~/.www` folder.
- Any JavaScript functionality cannot come from `.js` files within the folder. They must either come between `<script>` tags or external JS files you import that are not within the `~/.www` folder.
