# new install an ubuntu OS

# 

# chrome

```
- also have a remote desktop

```

# exfat

- for access
    - sudo apt-get update
    - sudo apt-get install exfat-utils exfat-fuse
- for format
    - by command
        - sudo fdisk -l, find out the target disk
        - sudo mkfs.exfat -n LABEL /dev/sdXn, change format
        - sudo fsck.exfat /dev/sdXn, format disk
    - by "disk"
        - find the partition
        - format it, type-="CUSTOM"
            - fill filesystem="exfat"
        - done

# virtualbox

- The extention package is not free

# iso to USB

- dd if=.. of=... bs=1024k status=progress
- Simulate the CD

# install to USB

- format a partion for disk
    - format can be ex4 or brtree
        - usb dongle , use ex4
        - usb disk , use brtree
    - from begin
    - must be bootable
    - mount to /
- install to whole disk
    - ex: /dev/sdc, not this partition.
- need not mount swap