# fdisk & format

## 

# fdisk -l

Disk /dev/sda: 12.9 GB, 12884901888 bytes
255 heads, 63 sectors/track, 1566 cylinders
Units = cylinders of 16065 * 512 = 8225280 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disk identifier: 0x00010897

Device Boot Start End Blocks Id System
/dev/sda1 * 1 64 512000 83 Linux
Partition 1 does not end on cylinder boundary.
/dev/sda2 64 1567 12069888 8e Linux LVM

Disk /dev/sdb: 12.9 GB, 12884901888 bytes
Units = cylinders of 16065 * 512 = 8225280 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disk identifier: 0x00000000

Fdisk/Format

Linux Fdisk 磁碟分割及格式化 Sam Tang  27 July 2015  Linux  No Comments

fdisk 是 Linux 的硬碟分割區管理工具, 可以用作檢視、建立、修改及刪除硬碟分割區。以下會介紹一些 fdisk 的常用例子及格式化分割區的方法。

fdisk 列出現有分割區

要列出硬碟內的現有分割區, 只要直接執行 “fdisk -l [硬碟名稱]” 指令, “fdisk -l” 會列指定硬碟的分割區, 如果無指定硬碟名稱, 會顯示 /proc/partitions 的分割區。例如:

# fdisk -l /dev/sda

Disk /dev/sda: 499.5 GB, 499558383616 bytes
255 heads, 63 sectors/track, 60734 cylinders
Units = cylinders of 16065 * 512 = 8225280 bytes

Device Boot      Start         End      Blocks   Id  System
/dev/sda1   *           1          63      506016   83  Linux
/dev/sda2              64         313     2008125   83  Linux
/dev/sda3             314        6539    50010345   83  Linux
/dev/sda4            6540       60734   435321337+  83  Linux
1
2
3
4
5
6
7
8
9
10
11

# fdisk -l /dev/sda

Disk /dev/sda: 499.5 GB, 499558383616 bytes
255 heads, 63 sectors/track, 60734 cylinders
Units = cylinders of 16065 * 512 = 8225280 bytes

Device Boot      Start         End      Blocks   Id  System
/dev/sda1   *           1          63      506016   83  Linux
/dev/sda2              64         313     2008125   83  Linux
/dev/sda3             314        6539    50010345   83  Linux
/dev/sda4            6540       60734   435321337+  83  Linux
可以看到上面的例子, 硬碟 /dev/sda 的容量是 500GB, 裡面有 4 個分割區, 分別是 /dev/sda1, /dev/sda2, /dev/sda3 及 /dev/sda4.

如果沒有指定硬碟名稱, fdisk 會讀取 /proc/partitions 檔案以讀出分割區資料, 例如:

# fdisk -l

Disk /dev/sda: 499.5 GB, 499558383616 bytes
255 heads, 63 sectors/track, 60734 cylinders
Units = cylinders of 16065 * 512 = 8225280 bytes

Device Boot      Start         End      Blocks   Id  System
/dev/sda1   *           1          63      506016   83  Linux
/dev/sda2              64         313     2008125   83  Linux
/dev/sda3             314        6539    50010345   83  Linux
/dev/sda4            6540       60734   435321337+  83  Linux

Disk /dev/sdb: 499.5 GB, 499558383616 bytes
255 heads, 63 sectors/track, 60734 cylinders
Units = cylinders of 16065 * 512 = 8225280 bytes

Device Boot      Start         End      Blocks   Id  System
/dev/sdb1   *           1       60734   487845823+  83  Linux
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18

# fdisk -l

Disk /dev/sda: 499.5 GB, 499558383616 bytes
255 heads, 63 sectors/track, 60734 cylinders
Units = cylinders of 16065 * 512 = 8225280 bytes

Device Boot      Start         End      Blocks   Id  System
/dev/sda1   *           1          63      506016   83  Linux
/dev/sda2              64         313     2008125   83  Linux
/dev/sda3             314        6539    50010345   83  Linux
/dev/sda4            6540       60734   435321337+  83  Linux

Disk /dev/sdb: 499.5 GB, 499558383616 bytes
255 heads, 63 sectors/track, 60734 cylinders
Units = cylinders of 16065 * 512 = 8225280 bytes

Device Boot      Start         End      Blocks   Id  System
/dev/sdb1   *           1       60734   487845823+  83  Linux
上面看到, 系統內除了 /dev/sda 外, 還有另一個硬碟 /dev/sdb, 而 /dev/sdb 只有一個分割區。

fdisk 建立新分割區

fdisk 建立分割區的是令是 “fdisk [硬碟名稱]”, 例如:

# fdisk /dev/sdb

Command (m for help): m
Command action
a toggle a bootable flag
b edit bsd disklabel
c toggle the dos compatibility flag
d delete a partition
l list known partition types
m print this menu
n add a new partition
o create a new empty DOS partition table
p print the partition table
q quit without saving changes
s create a new empty Sun disklabel
t change a partition's system id
u change display/entry units
v verify the partition table
w write table to disk and exit
x extra functionality (experts only)
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20

# fdisk /dev/sdb

Command (m for help): m
Command action
a toggle a bootable flag
b edit bsd disklabel
c toggle the dos compatibility flag
d delete a partition
l list known partition types
m print this menu
n add a new partition
o create a new empty DOS partition table
p print the partition table
q quit without saving changes
s create a new empty Sun disklabel
t change a partition's system id
u change display/entry units
v verify the partition table
w write table to disk and exit
x extra functionality (experts only)
這時要根據需要輸入選項, 上面輸入了 “m”, 作用是顯示所有可能選項。

建立新分割區輸入 “n” 選項, 然後要選擇建立 primary partition 或者 logical partition, “l” 是 logical; “p” 是 primary.

下一步是定義分割區開始的磁區, 直接按 “Enter” 用預設值即可。然後是定義最後的磁區或大小, 如果要使用所有可用空間, 直接按 “Enter” 即可。如果要自訂分割區大小, 例如 50G 可輸入 “+50G”; 500M 可輸入 “+500M”。

最後輸入 “w” 儲存變更, 及按 “q” 離開 fdisk。

fdisk 刪除分割區

fdisk 刪除分割區, 先要用 “p” 選項檢視要刪除的分割區。知道要刪除的分割區的代號後, 輸入 “d” 選擇, 再輸入分割區的代號即可。這個過程要很小心, 刪除錯了會很麻煩的。

最後輸入 “w” 儲存變更, 及按 “q” 離開 fdisk。

格式化分割區

當建立了新分割區後, 需要將分割區格式化。格式化分割區可以用 mkfs 指令, 例如要將 /dev/sda5 格代化到 ext4 檔案系統, 可以用以下指令:

# mkfs.ext4 /dev/sda5

1

# mkfs.ext4 /dev/sda5

如果要將分割區格式化到 swap 分割區, 用 mkswap 指令:

# mkswap /dev/sda5

1

# mkswap /dev/sda5