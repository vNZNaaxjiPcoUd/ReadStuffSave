# DDNS of Google

```
#!/usr/bin/python3.8
import requests as r
from lxml import html

s=r.get("<http://myip.com.tw>")
tree = html.fromstring(s.content)
color=green>111.240.228.211</font></h1>
ip=tree.xpath('//font')
IP=ip[0].text
o=r.get("<https://ID:PASSWD@domains.google.com/nic/update?hostname=AA.BB&myip=%s>" % IP)
f=open("/tmp/out.txt",'a')
f.write(o.text)
f.write("\\n")
f.close()

```