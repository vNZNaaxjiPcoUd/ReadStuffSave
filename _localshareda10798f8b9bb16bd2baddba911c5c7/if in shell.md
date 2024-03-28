---
---

# [Shell 脚本基础之 If 条件语句](https://muwaii.com/posts/if-conditional-statements-in-shell)

-  2022-02-08
   - 918
   - [Linux](https://muwaii.com/category/linux/)

## 1 背景说明[](https://muwaii.com/posts/if-conditional-statements-in-shell#background "Permalink")

在 Shell 脚本中，我们有时需要根据命令的成功或失败，来指定要采取的不同分支代码。和其它高级语言类似，Shell 中也有 if 语句可以让我们指定此类条件。

不过其可固定搭配的操作符较多，之前都是遇到了再现查，今天抽空把全部用法都学一遍，之后忘记了再回来重温。

---

## 2 IF 语句[](https://muwaii.com/posts/if-conditional-statements-in-shell#if-statements "Permalink")

### 2.1 简洁语法[](https://muwaii.com/posts/if-conditional-statements-in-shell#compact-syntax "Permalink")

if 命令最简洁的语法是这样：

```bash
if TEST-COMMANDS; then 
    CONSEQUENT-COMMANDS;
fi
# 注意：表达式没有用闭合的 {} 限定作用域的范围，而是在末尾放一个镜像对称的 fi。
```

Bash

Copy

#### 2.1.1 简单的执行流程[](https://muwaii.com/posts/if-conditional-statements-in-shell#the-procedure-of-compact-syntax "Permalink")

先执行 TEST-COMMANDS 命令列表，即可以执行多个命令，最后执行的命令的退出状态为返回状态。  
再判断状态，决定下一步。如果其返回状态为 0，则执行 CONSEQUENT-COMMANDS 内部后续代码块。否则后面的命令不执行，跳到下一条命令。

> **退出状态（Exit Status）说明**  
> Shell 和 C 语言一样，将 0 视作是成功 True，而非 0 视作是失败 False。现代语言中 Py, JS 等则是反过来。  
> 默认退出状态不会显示出来，我们可以在 Shell 中输入 `echo $?` 来查看上一命令的退出状态。

### 2.2 扩展语法[](https://muwaii.com/posts/if-conditional-statements-in-shell#extended-syntax "Permalink")

```bash
if TEST-COMMANDS-A; then
   CONSEQUENT-COMMANDS-1; 
elif TEST-COMMANDS-B; then
   CONSEQUENT-COMMANDS-2;
else
   CONSEQUENT-COMMANDS-3;
fi
```

Bash

Copy

#### 2.2.1 轮检的执行流程[](https://muwaii.com/posts/if-conditional-statements-in-shell#the-procedure-of-extended-syntax "Permalink")

通过 elif 和 else 关键字，我们可以多指定几个条件子句。当有多个 if 子句并列时，Shell 将依次求值（Evaluate），遇到第一个返回 0 退出状态的命令，才会执行对应的语句部分；如果所有的语句的退出状态都不为 0，则执行 else 中语句。换句话说，条件需要是互斥的，重叠的话，只有排在前面的会被执行。

## 3 条件测试语法[](https://muwaii.com/posts/if-conditional-statements-in-shell#conditional-statements "Permalink")

上一小节提到的 TEST-COMMANDS 测试命令列表可以由两种语句组成：

- 条件测试语句：`[ ]` 或 `[[ ]]`
- 命令调用语句：如 `! grep ^$USER /etc/passwd 1> /dev/null`

在此举个例子说明两种用法，后续的小节会展开说明。

这是一个用来检查本地是否存在**特定用户名**的脚本，用户名作为命令行参数提供给脚本，当有多个命令行参数时用空格隔开。  
在 Shell，我们使用位置参数（positional parameters ） `$1, $2, ..., $N` 分别表示第 1 个，第 2 个，到第 N 个命令行参数。  
而 `$#` 表示用户给了多少个命令行参数。比较特殊地，`$0` 为脚本的名称，更准确说是，当前可执行文件的名称。

```bash
#!/bin/sh
#file name: check_local_user_name.sh

# 条件测试语句
# 明确限定命令行参数为 1 个，多于或少于都会打印用法，并直接退出。
if [ $# != 1 ]; then 
  echo "Usage: $0 <USER_NAME>";
  exit;
fi

# 命令调用语句
# 在 /etc/passwd 文件中搜索以第一个命令行参数开头的行：
#   `1> /dev/null` 丢弃标准输出；
#   `2>&1` 将标准错误重定向到标准输出，即也丢弃标准输出。
# 整个语句的作用就是，仅验证该系统文件有没有包含特定用户名，
# 有或无都只设置退出状态，不输出找到的文本，让终端保持干净整洁。
if grep "^$1" /etc/passwd 1> /dev/null 2>&1; then
  echo "your account is managed from the local /etc/passwd file"
else
  echo "WARN: your user account is not managed locally"
fi
```

Bash

Copy

执行的结果如下图：

![check_local_user_name.jpg](https://muwaii.com/usr/uploads/2022/02/3609331642.jpg)**图 1: 检查本地用户名**

### 3.1 [ ][](https://muwaii.com/posts/if-conditional-statements-in-shell#single-brace "Permalink")

`[ ]` 表示条件测试，等价于 test 命令，即 `[ ]` 方括号内的表达式作为 test 命令的参数。注意这里的空格很重要。要注意在 `[` 后面和 `]` 前面都必须要有空格。

下面的表达式，虽然表示方式不同，在语义上是相同的：

```bash
test EXPRESSION
test
[ EXPRESSION ]
[ ]
[ OPTION
```

Bash

Copy

紧接着，我们以检查的字符串空值判断为例，当有效字符个数大于零时，表达式求值为 True，并设置退出状态为 0，否则为 1。

```bash
$ test ""
$ echo $?
1
$ test "hello"
$ echo $?
0
$ [ "" ]
$ echo $?
1
$ [ "world" ]
$ echo $?
0
```

Bash

Copy

如上所述，Shell 会根据表达式的求值结果 —— True or False —— 来设置退出状态，这里我们用到了 `echo $?`，将上一命令的退出状态回显。

### 3.2 [ ] 与 [[ ]][](https://muwaii.com/posts/if-conditional-statements-in-shell#single-brace-vs-double-braces "Permalink")

除了 `[ ]`，Shell 中还有嵌套的 `[[ ]]`，两者有不少语法上的差异[[1]](https://muwaii.com/posts/if-conditional-statements-in-shell#footnote_1)。归结如下：

1. 与 `[ ]` 不同，`[[ ]]` 可以防止变量值的自动分词。  
   假设变量 `FOO="带空格 的 变量"`，那么我们在条件测试中就不需要用双引号包裹该变量 "$FOO" —— 虽说使用引号仍然是一个好习惯。
2. 此外，`[[ ]]` 可以防止路径名扩展，所以带有通配符的字符串不会被扩展为文件名。
3. 这就引出另一种用法：使用 `[[ ]]` 时， `==` 和 `!=` 将右边的字符串解释为 shell glob 通配符匹配模式，与左边的值进行匹配，例如: `[["value" == val* ]]`。

```bash
$ [[ "value" == val* ]]
$ echo $?
0
$ [ "value" == val* ]
$ echo $?
1
```

Bash

Copy

## 4 条件测试操作符[](https://muwaii.com/posts/if-conditional-statements-in-shell#if-operators "Permalink")

### 4.1 对比文件类型[](https://muwaii.com/posts/if-conditional-statements-in-shell#check-file-type "Permalink")

**表 7-1: 检查文件类型**

| 表达式         | 含义                                                                                                                                                       |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [ -a FILE ] | True if FILE exists.<br>文件存在<br>*已废弃*[[2]](https://muwaii.com/posts/if-conditional-statements-in-shell#footnote_2)，不再在 man 文档显示；容易和双目操作符 ARG1 -a ARG2 弄混 |
| [ -b FILE ] | True if FILE exists and is a block-special file.<br>文件存在，且为块设备文件                                                                                         |
| [ -c FILE ] | True if FILE exists and is a character-special file.<br>文件存在，且为字符设备文件                                                                                    |
| [ -d FILE ] | True if FILE exists and is a directory.<br>文件存在，且为目录                                                                                                     |
| [ -e FILE ] | True if FILE exists.<br>文件存在                                                                                                                             |
| [ -f FILE ] | True if FILE exists and is a regular file.<br>文件存在，且为常规文件                                                                                                |
| [ -g FILE ] | True if FILE exists and its SGID bit is set.<br>文件存在，且设置了特殊组权限位                                                                                          |
| [ -h FILE ] | True if FILE exists and is a symbolic link.<br>文件存在，且为符号链接<br>*该选项在一些老系统上无效*                                                                             |
| [ -k FILE ] | True if FILE exists and its sticky bit is set.<br>文件存在，且设置了特殊粘滞权限位                                                                                       |
| [ -p FILE ] | True if FILE exists and is a named pipe (FIFO).<br>文件存在，且为具名管道（先进先出）                                                                                     |
| [ -r FILE ] | True if FILE exists and is readable.<br>文件存在，且可读                                                                                                         |
| [ -s FILE ] | True if FILE exists and has a size greater than zero.<br>文件存在，且文件大小大于 0                                                                                  |
| [ -t FD ]   | True if file descriptor FD is open and refers to a terminal.<br>文件描述符号处于打开状态，且指向一个终端                                                                     |
| [ -u FILE ] | True if FILE exists and its SUID (set user ID) bit is set.<br>文件存在，且设置了特殊用户权限位                                                                           |
| [ -w FILE ] | True if FILE exists and is writable.<br>文件存在，且可写                                                                                                         |
| [ -x FILE ] | True if FILE exists and is executable.<br>文件存在，且可执行                                                                                                      |
| [ -O FILE ] | True if FILE exists and is owned by the effective user ID.<br>文件存在且属有效用户 ID 所有                                                                           |
| [ -G FILE ] | True if FILE exists and is owned by the effective group ID.<br>文件存在且属有效组 ID 所有                                                                           |
| [ -L FILE ] | True if FILE exists and is a symbolic link.<br>文件存在，且为符号链接                                                                                               |
| [ -N FILE ] | True if FILE exists and has been modified since it was last read.<br>文件存在，且自上次访问后其内容已修改                                                                  |
| [ -S FILE ] | True if FILE exists and is a socket.<br>文件存在，且为套接字                                                                                                       |

#### 4.1.1 块设备与字符设备[](https://muwaii.com/posts/if-conditional-statements-in-shell#block-device-and-character-device "Permalink")

1. 字符设备：  
   提供连续的数据流，应用程序可以**顺序读取**，通常**不支持随机存取**。相反，此类设备支持按字节 / 字符来读写数据。举例来说，键盘、串口、调制解调器都是典型的字符设备。
2. 块设备：应用程序可以**随机访问设备数据**，程序可自行确定读取数据的位置。硬盘、软盘、CD-ROM驱动器和闪存都是典型的块设备，应用程序可以寻址磁盘上的任何位置，并由此读取数据。此外，数据的读写只能以块(通常是 512 B)的倍数进行。与字符设备不同，块设备并不支持基于字符的寻址。

讲完严谨的定义，我们举个生活中常见的例子，键盘这类设备提供的就是一个数据流，当你敲入 ".com" 这个字符串时，键盘驱动程序会按照和输入完全相同的顺序，返回这串由 4 个字符组成的数据流。如果让键盘驱动程序随机打乱顺序来读字符串，或读取其他字符，对于用户来说都是没有意义的。所以键盘就是一种典型的字符设备，它提供的就是用户从键盘输入的字符流。对键盘进行读操作会得到一个字符流，首先是 "."，接着是 "c"，然后是 "o"，最后是 "m"，最终是控制符号中的文件结束符（EOF）。当没人敲键盘时，字符流就是空的。

而硬盘设备的情况就不大一样了。硬盘设备的驱动可能要求读取磁盘上任意块的内容，然后又转去读取另一磁道的别的块的内容，而被读取的块在磁盘上位置不一定要连续，所以说硬盘可以被随机访问，而不是以流的方式被访问，显然它是一个块设备。

总结一下，这两种类型的设备的根本区别在于它们是否可以被随机访问。字符设备只能顺序读取，块设备可以随机读取。[[3]](https://muwaii.com/posts/if-conditional-statements-in-shell#footnote_3)

### 4.2 对比文件属性[](https://muwaii.com/posts/if-conditional-statements-in-shell#compare-file-stat "Permalink")

**表 7-2: 对比文件属性**

| 表达式                 | 含义                                                                                                                                                          |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [ FILE1 -nt FILE2 ] | True if FILE1 has been changed more recently than FILE2, or if FILE1 exists and FILE2 does not.<br>从文件修改时间来看，文件 1 比 文件 2 更新，即离当前时间更近<br>或者文件 1 存在，而文件 2 不存在 |
| [ FILE1 -ot FILE2 ] | True if FILE1 is older than FILE2, or is FILE2 exists and FILE1 does not.<br>从文件修改时间来看，文件 1 比 文件 2 更旧，即离当前时间更远<br>或者文件 2 存在，而文件 1 不存在                       |
| [ FILE1 -ef FILE2 ] | True if FILE1 and FILE2 refer to the same device and inode numbers.<br>文件 1 和文件 2 都指向同一个设备和同一个 inode 文件元信息索引节点                                              |

### 4.3 对比字符串值[](https://muwaii.com/posts/if-conditional-statements-in-shell#compare-string-value "Permalink")

**表 7-3: 对比字符串值**

| 表达式                    | 含义                                                                                                                                                                                                                                         |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [ -o OPTIONNAME ]      | True if shell option "OPTIONNAME" is enabled.<br>特定 Shell 选项 "OPTIONNAME" 是否启用<br>例如 `set -o verbose` 会在执行之前先打印命令<br>完整用法，参考 《[Advanced Bash-Scripting Guide](https://tldp.org/LDP/abs/html/options.html "Advanced Bash-Scripting Guide")》 |
| [ -z STRING ]          | True of the length if "STRING" is zero.<br>字符串长度是否为零                                                                                                                                                                                       |
| [ -n STRING ]          | or [ STRING ] True if the length of "STRING" is non-zero.<br>字符串长度是否为非零                                                                                                                                                                    |
| [ STRING ]             | 如果字符串不为空则返回为真，与 -n 类似                                                                                                                                                                                                                      |
| [ STRING1 == STRING2 ] | True if the strings are equal. "=" may be used instead of "==" for strict POSIX compliance.<br>字符串是否相等<br>为了严格兼容 POSIX，应使用 "="                                                                                                             |
| [ STRING1 != STRING2 ] | True if the strings are not equal.<br>字符串是否不同                                                                                                                                                                                              |
| [ STRING1 < STRING2 ]  | True if "STRING1" sorts before "STRING2" lexicographically in the current locale.<br>在当前区域的字典序中，字符串 1 排在字符串 2 前面                                                                                                                           |
| [ STRING1 > STRING2 ]  | True if "STRING1" sorts after "STRING2" lexicographically in the current locale.<br>在当前区域的字典序中，字符串 1 排在字符串 2 后面                                                                                                                            |

### 4.4 对比数值[](https://muwaii.com/posts/if-conditional-statements-in-shell#compare-number-value "Permalink")

**表 7-4: 对比数值**

| 表达式              | 含义                                                                                                                                                                                                                                                                  |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [ ARG1 OP ARG2 ] | "OP" is one of -eq, -ne, -lt, -le, -gt or -ge. These arithmetic binary operators return true if "ARG1" is equal to, not equal to, less than, less than or equal to, greater than, or greater than or equal to "ARG2", respectively. "ARG1" and "ARG2" are integers. |
| [INT1 -eq INT2]  | INT1 和 INT2 两数相等返回为真，=                                                                                                                                                                                                                                              |
| [INT1 -ne INT2]  | INT1 和 INT2 两数不等返回为真，!=                                                                                                                                                                                                                                             |
| [INT1 -gt INT2]  | INT1 大于 INT2 返回为真，>                                                                                                                                                                                                                                                 |
| [INT1 -ge INT2]  | INT1 大于等于 INT2 返回为真，>=                                                                                                                                                                                                                                              |
| [INT1 -lt INT2]  | INT1 小于 INT2 返回为真，<                                                                                                                                                                                                                                                 |
| [INT1 -le INT2]  | INT1 小于等于 INT2 返回为真，<=                                                                                                                                                                                                                                              |

### 4.5 组合表达式[](https://muwaii.com/posts/if-conditional-statements-in-shell#combining-expressions "Permalink")

**表 7-5: 组合表达式**

| 操作                 | 效果                                                                                                                                                                                                                              |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [ ! EXPR ]         | True if EXPR is false.<br>反转表达式的求值结果，即其值为 False 时为 True                                                                                                                                                                         |
| [ ( EXPR ) ]       | Returns the value of EXPR. This may be used to override the normal precedence of operators.<br>返回表示式的值。主要用于提升操作符的优先级                                                                                                            |
| [ EXPR1 -a EXPR2 ] | True if both EXPR1 and EXPR2 are true.<br>当两个表达式值都为 True 时，返回 True                                                                                                                                                              |
| [ EXPR1 -o EXPR2 ] | True if either EXPR1 or EXPR2 is true.<br>当任一表达式值为 True 时，返回 True。<br>遵循短路求值(Short-circuit evaluation)<br>**仅当第一个运算数的值无法确定逻辑运算的结果时**，才对第二个运算数进行求值。[[4]](https://muwaii.com/posts/if-conditional-statements-in-shell#footnote_4) |

## 5 总结[](https://muwaii.com/posts/if-conditional-statements-in-shell#summary "Permalink")

本文详细介绍了 Shell 中 if 语句不同操作符的用法，包括检查文件类型，对比文件属性，对比字符串和数值等。

在实例演练部分，笔者以检查本地用户的脚本为例，说明了调用命令语句和条件测试语句的区别，并提醒大家注意退出状态的整数值与求值时布尔量的对应关系容易混淆；若有疑惑，可通过 `$?` 查看上一命令的退出状态。还针对条件语句中的 `[ ]` 和 `[[ ]]` 语义上的差异进行了解释。

相信看完这篇文章之后，读者就能看懂别人的判断代码[[5]](https://muwaii.com/posts/if-conditional-statements-in-shell#footnote_5)，并独立处理各种需要条件判断的情形🐣。

---

## 6 参考链接[](https://muwaii.com/posts/if-conditional-statements-in-shell#references "Permalink")

1. [Bash Beginners Guide | The Linux Doc Project](https://tldp.org/LDP/Bash-Beginners-Guide/html/sect_07_01.html "Bash Beginners Guide")[⤴](https://muwaii.com/posts/if-conditional-statements-in-shell#to_footnote_1)  
   （Bash 新手指南，参考了操作符的说明）
2. [Bash if -a vs -e option | StackOverflow](https://stackoverflow.com/questions/321348/bash-if-a-vs-e-option)[⤴](https://muwaii.com/posts/if-conditional-statements-in-shell#to_footnote_2)  
   （解释了单目操作符 -a 为何被废弃）
3. [字符设备、块设备与网络设备 | Jianshu](https://www.jianshu.com/p/477c5b583fbe)[⤴](https://muwaii.com/posts/if-conditional-statements-in-shell#to_footnote_3)
4. [Short-circuit evaluation | WikiPedia](https://en.wikipedia.org/wiki/Short-circuit_evaluation)[⤴](https://muwaii.com/posts/if-conditional-statements-in-shell#to_footnote_4)  
   （短路求值是一种逻辑运算符的求值策略，又称最小化求值（Minimal evaluation））
5. [APT Update Error: Public Key is N/A | This](https://muwaii.com/posts/apt-update-error-public-key-not-available#better-answer)[⤴](https://muwaii.com/posts/if-conditional-statements-in-shell#to_footnote_5)  
   （剖析了 Debian 系统 apt-key 脚本的系统实现）


..
