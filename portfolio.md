---
layout: page
title : Portfolio
group: secondary-navigation
---
{% include JB/setup %}

<ul class="posts portfolio-posts">
  {% for post in site.categories["portfolio"] %}

    <li><h1>
      <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a>
    </h1>

      {{ post.content | split:"<!--more-->" | first }}

      {% unless post.tags == empty %}
    <ul class="tag_box inline">
      <li><i class="glyphicon glyphicon-tags gray"></i></li>
      {% assign tags_list = post.tags %}
      {% include JB/tags_list %}
    </ul>
      {% endunless %} 

    </li>
  {% endfor %}
</ul>
