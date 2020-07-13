---
layout: null
---
{% assign date_format = site.date_format | default: "%b %-d, %Y" %}
let searchData = [{% for post in site.wiki %}{
    "index":        {{forloop.index}},
    "title":        "{{ post.title }}",
    "description":  "{{post.description | strip_html | strip_newlines }}",
    "url":          "{{ site.baseurl }}{{ post.url }}",
    "category":     "{{ post.categories | join: ', '}}",
    "date":         "{{ post.date | date: date_format }}",
    "content":      "{{ post.content | strip_html | strip_newlines | escape_once }}",
    "author":       "{{ post.author }}",
}{% unless forloop.last %}, {% endunless %}{% endfor %}]