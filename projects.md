---
layout: page
title : Projects
group: navigation
weight: 0
---
{% include JB/setup %}



## JSON Resume ##
![JSON Resume](https://avatars1.githubusercontent.com/u/7943272?v=3&s=200)

## Personal Blog ##
[My Blog](http://michaelchelen.net)


## OpenSci ##
[My Blog](http://blog.opensci.info)


<div id="post-list">

  {% for post in site.categories["project"] %}

<h1>
  <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a>
</h1>

  {{ post.content | split:"<!--more-->" | first }}

  {% unless post.tags == empty %}
<ul class="tag_box inline">
  <li><i class="glyphicon glyphicon-tags gray"></i></li>
  {% assign tags_list = post.tags %}
  {% include JB/tags_list_nocount %}
</ul>
  {% endunless %} 
    
  {% endfor %}
</div>
