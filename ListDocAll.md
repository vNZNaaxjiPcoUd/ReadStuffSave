---
---
### d.jwint
{% for p in site.pages | sort : "title" %}[{{ p.title }},]({{ p.url }}){% endfor %}
🍀

### doc.jwint
{% for p in site.localshareda10798f8b9bb16bd2baddba911c5c7 | sort : "name" %}
[{{ p.title }},]({{ p.url }})
{% endfor %}
🍀

### news
{% for p in site.news | sort : "name" %}
[{{ p.title }},]({{ p.url }})
{% endfor %}
🍀

### page
{% for p in site.pages | sort : "title" %}
[{{ p.name }},]({{ p.url }})
{% endfor %}
🍀

### Blog
{% for p in site.posts %}
[{{ p.date | date_to_string }},]({{ p.url }})
{% endfor %}
🍀
	  
