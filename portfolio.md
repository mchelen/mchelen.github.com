---
layout: page
title : Portfolio
group: secondary-navigation
---
{% include JB/setup %}

### Coming Soon ###

<ul class="posts">
  {% for post in site.categories["portfolio"] %}

    <li>
      <span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a>
    </li>
    
  {% endfor %}
</ul>
