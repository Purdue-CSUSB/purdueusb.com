# Purdue USB Website

This repository is created for Purdue's CS Undergraduate Student Board. This website was designed to be easily maintained. Information that is frequently updated, like members, initiatives, and student resources, can all be updated by editing YAML and Markdown files. This site is built using Jekyll with a customized minima theme. Jekyll was selected due to its compatibility with GitHub Pages, as well as it's quality of life improvements. We tried to make this site fairly lightweight. Jekyll only allows for static site creation, which is fine for our purposes.

## Installation

Please follow the installation instructions found on the [Jekyll Website](https://jekyllrb.com/docs/installation/). There are instructions for Windows, macOS, and Linux. Once Jekyll is properly installed, clone the repository. Then, run `bundle exec jekyll serve` in the repository's root directory.

## TODO

- Make post sidebar in student resource page independent scrollable from the article content
- Either create an about page (maybe about the history of the organization) or have it link to the landing instead.
- Future deprecation issues: convert all @import statements when support is added for @use in the jekyll sass converter. See [relevant issue](https://github.com/jekyll/jekyll-sass-converter/issues/105).

## Usage

### Editing USB Members

1. If necessary, add their photograph in `assets/images/members`. Make sure the images are cropped to be square.
2. Edit `_data/members.yml` with their name, image, title, and class rank.

### Editing Initiatives

1. Add an initiative logo in `assets/images/initiative`. The logo must be 400px by 289px in resolution.
2. Edit `_data/initiatives.yml` with title, image, and description.

### Editing Objectives

1. Add an objective logo to `assets/images/objectives`
2. Edit `_data/objectives.yml` with title, image, and description.

### Editing Student Resources

Articles are to be written in Markdown. Look at one of the preexisting articles as a reference. Be sure to include the following "front matter" attributes to the top of the Markdown file between a pair of `---`.

- layout - This will always be `post`
- title - Title of the article
- description - Describe what the article is about. Keep this down to one sentence.
- author: Name of the author
- date - Date of most recent edit
- categories: Category this fits the article, like `technical` or `campus`. Multiple categories can be included, as long as they are comma separated, an between square brackets.

### Layouts

Refers to files within the `_layouts` directory, that define the markup for your theme.

- `default.html` &mdash; The base layout that lays the foundation for subsequent layouts. The derived layouts inject their contents into this file at the line that says `{{ content }}` and are linked to this file via [FrontMatter](https://jekyllrb.com/docs/frontmatter/) declaration `layout: default`. This was not used for some of our pages, due to a need for custom designs. Instead, a few pages (index.html and initiatives.html) use their own custom layouts.
- `page.html` &mdash; The layout for your documents that contain FrontMatter, but are not posts. This was used for the student resources page.
- `post.html` &mdash; The layout for your posts. Each of the student resource articles is a "post."

### Includes

Refers to snippets of code within the `_includes` directory that can be inserted in multiple layouts (and another include-file as well) within the same theme-gem.

- `aboutus.html` &mdash; The mission and objectives of USB.
- `footer.html` &mdash; Defines the site's footer section.
- `head.html` &mdash; Code-block that defines the `<head></head>` in _default_ layout.
- `header.html` &mdash; Defines the site's main header section. By default, pages with a defined `title` attribute will have links displayed here.
- `initiatives.html` &mdash; Shows the cards for each initiative present in `_data/initiatives.yml`.
- `members.html` &mdash; A flexbox showing the profile images of all the current members of USB.
- `postsidebar.html` &mdash; The sidebar of all articles that is seen when a user clicks on a student resource post/
- `social.html` &mdash; Creates a row of social media icons that are used in the footer. Clicking on these icons will take the user to our respective social media pages.

### Sass

Refers to `.scss` files within the `_sass` directory that define the site's styles.

- `theme.scss` &mdash; The core file imported by the preprocessed `main.scss`. t defines the variable defaults for the theme and also further imports sass partials to supplement itself.
- `theme/_base.scss` &mdash; Resets and defines base styles for various HTML elements.
- `theme/_layout.scss` &mdash; Defines the visual style for various layouts.
- `theme/_syntax-highlighting.scss` &mdash; Defines the styles for syntax-highlighting.
- `pages/*.scss` &mdash; In an effort to improve maintainability, each primary page has its own corresponding `.scss` file for defining custom styles. Please define future classes and ids for a page in its corresponding `.scss` file. If additional pages are added in the future, add a new `.scss` file. Be sure to import this new file in the `style.scss` file.
- `style.scss` &mdash; An additional file imported by the preprocessed `main.scss`. It imports the other custom `pages/*.scss` files, as well as sets variables that are used in those files.

### Assets

Refers to various asset files within the `assets` directory.
Contains the `main.scss` that imports sass files from within the `_sass` directory. This `main.scss` is what gets processed into the theme's main stylesheet `main.css` called by `_layouts/default.html` via `_includes/head.html`.

This directory can include sub-directories to manage assets of similar type, and will be copied over as is, to the final transformed site directory.

### Change default date format

You can change the default date format by specifying `site.minima.date_format`
in `_config.yml`.

```
# Minima date format
# refer to http://shopify.github.io/liquid/filters/date/ if you want to customize this
minima:
  date_format: "%b %-d, %Y"
```

### Social networks

You can add links to the accounts you have on other sites, with respective icon, by adding one or more of the following options in your config:

```yaml
twitter_username: jekyllrb
github_username: jekyll
dribbble_username: jekyll
facebook_username: jekyll
flickr_username: jekyll
instagram_username: jekyll
linkedin_username: jekyll
pinterest_username: jekyll
youtube_username: jekyll
rss: rss

mastodon:
  - username: jekyll
    instance: example.com
  - username: jekyll2
    instance: example.com
```
