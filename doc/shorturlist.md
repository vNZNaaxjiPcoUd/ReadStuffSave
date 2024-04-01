---
layout: linkNewTab
title: shorturl
---

<br>

<ul>
  {% for p in site.shorturl reversed %}
    <li>
      <p><a href="https://aa.jwint.net/{{ p.title | slugify: "ascii" }}">{{ p.title }}</a></p>
      {{ p.name }}
    </li>
  {% endfor %}
</ul>
