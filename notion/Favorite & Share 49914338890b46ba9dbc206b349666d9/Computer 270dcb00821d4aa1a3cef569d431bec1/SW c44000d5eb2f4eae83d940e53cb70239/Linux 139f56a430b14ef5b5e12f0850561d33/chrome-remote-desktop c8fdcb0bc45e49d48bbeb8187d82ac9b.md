# chrome-remote-desktop

## chrome-remote-desktop

in ubuntu 18.04

```
### sudo apt-get install lxde
~/.chrome-remote-desktop-session
    ### exec /usr/bin/startlxde
### sudo service chrome-remote-desktop restart

```

---

[https://superuser.com/questions/778028/configuring-chrome-remote-desktop-with-ubuntu-gnome-14-04/850359#850359](https://superuser.com/questions/778028/configuring-chrome-remote-desktop-with-ubuntu-gnome-14-04/850359#850359)

The chrome-remote-desktop application works just fine with linux generally and Ubuntu specifically. It however does NOT play nice with LightDM and Unity. Ubuntu Bug #1274013, and the related bug in comment #3 shed some light on this: gnome-session is broken without 3d acceleration.

To resolve this I added LXDE to my ubuntu installation on my desktop:

### sudo apt-get install lxde

I still am able to use the standard Unity Desktop when accessing my desktop locally, but the I have the LXDE desktop to use via chrome-remote-desktop remotely.

This is accomplished by creating (or altering) the ~/.chrome-remote-desktop-session file to read

### exec /usr/bin/startlxde

Then, to shutdown and restart the Chromoting service, run from terminal

### sudo service chrome-remote-desktop restart

Now attempt to remote in from another computer. This should start a virtual session in LXDE even if the remote computer is currently logged in under Unity/LightDM.

# ChromeRemote

- ([http://robotslam.blogspot.com/2018/03/ubuntu-chrome-remote-desktop-setting.html](http://robotslam.blogspot.com/2018/03/ubuntu-chrome-remote-desktop-setting.html))

Ubuntu Chrome 遠端桌面設定
Ubuntu16.04 下用 Chrome Remote Desktop 取代緩慢的 Teamviewer
由於在Ubuntu下有使用遠端桌面的需求，找了習慣的Teamviewer來用，發現Teamviewer在Windows下算順暢但在Ubuntu下的速度慢得難以忍受，找了其它的替代方案如X11 server等，畫面陽春又無法直接操作原桌面GUI，難道沒有好用的遠端桌面嗎？
Chrome Remote Desktop(CRD) 或許是個最好的解決方案……才怪
CRD在以預設安裝好時，一樣會以X11 server一樣的方式，為遠端連入建立一個Session，因此連入時，你將會看到桌面的Menu bar不見了，滑鼠也怪怪的，總之怎麼用怎麼不順，但別絕望的太早，設定一下CRD會是Ubuntu下用得最順手的遠端桌面。
Chrome 安裝
到官網下載 google-chrome-stable_current_amd64.deb

$ sudo dpkg -i google-chrome-stable_current_amd64.deb
$ sudo apt-get -f install
$ sudo dpkg -i google-chrome-stable_current_amd64.deb

Settings => Sign in to Chrome
安裝 Chrome Remote Desktop Plugin
Remote Assistance => Get started => Share => 下載 chrome-remote-desktop_current_amd64.deb

$ sudo dpkg -i chrome-remote-desktop_current_amd64.deb

# 安裝缺乏的套件

$ sudo apt-get -f install
$ sudo dpkg -i chrome-remote-desktop_current_amd64.deb

完成上述安裝後，還需要進一步設定
Chrome remote desktop 設定
停止 Chrome Remote Desktop:

/opt/google/chrome-remote-desktop/chrome-remote-desktop --stop

Backup the original configuration:

sudo cp /opt/google/chrome-remote-desktop/chrome-remote-desktop /opt/google/chrome-remote-desktop/chrome-remote-desktop.orig

Edit the config file (sudo vim, gksudo gedit, etc):

sudo vim /opt/google/chrome-remote-desktop/chrome-remote-desktop

Find DEFAULT_SIZES and amend to the remote desktop resolution. For example:

DEFAULT_SIZES = "1920x1080"

Set the X display number to console (0):

FIRST_X_DISPLAY_NUMBER = 0

Comment out sections that look for additional displays:

```
#while os.path.exists(X_LOCK_FILE_TEMPLATE % display):
#  display += 1

```

Reuse the existing X session instead of launching a new one. Alter launch_session() by commenting out launch_x_server() and launch_x_session() and instead setting the display environment variable, so that the function definition ultimately looks like the following:

def launch_session(self, x_args):
self._init_child_env()
self._setup_pulseaudio()
self._setup_gnubby()
#self._launch_x_server(x_args)
#self._launch_x_session()
display = self.get_unused_display_number()
self.child_env["DISPLAY"] = ":%d" % display

Save and exit the editor. Start Chrome Remote Desktop:

/opt/google/chrome-remote-desktop/chrome-remote-desktop --start