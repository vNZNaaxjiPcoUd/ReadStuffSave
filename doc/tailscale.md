Tailscale
=========

tailscale

https://login.tailscale.com/admin/machines


sudo tailscale up

##  in ubuntu
### install
curl -fsSL https://tailscale.com/install.sh | sh 

https://login.tailscale.com/admin/machines/new-linux

### setup goto exit node
sudo tailscale set --exit-node=<exit-node-ip>

tailscale --help
