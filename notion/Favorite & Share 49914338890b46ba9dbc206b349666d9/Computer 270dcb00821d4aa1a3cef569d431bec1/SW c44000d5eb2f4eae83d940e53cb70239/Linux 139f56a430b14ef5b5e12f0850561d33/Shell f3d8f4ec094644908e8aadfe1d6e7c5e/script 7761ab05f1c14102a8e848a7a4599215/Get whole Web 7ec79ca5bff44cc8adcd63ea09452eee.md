# Get whole Web

Get whole Web

$ wget \
--recursive \
--no-clobber \
--page-requisites \
--html-extension \
--convert-links \
--restrict-file-names=windows \
--domains [website.org](http://website.org/) \
--no-parent \
[www.haodoo.net/](http://www.haodoo.net/)

[http://www.haodoo.net/](http://www.haodoo.net/)

wget \
--recursive \
--no-clobber \
--page-requisites \
--html-extension \
--convert-links \
--restrict-file-names=windows \
--domains [haodoo.net](http://haodoo.net/) \
--no-parent \
-e robots=off \
--reject mp3,jpg \
[www.haodoo.net/](http://www.haodoo.net/)