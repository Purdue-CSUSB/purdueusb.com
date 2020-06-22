module.exports = {
    // These are the files that Purgecss will search through
    content: ["./_site/**/*.md", "./_site/**/*.html"],
  
    // These are the stylesheets that will be subjected to the purge
    css: ["./_site/assets/main.css"],

    // For media queries, pseudo-classes, etc
    defaultExtractor: content => content.match(/[\w-/:@]+(?<!:)/g) || []
  };