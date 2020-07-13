# Purdue USB Website

This repository is created for Purdue's CS Undergraduate Student Board website. Our main consideration is the ease of maintenance and content updates. Information that frequently changes, like members, initiatives, and Student Wiki, can all be updated through YAML and Markdown files. 

This is a static site built using [Jekyll](https://jekyllrb.com), designed on [Figma](https://figma.com), and hosted here on Github Pages. Jekyll was selected due to its compatibility with GH Pages, as well as it's out-of-the-box blog functionality.

## **Contribution**

### **Editing Site Information**
~~Currently with automatic GH pages builds, information can be edited directly on github.~~ Editing site information on github may be automatically deployed by netlify [*confirmation needed*].

*Please take a moment to familiarize yourself with [YAML](https://learnxinyminutes.com/docs/yaml/) and [Markdown](https://learnxinyminutes.com/docs/markdown/) formats.*

#### **Emails**
Please use an [obfuscation technique](https://mothereff.in/html-entities) to prevent web crawlers from detecting emails on our site.

#### **Images**
Please run `webp-convert` on any directories of images you add that are not in webp format.

#### **USB Members**
1. Edit either `_data/members.yml` or `_data/alumni.yml` with their name, title, class rank, and (optionally) an appropriate personal website.
2. If necessary, add their photograph in `assets/images/members`. Make sure the image file name matches their name in their yml entry, the images are square, and 300x300.
   - We don't want to be serving images larger than they need to be.

#### **Initiatives**
1. Add an initiative logo in `assets/images/initiative`. Please use a square resolution, or it will be cropped to fit automatically.
2. Edit `_data/initiatives.yml` with `title`, `image`, `description`, (optional) `inactive`, (optional) `buttonText` and `buttonLink` and list of participating `members` names (as spelled in members.yml).
   - An inactive entry can contain either `true | string`. True will display "INACTIVE" and anything else will be displayed as-is.
   - Former members can be designated alumnus by making their class a year.

#### **Objectives**
1. Add an objective logo to `assets/images/objectives`
2. Edit `_data/objectives.yml` with title, image, and description.

#### **Student Wiki**
Wiki posts are written in Markdown only. To keep the flow of information consistent, please **do not use `h1 (#)` or `h2 (##)` headings**. 

You can also use emojis seen on this [cheat sheet](https://www.webfx.com/tools/emoji-cheat-sheet/)! :bangbang:

**A note about images**: Please only use images hosted by USB - not from an outside source. In addition, use descriptive and readable captions for wiki images, as they will be displayed to the user and read aloud via screen readers.

The filename will be the URL slug, so `lawson-fob.md` becomes `/resources/lawson-fob`. Be sure to include the following [front matter](https://jekyllrb.com/docs/front-matter/) attributes:

- title: Title of the article
- description: Describe what the article is about. Keep this down to one sentence.
- author: List of author names exactly as they appear in membership data files.
- date: Date of most recent edit
- categories: Category this fits the article, like `technical` or `campus`. Multiple categories can be included, as long as they are comma separated, an between square brackets.

Example: `apply-to-usb.md`
```yaml
---
title: How to Apply to the USB
description: A very useful resource for prospective members.
author:
 - Clippy
category: 
 - campus
 - clubs
---
thank u for your interest
![clippy](assets/images/clippy.png)
```

To disable lightcase on a markdown link, use the `no-lightcase` class like so:
```markdown
[video link](https://youtu.be/iWowJBRMtpc?t=90s){:.no-lightcase}
```

## **Development**

### **Installation & Setup**

This project contains submodule dependencies, so clone using `git clone --recursive git@github.com:Purdue-CSUSB/purdueusb.com.git`. If you forgot to do this, run `git submodule update --init --recursive` in the project root.

NPM is required ([version here](.node-version)) to run `purgecss` in production.

You can get Jekyll running by following the [installation tutorial](https://jekyllrb.com/docs/installation/). There are instructions for Windows, macOS, and Linux. Once Jekyll is properly installed, run `bundle exec jekyll serve` in the repository's root directory.

  - **Linux users**: you can use `run.sh [-hilpt]` to run the jekyll build server conveniently.
    - -c) Clean jekyll cache files.
    - -h) Headless mode (don't open your browser automatically).
    - -i) Run `bundle install` at start.
    - -l) Live server (can cause gigabytes of cache buildup and require browser restart).
    - -p) Production mode: runs `purgecss` (slow *i know*).
    - -t) Debug mode, shows traceback.

Note: Jekyll does not parse changes to `_config.yml` in watch mode. You must restart the build server for changes to take effect.

### **TODO**
- [x]  Make post sidebar in student resource page independent scrollable from the article content
- [ ]  Decrease load time.
  - [x]  Compress all image assets.
  - [x]  Minify & purge css assets. Jekyll built-in compact mode is currently broken.
- [x]  Add search functionality to Student Wiki.
- [ ]  Ensure proper site accessibility.
  - [ ]  Test with screen reader.
  - [ ]  Make use of ally.js or another library.
- [x]  Add USB alumni to collapsible section.
  - [ ]  Collect USB alumni photos, names, websites, and year they left usb
- [ ]  Either create an about page (maybe about the history of the organization) or have it link to the landing instead.
- [x]  Create 404 page doodle.
- [ ]  Decrease build time
  - [ ]  Phase out `generate.css` with `tailwind.css` (closely modeled after this framework)
- [ ]  Un-extendify sass with silent classes.
- [ ]  Componentize site elements with [web components](https://css-tricks.com/an-introduction-to-web-components/)
- [ ]  Future deprecation issues: convert all @import statements when support is added for @use in the jekyll sass converter. See [relevant issue](https://github.com/jekyll/jekyll-sass-converter/issues/105).

### **Known Issues**
- Purgecss will purge style classes used/constructed programmatically. Sometimes it is necessary to exempt classes from purgecss like so:
    ```scss
    /*! purgecss start ignore */
    .bg {
        @include generate-subclass($colors, 'background-color');
    }
    /*! purgecss end ignore */
    ```
  - Purgecss doesn't like to obey ignore statements ¯\\_(ツ)\_/¯
- Live reload can cause **major** cache buildup and freeze your computer.
- An error seems to cause intermittent failure to load live changes:
    ```ERROR Errno::ECONNRESET: Connection reset by peer @ io_fillbuf```
- Build time is `s l o w` because of css class generation, while production builds are even slower to purge most of those classes. This is more or less a `wontfix` issue because it gives css writers major flexibility.
- Don't use tab characters in `_config.yml`
- `warning: Using the last argument as keyword parameters is deprecated` -> run `bundle update jekyll` to get to `4.0.1`.

### Testing
You can access your changes from another device on your local network through your computer's local IP (e.g. `192.168.1.1:4000`).

When you make a change to the website, it's necessary to test your changes on the `staging` branch before pushing to master. Once you've made a PR, netlify will automatill build and deploy a preview of the changes. You'll get a notification in the #website channel. Alternatively, you can request a build via `./build.sh [-s|-p].

If you make a change to the HTML/CSS/plugins of the site, test your changes on all screen sizes available in the devtools device toolbar. You never know what will break with CSS, so please look through the whole site to be sure it's working.

### **Plugins**

Plugins currently in use:

- Jekyll SEO tag
- Jemoji (github emoji support)
- Jekyll purgecss
- ~~Jekyll target-blank (opens markdown links in new window)~~ *randomly breaks build and/or contact page*
- Jekyll minifier *Netlify also handles minification*
- jekyll-redirect-from

Local Dependencies:
- Highlight.js: Syntax highlighting
- Lightcase: Seamlessly display image and video links in a modal dialog
- Lunr.js: Site search support

NPM Dependencies:
- Purgecss: Remove unused css classes

CDN Dependencies:
- Anchorjs: Provide anchor link support
- MagicGrid: Align items in a masonry grid
- FontAwesome: Vast array of vector icons
- JQuery

### **Config**
Here we define site configuration variables such as content collections, permalink formats, plugins, and other site-wide defaults.

### **Data**
Data collections can be stored in YAML files under the `_data` directory, and can be accessed by using `site.data.<my_collection>` in [Liquid](https://jekyllrb.com/docs/liquid/).

### **Layouts**
Refers to files within the `_layouts` directory, that define the markup for your theme.

- `default.html` &mdash; The base layout that lays the foundation for subsequent layouts. The derived layouts inject their contents into this file at the line that says `{{ content }}` and are linked to this file via [FrontMatter](https://jekyllrb.com/docs/frontmatter/) declaration `layout: default`.
- `wiki.html` &mdash; An extension of the base layout that includes a sidebar and content area for wiki posts.

### **Includes**
Refers to snippets of code within the `_includes` directory that can be inserted in multiple layouts (and another include-file as well) within the same theme-gem.
- Nav
  - `footer.html` &mdash; Defines the site's footer section.
  - `header.html` &mdash; Defines the site's main header section. By default, pages defined in `_data/header_links` will show up here in defined order.
  - `sidebar.html` &mdash; The sidebar of all wiki entries that is seen when a user clicks on a student resource link.
- Components
  - `aboutus.html` &mdash; The mission and objectives of USB, and our members.
  - `initiatives.html` &mdash; Shows the cards for each initiative present in `_data/initiatives.yml`.
  - `members/` &mdash; A group of components showing members of USB as listed in `members.yml`. 
  - `post.html` &mdash; The layout of a wiki resource (excludes sidebar).
  - `rating.html` &mdash; The layout of a wiki resource (excludes sidebar).
  - `social.html` &mdash; Creates a row of social media icons that are used in the footer. Clicking on these icons will take the user to our respective social media pages.
- `head.html` &mdash; Code-block that defines the `<head></head>` in _default_ layout.


### **Sass**
Refers to `.scss` files within the `_sass` directory that define the site's styles.

- `theme.scss` &mdash; The core file imported by the preprocessed `main.scss`. It defines the variable defaults for the theme and also further imports sass partials to supplement itself.
- `mixins.scss` &mdash; A file containing all miscellaneous mixins used to dynamically include styles.
- `generate.scss` &mdash; A complex file used to generate tailwind-esque variants for html class styling, such as screen size breakpoints, or light and dark colors. Not recommended or necessary to modify this file in order to customize the theme unless you understand what you're doing.
- `utils.scss` &mdash; Supplemental and miscellaneous styles.
- `theme/_base.scss` &mdash; Defines base global styles for various HTML elements.
- `theme/_layout.scss` &mdash; Defines styles specifically for layouts and layout elements.
- `theme/_syntax-highlighting.scss` &mdash; Defines the styles for syntax-highlighting.
- `pages/*.scss` &mdash; Each primary page may draw on a corresponding sass file for their specific files. If additional pages are added in the future, add a new `.scss` file. Be sure to import this new file in the `main.scss` file.

Special mention:
- `assets/main.scss` &mdash; The main file to be transpiled by sass into regular css. All page styles imported here on top of the theme.

### **Assets**
Refers to various asset files within the `assets` directory.
Contains the `main.scss` that imports sass files from within the `_sass` directory. This `main.scss` is what gets processed into the theme's main stylesheet `main.css` called by `_layouts/default.html` via `_includes/head.html`.

This directory can include sub-directories to manage assets of similar type, and will be copied over as is, to the final transformed site directory.

All assets will be compressed by the img-bot on github, so try to stick to compressable formats. Please check for quality.

### **Default date format**
You can change the default date format by specifying `site.date_format`
in `_config.yml`.

```
# Date Format
# refer to https://shopify.github.io/liquid/filters/date/ to customize this
date_format: "%b %-d, %Y"
```

### **Social networks**
You can add links to the accounts USB maintains on other sites by adding options to the config in the following format (`https://` included):

```yaml
myspace: "https://myspace.com/mycoolestprofile"
```

Please ensure we have an svg icon for the site you add, and add one if not.

### **Accessibility**
The USB serves all students, and our website is no exception. Ensuring WCAG compliance is very important, and accessibility issues [have lead to lawsuits](https://www.boia.org/blog/is-there-a-legal-requirement-to-implement-wcag) as [potential violations of the ADA Title III requirement](https://www.grassley.senate.gov/sites/default/files/documents/2018-10-11%20DOJ%20to%20Grassley%20-%20ADA%20Website%20Accessibility.pdf)!

#### **What should you do?**
The WCAG is tedious to read, but first and foremost use your head and empathize with the user. Secondly, you can read a summary or checklist such as [this one](https://uxdesign.cc/web-accessibility-standards-an-overview-for-designers-1a4d39f2fe5e) published in the UX Collective publication.

It doesn't have to be perfect, but we should be as compliant as possible whenever we can.