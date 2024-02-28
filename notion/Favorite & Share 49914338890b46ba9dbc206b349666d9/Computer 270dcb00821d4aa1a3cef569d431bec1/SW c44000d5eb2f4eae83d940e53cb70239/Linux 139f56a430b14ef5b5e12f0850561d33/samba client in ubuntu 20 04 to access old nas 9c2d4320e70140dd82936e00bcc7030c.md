# samba client in ubuntu 20.04 to access old nas

samba client in ubuntu 20.04 to access old nas

in ubuntu 20.04, only support v2.0 samba. so need change config of samba to lower version.

apt install samba

add
client min protocol = NT1
server min protocol = NT1
in /etc/samba/smb.conf

service smbd restart