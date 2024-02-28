# tar to split small file

Tar to small file

tar cvzf - data/ | split -b 100000000 - AAAA.

cat AAAA.* | tar xzvf -