---
layout: page
title: Blog
permalink: /blog/
---
Here are my posts:
{% for post in site.posts %}
  - [{{ post.title }}]({{ post.url }})
{% endfor %}
