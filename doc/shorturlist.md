---
layout: linkNewTab
title: shorturl
---

<br>

<ul>
  {% for p in site.shorturl reversed %}
    <li>
      <p><a href="{{ p.url }}">{{ p.title }}</a></p>
      {{ p.name }}
    </li>
  {% endfor %}
</ul>
