# md5 gen pass

[md5.gen.pass.sh](http://md5.gen.pass.sh/)
echo -n $1 | openssl md5 | awk '{printf "%s",$2}' | openssl md5 | awk '{printf "%s",$2}' | openssl md5 | awk '{print $2}'