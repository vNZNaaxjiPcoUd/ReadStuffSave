# Get public cert

# 

echo -n | openssl s_client -connect [www.protectedtext.com:443](http://www.protectedtext.com:443/) -servername [www.protectedtext.com](http://www.protectedtext.com/) | openssl x509 > test.cert

echo -n | openssl s_client -connect $HOST:$PORTNUMBER -servername $SERVERNAME \
| openssl x509 > /tmp/$SERVERNAME.cert

echo -n | openssl s_client -connect aaa.bbb.ccc:443 -servername aaa.bbb.ccc | openssl x509 > jw.cert

[https://stackoverflow.com/questions/7580508/getting-chrome-to-accept-self-signed-localhost-certificate](https://stackoverflow.com/questions/7580508/getting-chrome-to-accept-self-signed-localhost-certificate)