---
title:  "Optimize your search on our wiki"
description: "Save yourself some time!"
author: Zach Bryant
date:   2020-06-29 00:00:00 -0400
categories: meta
---

Our wiki is built with tools make your searches more powerful and precise. You can use any combination of the operators explained below:

### Wildcards
Wildcards let you match any text and are represented by asterisks (\*). For example, `C* S*` matches words starting with *C* or *S*. Together they match phrases like *Computer Science* or *Canadian Studies*, among other things.

### Fields
Fields relate to meta-information about our articles, such as the date or author. You can use them to search only titles, for example, instead of searching the entire wiki.

Available fields: `title`, `description`, `content`, `author`, `category`, and `date`.

### Boosts
You can use boosts to prioritize certain search terms over others. For example, `foo^10 bar` tells the website you're 10x more interested in the search term *foo* than *bar*. Articles containing *foo* would then be higher in the search results.

### Fuzzy Matches
Fuzzy matching allows for some grace if you misspell a term or are off by a few letters. For example, `foo~1` matches anything 1 letter away from *foo*, like *boo* or *food*. It will not match words like *boot* because it has a difference of two letters.

### Term Presence
Term presence allows you to explicitly include or exclude phrases in your search query with the symbols `+` and `-`, respectively. For example, `+foo -bar baz` matches only content with *foo* and without *bar*, that also may contain *baz*.

By default, a result comes back if any word separated by a space matches some content. This is a limitation of the code our website uses. Searching for `+author:Purdue Pete` is seen as two separate terms, `+author:Purdue` and `Pete`. 

Nothing's perfect. 

### Bringing It All Together
You can make your search as simple or as complex as you'd like. As an example, if I wanted to search for meta-articles I've authored in June, containing the mis-spelled phrase *crakato-uh*, I could type `category:meta +author:Zach +Bryant +date:June -crakatoa~1`. Except at this time, my *only* article contains the phrase *krakatoa*.

Thank you for coming to my TED talk.
