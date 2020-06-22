# Purdue USB Website

This repository is created for Purdue's CS Undergraduate Student Board website. Our main consideration is the ease of maintenance and content updates. Information that frequently changes, like members, initiatives, and student resources, can all be updated through YAML and Markdown files. 

This is a static site built using [Jekyll](https://jekyllrb.com), designed on [Figma](https://figma.com), and hosted here on Github Pages. Jekyll was selected due to its compatibility with GH Pages, as well as it's out-of-the-box blog functionality, among other quality of life features.

## Contribution

### Editing Site Information

Currently with automatic GH pages builds, information can be edited directly on github. 

### **Please take a moment to familiarize yourself with [YAML](https://learnxinyminutes.com/docs/yaml/) and [Markdown](https://learnxinyminutes.com/docs/markdown/) formats.**

#### USB Members

1. Edit either `_data/members.yml` or `_data/alumni.yml` with their name, title, class rank, and (optionally) an appropriate personal website.
2. If necessary, add their photograph (**no file extension!**) in `assets/images/members`. Make sure the image file name matches their name in their yml entry, and that the images are square.

#### Initiatives

1. Add an initiative logo in `assets/images/initiative`. Please use a square resolution, or it will be cropped to fit automatically.
2. Edit `_data/initiatives.yml` with `title`, `image`, `description`, (optional) `inactive`, (optional) `buttonText` and `buttonLink` and list of participating `members` names (as spelled in members.yml).
  - An inactive entry can contain either `true | string`. True will display "INACTIVE" and anything else will be displayed as-is.
  - Former members can be designated alumnus by making their class a year.

#### Objectives

1. Add an objective logo to `assets/images/objectives`
2. Edit `_data/objectives.yml` with title, image, and description.

#### Student Resources

Articles are to be written in Markdown. The name of the file will be the URL slug, e.g. `lawson-fob.md` becomes `/resources/lawson-fob`. Be sure to include the following "front matter" attributes to the top of the Markdown file between a pair of `---`:

- title - Title of the article
- description - Describe what the article is about. Keep this down to one sentence.
- author: Name of the author
- date - Date of most recent edit
- categories: Category this fits the article, like `technical` or `campus`. Multiple categories can be included, as long as they are comma separated, an between square brackets.

Example:
```
File: social-life.md
---
title: How to have a social life
description: A very useful resource for CS/DS students.
category: 
 - technical
 - campus
---
```

To disable lightbox on a markdown link, use the `no-lightbox` class like so:
```markdown
[video link](https://youtu.be/iWowJBRMtpc?t=90s){:.no-lightbox}
```

## Development

### Installation & Setup

Please follow the installation instructions found on the [Jekyll Website](https://jekyllrb.com/docs/installation/). There are instructions for Windows, macOS, and Linux. Once Jekyll is properly installed, clone the repository. Then, run `bundle exec jekyll serve` in the repository's root directory.

  - Linux users: you can use `run.sh [-h]` to run the jekyll build server continuously and open in browser (-h for headless) all at once.

### TODO

- ~~Make post sidebar in student resource page independent scrollable from the article content~~
- Decrease load time.
  - Compress all image assets.
  - Minify & purge css assets. Jekyll built-in compact mode is currently broken.
- Add search functionality to student resources.
- Ensure proper site accessibility.
  - Test with screen reader.
  - Make use of ally.js or another library.
- ~~Add USB alumni to collapsible section.~~
  - Collect USB alumni photos, names, websites, and year they left usb
- Either create an about page (maybe about the history of the organization) or have it link to the landing instead.
- Create 404 page doodle.
- Componentize site elements with [web components](https://css-tricks.com/an-introduction-to-web-components/)
- Future deprecation issues: convert all @import statements when support is added for @use in the jekyll sass converter. See [relevant issue](https://github.com/jekyll/jekyll-sass-converter/issues/105).

### Plugins

Curious about plugins? Github only supports automatic builds with [certain plugins](https://help.github.com/en/github/working-with-github-pages/about-github-pages-and-jekyll). If you want to introduce another plugin, consider using CDN-delivered JS libraries, git-hooks to build automatically when you push, or Github Actions.

### Config

Here we define site configuration variables such as content collections, permalink formats, social links, plugins, and other site-wide defaults.

### Data

Data collections can be stored in YAML files under the `_data` directory, and can be accessed by using `site.data.<my_collection>` in [Liquid](https://jekyllrb.com/docs/liquid/).

### Layouts

Refers to files within the `_layouts` directory, that define the markup for your theme.

- `default.html` &mdash; The base layout that lays the foundation for subsequent layouts. The derived layouts inject their contents into this file at the line that says `{{ content }}` and are linked to this file via [FrontMatter](https://jekyllrb.com/docs/frontmatter/) declaration `layout: default`.
- `wiki.html` &mdash; An extension of the base layout that includes a sidebar and content area for wiki posts.

### Includes

Refers to snippets of code within the `_includes` directory that can be inserted in multiple layouts (and another include-file as well) within the same theme-gem.
- Nav
  - `footer.html` &mdash; Defines the site's footer section.
  - `header.html` &mdash; Defines the site's main header section. By default, pages defined in `_data/header_links` will show up here in defined order.
  - `sidebar.html` &mdash; The sidebar of all wiki entries that is seen when a user clicks on a student resource link.

- Components
  - `aboutus.html` &mdash; The mission and objectives of USB, and our members.
  - `initiatives.html` &mdash; Shows the cards for each initiative present in `_data/initiatives.yml`.
  - `members.html` &mdash; A component showing members of USB as listed in `members.yml`. 
  - `social.html` &mdash; Creates a row of social media icons that are used in the footer. Clicking on these icons will take the user to our respective social media pages.

- `head.html` &mdash; Code-block that defines the `<head></head>` in _default_ layout.


### Sass

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

### Assets

Refers to various asset files within the `assets` directory.
Contains the `main.scss` that imports sass files from within the `_sass` directory. This `main.scss` is what gets processed into the theme's main stylesheet `main.css` called by `_layouts/default.html` via `_includes/head.html`.

This directory can include sub-directories to manage assets of similar type, and will be copied over as is, to the final transformed site directory.

All assets will be compressed by the img-bot on github, so try to stick to compressable formats. Please check for quality.

### Change default date format

You can change the default date format by specifying `site.date_format`
in `_config.yml`.

```
# Date Format
# refer to https://shopify.github.io/liquid/filters/date/ to customize this
date_format: "%b %-d, %Y"
```

### Social networks

You can add links to the accounts USB maintains on other sites by adding options to the config in the following format (`https://` included):

```yaml
myspace: "https://myspace.com/mycoolestprofile"
```

Please ensure we have an svg icon for the site you add, and add one if not.

### Accessibility

The USB serves all students, and our website is no exception. Ensuring WCAG compliance is of the utmost importance, and accessibility issues [may lead to lawsuits](https://www.boia.org/blog/is-there-a-legal-requirement-to-implement-wcag) as [potential violations of the ADA Title III requirement](https://www.grassley.senate.gov/sites/default/files/documents/2018-10-11%20DOJ%20to%20Grassley%20-%20ADA%20Website%20Accessibility.pdf)!

#### What should you do?

The WCAG is tedious to read, but first and foremost use your head and empathize with the user. Secondly, you can read a summary or checklist such as [this one](https://uxdesign.cc/web-accessibility-standards-an-overview-for-designers-1a4d39f2fe5e) published in the UX Collective publication.

It doesn't have to be perfect, but we should be as compliant as possible whenever we can.