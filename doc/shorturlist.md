---
layout: default
title: shorturl
---

<br>

<ul>
  {% for p in site.shorturl reversed %}
    <li>
      <p><h3>{{ p.title }}</h3><h4>   {{ p.date | date_to_string}}</h4></p>
      {{ p.content }}
    </li>
  {% endfor %}
</ul>
