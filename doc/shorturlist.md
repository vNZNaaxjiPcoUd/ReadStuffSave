---
layout: linkNewTab
title: shorturl
---

<br>

<ul>
  {% for p in site.shorturl %}
    <li>
      <p><a href="https://aa.jwint.net/{{ p.title | slugify: "ascii" }}">{{ p.title | slugify: "ascii" }} {{ p.name }} {{ p.dt }}</a></p>
    </li>
  {% endfor %}
</ul>
