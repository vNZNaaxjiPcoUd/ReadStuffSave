# samba server

smbd
samba server

cmd
lsb_release -a
apt install samba -y
systemctl status smbd
mkdir /home/user/share1
mkdir /home/user/share2
chmod 777 /home/user/share1
chmod 777 /home/user/share2
useradd user1
useradd user2
smbpasswd -a user1
smbpasswd -a user2

nano /etc/samba/smb.conf
[share1]
path = /home/user/share1
valid users = user1, user2
read list = user2
write list = user1
browseable = yes

[share2]
path = /home/user/share2
valid users = user1, user2
read list = user1
write list = user2
browseable = yes

testparm