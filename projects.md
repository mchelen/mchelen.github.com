---
layout: page
title : Projects
group: navigation
---
{% include JB/setup %}



## JSON Resume ##
![JSON Resume](https://avatars1.githubusercontent.com/u/7943272?v=3&s=200)

## Personal Blog ##
[My Blog](http://michaelchelen.net)


## OpenSci ##
[My Blog](http://blog.opensci.info)


<ul class="posts projects-posts">
  {% for post in site.categories["project"] %}

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
