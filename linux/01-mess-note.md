##  系统操作

命令行操作前是 `$` 符号，代表当前用户是普通用户

超级用户 root 的符号是： `#`

### 文件基本属性

在Linux中，文件的第一个字符代表是 目录，文件 或者链接文件等。

- **`d` ( character ) 表示这个目录文件**
- **`c` ( character ) 字符设备文件 ( 鼠标，键盘 ...**
- **`-` 表示是普通文件**
- **`l` 表示是链接文档 ( symbolic link 软连接 / 符号链接 **
- **`b` ( block ) 表示块设备文件( 磁盘**
- **`s` ( socket ) 表示本地套接字**
- **`p` ( named pipe )有名管道**

在接下来的字符中，三个为一组，均为 `rwx` 的组合，`r` 是 可读 , `w` 是刻写，`x` 是可执行。如果在某位置没有权限，会出现 `-`

第一组 `rwx` 表示文件的所属用户的权限

第二组 `rwx` 表示该用户所在组中其他用户对此文件的权限

第三组 `rwx` 表示其他用的权限

## Vim 编辑器

Vim 的四个模式：

### 插入模式

1. 输入 i ，**在光标前插入**。
2. 输入 I ，**在行首插入**。
3. 输入 a ，**在光标后面插入**。
4. 输入 A ，**在行尾插入**。
5. 输入 o ，**在下面另起一行，在行首插入**。
6. 输入 O ，**在上面另起一行，在行首插入**。

### 命令模式

**对文件进行查找、保存、退出、替换**

在普通模式下，键入 `:` 进入命令模式

#### **移动光标**

**$ 移动到行尾**

**[n] + 往上移动 n 行 -- [option] + .. 代表组合 **

**[n] - 往下移动 n 行**

**w 下一个单词的词首 -- 单词划分：特殊符号, 标点符号 也是一个单词 , 但是改为大写，那么单词的划分规则变为只是以空白符分隔**

**b 上一个单词的词首 -- 单词划分：特殊符号, 标点符号 也单独是一个单词**

**t) 先向后查找，将光标移动到 `)` 的前一个字符**

**T) 先向前查找，将光标移动到 `)` 的后一个字符**

**f) 向后查找，将光标移动到 `)`**

**F) 向前查找，将光标移动到 `)`**

**[n]gg 将光标移动到第 n 行**

#### 删除 (delete

**`action + motion`**

**vim 中的删除会将内容复制到 vim 的剪切板中**

**`x` 删除光标所在的一个字符**

**`dw` 删除一个单词**

**`[n]dw / d[n]w` 删除 n 个单词**

**`dd` 删除一行**

**`[n]dd / d[n]d` 删除 n 行**

**`:[m],[n]d` 删除[m,n] 行**

**`d^` 删除到行首**

**`d$` 删除到行尾**

**`dt)` 删除到 `)` 不包括`)`**

#### 复制 (yank :

**`action + motion`**

**`yy `复制光标当前行**

**`[n]yy` 从光标当前行往下复制 n 行**

**y$ 从光标所在位置复制到这一行末尾**

**`:[m],[n]y` 复制 [m,n] 行**

**`yw` 复制一个单词**

**`[n]yw / y[n]w` 复制 n 个单词**

**`yt)` 复制到`)` 不包括 `)`**

**`yt"` 复制到 `"` ，不包括 `"`**

#### 修改 ( change )文本

**`action + motion`**

**在 vim 中修改操作是删除操作和进入编辑操作的组合**

**`cc / S` 删除当前行，并进入编辑模式**

**`[n]cc / [n]S` 删除 n 行，进入编辑模式**

**`cw` 删除一个单词，进入编辑模式**

**`[n]cw / c[n]w` 删除 n 个单词，进入编辑模式**

**`c^` 删除到行首，进入编辑模式**

**`c$` 删除到行尾，进入编辑模式**

**`ct)` 删除到 `)` 前，进入编辑模式**

**`ct"` 删除到 `"` 前，进入编辑模式**

**`c[n]G` 删除到第 n 行，进入编辑模式**

**`cG` 删除到文件末尾，进入编辑模式**

#### 文本对象

**action + textobj**

语法: `action + i( / action + a(`

**i) / i( : 开区间，不包含括号**

**a) / a( : 闭区间，包含括号**

**常见用法: **

- **i) / a)**
- **i] / a]**
- **i} / a}**
- **i> / a>**
- **i" / a"**
- **i' / a'**
- **ip / ap : p( paragraph ) 边界是空行**

#### 粘贴 撤销 恢复

**`p` **

**`P` 在光标前粘贴，`p` 在光标后粘贴.**

p 如果 用 d/y 所进行的粘贴，那么粘贴的位置在当前光标的后面，光标移动到粘贴元素的最后一个元素

p 如果用的是 yy/number yy/dd/number dd，那么粘贴在当前光标的下一行，光标移动到下一行的起始位置

**撤销键： u，支持多次撤销**

**恢复：ctrl + r，支持多次重做**

**替换：r，替换光标所在位置**

#### 注释

**`gcc` 注释一行，或者取消注释一行**

#### 文本对齐

**`gg=G` 全文文本对齐 **

#### 保存 :w

输入 `w /root/a.txt` 保存当前文件命名为 a.txt 文件

`vim /root/a.txt` 打开 root 下的 a.txt 文件

`:wq` 保存并退出

#### 退出 :q

`:q!` 不保存当前对文件的操作，并退出

`:wq` 保存并退出

#### 查找

**命令: `:/pattern` 从光标当前位置向后查找匹配pattern内容**

**`:?pattern` 从光标所在位置向前查找匹配pattern内容**

**`n` 移动到下一个匹配项；`N` 移动到上一个匹配项**

#### 替换 ( substitute) /pattern/replace / [option]

**`:s/old/new`把光标所在行的第一个 old 替换为 new**

**`:s/old/new/g`把光标所在行的所有 old 替换为 new**

**`:[n],[m]s/old/new/g` 对 n，到 m行之间所有的 old 替换成 new**

**`:%s/old/new` 把每一行一个出现的 old 替换成 new**

**`:%s/old/new/g` 把全文出现的 old 替换成 new**

### 可视模式

- v 字符可视模式
- V 行可视模式
- **ctrl + v 块可视模式**

**一般配合另外两个模式使用**

### vim 的多窗口编辑

#### 水平分割窗口

**`:split`**

**`:new`**

#### 垂直分割窗口

**`:vsplit`**

**`:vnew`**

#### 切换编辑窗口

**`[ctrl] + WW`**

#### 退出窗口

**`:q`**

**`:qa` 关闭所有窗口**

**`:only` 关闭其他所有窗口，只保留当前编辑的窗口**

## Shell 命令

### Linux系统结构

#### 1. kernel 内核

**职责: **

- 为上层应用程序提供运行环境
- 管理计算机的硬件资源

#### 2. system call 系统调用

**为上层应用程序提供运行环境**

#### 3. lib func 库函数

**本质: 系统调用的封装**

**好处: **

- 方便使用
- 增加代码的可移植性

#### 4. shell 命令解释器

**命令: 一般来说，命令就是可执行程序**

**脚本: 就是命令的集合**

**shell 是一个命令解释器，读取用户输入，执行命令，然后等待用户的下一次输入**

### 查看帮助手册命令 man

manual

例如： `# man ls`

man 命令本身也是 一条命令，分为9章。可以使用 man命令 获得 man 的帮助

```
# man 7 man
```

**man 手册前三章: **

- **第一章: shell 命令**
- **第二章: system call**
- **第三章: lib func 库函数**

### 文件

#### 目录

##### 常见目录:

**` /` 根目录 **

**`/root` root 用户的家目录 ==注意： / /root 代表两个目录==**

**`/home/username` 普通用户的家目录**

**/etc: 系统的配置文件，如果更改了该目录下的某个文件可能会导致系统不能启动**

**/bin: 存放着最经常使用的命令**

**/sbin: 只有系统管理员能使用的程序和指令**

**/sbin: 意思是 SuperUser Binaries , 存放着系统管理员使用的系统管理程序**

**/usr/bin: 系统用户使用的应用程序**

**/usr/sbin: 超级用户使用的比较高级的管理程序和系统守护程序**

**/var: 程序运行时产生的日志，会被记录到这个目录下，具体在 /var/log下**

**/boot: 存放Linux启动时使用的核心文件**

##### 打印当前工作目录: `pwd`

##### 切换当前工作目录 : `cd`

**常用 cd 命令：**

**`cd - `回到上一次操作的目录**

**`cd ~` 回到当前用户的家目录**

**`cd /usr/lib` 切换到 /usr/lib 目录**

**`cd .` 切换到当前工作目录**

**`cd ..` 切换到父目录**

**`cd `切换到用户家目录**

**`cd /path/to/...`绝对路径**

**`cd ./path/to/....` 相对路径**

**`cd ../path/to/...` 相对路径**

##### 创建目录 `mkdir`

**make dir**

**`mkdir [option] 目录` 建立目录**

`mkdir /a` 在根目录下 创建 a 目录

`mkdir a` 在当前目录下创建 a 目录

**`mkdir -p example/...` 建立多级目录**

##### 删除空目录 `rmdir`

**`rmdir` 删除空目录，只能删除空白的目录**

**`rmdir -p a/b/c`**

##### 显示目录项 `ls / tree`

格式：` ls [选项，选项] 参数`

**`ls /` 查看根目录下的文件**

常用选项：

- **-l 长格式显示文件 long**
- **-a 显示隐藏文件 **
- **-r 逆序显示 reverse**
- **-t 按照时间顺序显示 time** ==默认不是按照时间排序显示，是按照文本排序==
- **-R 递归显示 recursion**
- **-h 显示文件的具体大小，以 兆等为单位 **
- **`-i` 显示文件的物理标识 (inode) **

**如果ls 操作涉及多个操作，那么命令选项可以进行合并 例： `ls -lrt` 逆序按照时间排序长格式显示**

##### 复制 `cp`

**`cp source dest`**

**`cp -r source dest` 复制目录文件**

**`cp [option] source... destination`** cp 命令的语法格式

**常用选项:**

- **`-p` 复制后保留源文件的创建时间**
- **`-a` 复制后保留源文件的所有信息**
- **`-i` ( Interactive ) 如果文件存在，给用户提示信息，由用户决定是否覆盖其内容**
- **`-R / -r` 递归复制**
- **`-n` 如果文件已经存在，则不覆盖内容**

拷贝文件：**`cp FileA FileB`**

把 FileA 拷贝一份得到 FileB , FileB 不存在时，会创建FileB，FileB 存在时，覆盖 FileB的内容。

##### 移动 `mv`

文件和文件夹的移动功能，改名功能。

**`mv [option] source... destination `移动**

**`mv [option] source destination` 改名**

**`mv` 可以移动文件和目录, 也可以用 mv 命令对文件和目录重命名**

**常用选项 : **

- **`-n` 如果文件存在，不覆盖**
- **`-i` 如果文件存在，给用户提示信息, 由用户决定是否覆盖**

##### 删除文件或文件夹 `rm`

**`rm -i` 可以删除非空目录，每次删除时进行确认**

**`rm -f /../..` 删除非空目录并不进行任何提示，删除前要进行反复检查**

**`rm -R` 递归删除**

#### 普通文件 `touch / echo / vim`

##### 创建文件

**`touch a.txt b.txt ...` 创建 a.txt b.txt 文件**

**本质是改变此文件的时间戳 , 这个文件存在，就改变这个文件的时间戳**

**`echo "Hello World" > test1` ,`>` 代表重定向。 创建 test1 文件，并把 Hello World 写入该文件中**

**`echo "hello World"` 将 Hello World 字符串写入到 stdout 中**

**`vim a`用vim编辑器创建a文件**

##### 查找文件 `which / find`

###### **which**

**作用 : 查找可执行程序**

**`which -a vim` 查看vim的所有的路径**

**常用选型 : `-a` ( all )**

**原理 : 根据PATH环境变量中的路径依次去查找**

**在shell中输入的命令，都会在背后执行 which 命令，在 PATH 路径中找到该命令**

###### **find**

**作用 : 在多个目录中 , 递归地查找符合指定条件的文件**

**语法:`find [start-point] a.txt` 省略start-point，默认起始点是当前工作目录，`.` 代表当前目录 **

**常用参数: **

- **`-name pattern` pattern 常设置为通配符 ，查找文件名符合 pattern 的文件 **

- **`-type c` 查找类型为 c 的文件**

  - **`f` 普通文件**
  - **`d` 目录文件 **
  - **`p` 有名管道**
  - **`s` 套接字**
  - **`l` 符号链接**
  - **`c` 字符设备文件**
  - **`b` 块设备文件**

- **`-size n[cwbkMG]` 根据文件的大小查找**

  使用了 n 个 space , 向上取整

  `c` 字节单位

  `w` 两个字节为单位

  `b` 块单位, 512个字节

  `k` 1024 个字节 为单位

  `M` 1024 个 k 为单位

  `G` 1024 个 M 为单位

  **可以在 n 前加 +/- 表示严格大于或小于**

- **`-empty` 查找空的文件或者文件夹**

- **`-user username, -uid uid` 根据用户名和用户 id 查找**

- **`-group groupname,-gid gid` 根据组名和组 id 查找**

- **`-perm mode` permission 代表权限, mode 代表 三个八进制数字**

- **根据时间: time 以天为单位 , min以分钟为单位**

  - **`-atime,amin`( 文件最近访问的时间**
  - **`-ctime,cmin` c : change （ 文件属性发生修改的时间**
  - **==常用:==`-mtime,-mmin` m : modify （ 文件内容发生修改的时间**

**find 可以不同参数组合查找: `-a / -o / !` 分别代表 与 或 非 ( and / or / not**

##### 查看文件内容 `cat / head / tail / more / less / grep`

###### cat

**作用 : 拼接文件内容，并将结果输出到 stdout **

**语法: `cat [option] [file]`**

**常用选项 : **

- **`-n` ( number ) 对每一行编号**

**`cat -n fileA fileB` 把fileA 和 fileB 的内容拼接到一起按行编号显示**

###### head

**`head` 查看文件开头；默认查看前十行**

**语法 : `head [option] [file]`**

**常用法 : **

- **-n --lines **

 **`head -n m file` 查看file 文件的前 m 行**

 **`head -n -5 test` 显示除了最后五行的所有行**

###### tail

**`tail` 查看文件结尾**

**语法 : `tail [option] [file]`**

**常用法 : **

- **-n --lines **
- **-F 显示后面追加的数据，一般用于查看日志文件**

 **`tail -n m file` 查看file 文件的后 m 行**

 **` tail -n +m file` 从文件的第 m 行开始显示 **

###### more / less

**作用 : 单页预览**

**语法: `more / less [option] file`**

**进入浏览界面后 : **

- **`f` ( forward ) 往后翻一页**
- **`b` ( backward ) 往前翻一页**
- **`:n` ( next ) 查看下一个文件**
- **`:p` ( previous ) 查看上一个文件**
- **`q` ( quit ) 退出浏览界面**
- **`u` ( up ) 上半页**
- **`d` ( down ) 下半页**



###### wc

**`wc -l source/document` 查看文件共有多少行**

###### grep ( globally regular expression print )

**作用: 打印文件中所有匹配正则表达式的行**

**`语法 : grep [option] pattern [file]`**

**常用选项: **

- **`-E` 使用扩展正则表达式**
- **`-n` ( --line-number） 显示行号**
- **`-i` ( --ignore-case ) 忽略大小写**
- **`-c` ( --count ) 不显示匹配的行，显示匹配行的个数**
- **`-v` ( --invert-match ) 显示不匹配正则表达式的行**

##### 文件的权限

###### 目录文件的权限

**`r` 查看目录项 -- ls tree**

**`w` 增加和删除目录项**

**`x` 目录最基本的权限，`r w `都依赖 `x` 权限 -- cd**

###### 改变文件权限

**命令 : `chmod` ( change mode )**

1. **文字设定法 : `chmod [ugoa] [+-=] [rwx] file`**
2. **数字设定法 : `chmod 三个8进制数 file` **

数字设定法中的三个 8 进制数每个数代表 每种用户的 rwx 权限

r 的权重是 2^2^

w 的权重是 2^1^

x 的权重是 2^0^

###### umask 文件创建掩码

查看当前文件创建掩码 : `umask`

修改文件创建掩码 : **`umask 四个八进制数`**

**原理 : **

- **umask 指定想要去掉的权限**
- **普通文件 : `666 & ~umask`**
- **目录文件 : `777 & ~umask`**

##### 链接

###### 硬链接 ( hard link)

**命令 : `ln file h_link_file`**

**本质上操作的还是同一个文件，只是为这个文件起另外一个别名，文件的 inode 不会改变，在创建一个硬链接后，该文件的硬链接数 +1 ，删除该文件，只会使该文件的硬链接数 -1 ，只有硬链接数为 0 时，才会真正删除这个文件**

###### 软链接 ( symbolic link )

**命令 : `ln -s file s_link_file`**

类似 `c` 语言中的指针

**本质上是一个文本文件，文件的内容是链接文件的路径，当软链接的文件不存在时，这个软链接又被成为悬空链接**

### 正则表达式

1. **基本单位**

包含 : **字符，转义字符，`.` ( 匹配任意一个字符 ) ， (expr) , 集合 ( 例如 , [abc] , [^abc] ,[a-zA-Z0-9]** ，==集合 [xyz] 是匹配集合内任意一个字符==

1. **基本操作**

包含两个操作 : **连接和出现**

- **连接 : "ab" , "[abc]x" , ".txt"**
- **重复 : **
  - **`+ `: 出现至少一次 ( >= 1 ) 例如 : "abc+" , "[abc]+"**
  - **`?` : 出现零次或者一次 ( 0| 1 ) 例如 : "abc? , "[abc]?" **
  - **`\*` : 出现任意次数( >= 0 ) 例如 : "abc*" , "[abc]* , ".*" **
  - **`{m} `: 出现 m 次**
  - **`{m,n}` : 出现 m 次到 n 次 [m,n]**
  - **`{n, }` : 至少出现 n 次 [ >= n ]**

1. **指定基本单位出现的位置**

   **`^` ： 行首 ， 例如 ："^abc"**

   **`$` ： 行尾 ，例如 : "xyz$"**

   **`\<` ： 词首**

   **`\>` ： 词尾**

### 命令的组合

**1.` cmd1;cmd2` 先执行 cmd1，再执行cmd2**

**2. `cmd1 | cmd2` ( 管道 ) 上一个命令的输出作为下一个命令的输入**

 **原理 ： cmd1 结果输出到 cmd1 的stdout 中, 将 stdout 中的数 据重定向到管道中，cmd2 的 stdin 再重定向连接到管道，接收cmd1的数据**

**3. `cmd1 | xargs cmd2` 把 cmd1 输出的每一行作为 cmd2 的命令行参数**

 xargs 将标准输入里面的每一行转换成命令行参数

 **原理 : 当 cmd1 的输出流向 cmd2 的 stdin 中后 ，然后 `xargs`命令会解析cmd2 的stdin中字符，以空白字符分割，拼接到 argv[] 中，作为命令行参数**

**4. `cmd1 && cmd2`**

**5. `cmd1 || cmd2`**

**4. `cmd1 && cmd2` 当cmd1 成功执行后，才会执行 cmd2，如果cmd1未执行成功，那么不会执行 cmd2**

**5. `cmd1 || cmd2` cmd1 命令执行失败，执行cmd2 **

### 通配符

文件名有一定规律，且有一定的重复，用于匹配单个或多个字符

*** 代表多个字符，**

**? 只能代表一个字符**

**集合 : `[characters]` 匹配集合内任意一个字符**

 **`[!characters]` 匹配集合外任意一个字符**

**`? & []` 最终都只能匹配一个字符，集合中也就是目录的名字是一个字符的情况**

### 重定向

cat, head,tail 经常和重定向一起使用

| 标准流 | 文件表述符 |    重定向符号    |
| :----: | :--------: | :--------------: |
| stdin  |     0      |        <         |
| stdout |     1      | > 和 >> ( 追加 ) |
| stderr |     2      |    2> 或 2>>     |

本质 : ==改变缓冲区和关联设备之间的连接==

输出重定向中的**`>`** 会先清空文件中的内容，在写入；而 **`>>` ** 会在文件后面追加内容

**把`stdout` 和 `stderr` 一起重定向 : `>&`**

**`cat users fileB >& text` 把 stdout 和 stderr 中的数据全部重定向到 text 文件中**

**Linux 中 ctrl + D 表示 EOF**

**Windows 中 ctrl + E 表示 EOF**

### 上传和下载 `scp` ( secure copy )

**本质上是复制命令**

**本地路径可以使用相对路径和绝对路径**

**远程路径格式 : `username@IP:绝对路径`**

**`~` = `/home/username`**

#### 上传 ( 将本地文件复制到远程 )

**命令 : `scp local_file username@IP:~/...`**

#### 下载 ( 把远程文件复制本地 )

**命令 : `scp username@IP:~/... local_file`**

### 打包和压缩 tar

#### 主选项 ( 有且只能选择其中一项 )

- **`c` ( create ) 创建一个包**
- **`r` 往包里追加文件或者目录**
- **`x` ( extract) 释放包里的内容**
- **`h` 查看包里的内容**

#### 辅选项

- **`f` 指定包文件的名称**
- **`v` 显示详细信息**
- **`z` 使用 `gzip` 算法压缩或者解压缩包文件**

**命令 : `tar [主选项 + 辅选项] 包名 [文件或者目录]`**

**`tar xvf package.tar test.txt` 往 `package.tar` 包里追加 `test.txt` 文件**

### 别名 `alias`

**设置别名 : `alias cd='sudo rm -rf'`只会在一次回话中起作用**

**其配置文件是 ~/.bashrc**

**`source ~/.bashrc` 重新执行其配置文件**

执行规则时从前面的基础上执行，不是重新执行

### 关机命令

**`shutdown -[option]`**

**常用参数: **

- **`-P` ( poweroff )关机**
- **`-r` ( reboot ) 重启**
- **`-H` ( halt ) 挂起**
- **`-c` ( cancel ) 取消**

### 用户子系统相关命令

Linux 是多用户的操作系统，可以同时登录多个系统。

**用户切换需要使用 `su` ( Switch User) 或者 `su - `命令，区别是使用 `su` 命令只切换用户，当前的工作目录不会发生变化，`su - `不仅切换用户，也会切换工作目录，切换为当前用户的家目录**

用户 A 切换到 用户 B，若还想回到用户 A，可以使用 `exit` 命令。

#### 查看所有用户

**`cat/etc/passwd`**

**`man 5 passwd`**

#### 添加新的用户

**`sudo useradd` **

普通用户没有这个权限，使用 root 用户使用此命令。或者管理员用户

**常用参数: **

- **`-m` : 创建这个用户的家目录 **
- **`-s /bin/bash` : 指定这个用户的登录终端为 bash, **

**`sudo useradd -m -s /bin/bash test1` 创建用户 test1 **

#### 删除用户

**常用参数: **

- **`-r` : 删除这个用户和它的家目录 **

**`sudo userdel -r test1 **

删除用户并不是将 /home 下的用户家目录删除就完事儿了, 需要使用 userdel命令才能删除用户在系统中的用户ID和所属组ID等相关信息，但是需要注意的是在某些Linux版本中用户虽然被删除了， 但是它的家目录却没有被删除，**需要我们手动添加参数 `-r` 将其家目录删除。**

#### 修改密码

**`passwd user`**

#### 切换用户

**`su` -- switch user**

#### 退出切换

**`exit`**

## GCC 编译工具链

### 常用选项 :

- **`-E` 生成预处理后的文件**
- **`-S` : 生成汇编文件**
- **`-c` 生成目标文件**
- **`无参数` 生成可执行程序**
- **`-Wall` 生成警告信息**
- **`-g` 生成调试信息**
- **`-O0 / -O1 / -O2 / -O3` 优化级别, 开发阶段使用 `-O0`**
- **`-Dmacro` 相当于在文件的最前面加上了 `#define macro` , `gcc main.c -Dmacro` 生成 a.out 时传入 `macro`**
- **`-Dmacro=value` 相当于加上了 `#define macro value`, 如果用户一定宏定义过 macro 的 value , 那么按照用户的定义的，否则，macro 的 value 按照执行时提供的 **
- **`-Idir` ( include directory) 对于 `#include "file"` gcc/g++ 会先在当前目录下寻找头文件, 如果没有找到，回去系统的 `include` 目录下找，但若使用了 `-Idir` 指定了目录, 他会先在指定的目录查找，然后在按常规的顺序寻找，对于 `#include <file> `， gcc/g++ 会先到 `-Idir `指定的目录下寻找，找不到，再去系统的 `include `目录下找 **

### 条件编译

**本质 : 在==预处理==阶段决定包含还是排除哪些程序片段**

1. **`#if [#elif] [#else] #endif` 如果 (0 | 1) ，就... **
2. **`#ifdef [#elif] [#else] #endif` 如果define，就 ...**
3. **`#ifndef [#elif] [#else] #endif` 如果没有 define ，就...**
4. \#if 指令

```
#if 常量表达式
...
#endif
```

当预处理器遇到 #if 指令，会计算后面常量表达式的值，如果表达式为 0，则 #if 和 #endif 之间的代码会在预处理阶段删除，否则，#if 与 #endif 之间的代码会被保留

**常用于调试程序：**

```
#define DEBUG 1
...
#if DEBUG
...
#endif
```

1. \#ifdef **等价于 `#if defined ...`**
2. \#ifndef ...

#### 条件编译的作用

##### 编写可移植的程序

下面的例子会根据WIN32 MAC_OS LINUX 是否被定义成宏，而将对应的代码包含到程序中

```
#if defined(WIN32)
...
#elif defined(MAC_OS)
...
#elif defined(LINUX)
...
#endif
```

##### 为宏提供默认定义

可以检测一个宏是否被定义了，如果没有，提供一个默认的定义。

```
#ifndef BUFFER_SIZE
#define BUFFER_SIZE 1024
#endif
```

##### 避免头文件重复包含

**#pragma once**

**使用 `#ifndef` 和 `#define` 可以实现头文件重复包含**

```
#ifndef __WD_FOO_H
#define __WD_FOO_H

typedef struct {
    int id;
    char name[23];
}student;
#endif
```

##### 临时屏蔽包含注释的代码 ( 条件屏蔽 )

```
#if 0
... 包含 /*  asd*/ 注释的代码
#endif
```

### GDB调试

**调试代码比写代码难度高**

**编译器报错那一行, 很可能不是真正出错的地方**

**调试的基本步骤: **

- **走一走**
- **停一停**
- **看一看**

**程序当前的状态和对程序的预期作对比**

#### gdb命令

**编译 : `gcc main.c -o main -Wall -g`**

**进入gdb : `gdb 可执行程序`**

**退出gdb : `quit / q` 支持最短前缀原则 ( 类似 vim**

**设置命令行参数 : `set args + 命令行参数 ...`**

 **`set args hello world kitty`**

**查看代码 : **

**`layout src` 查看代码**

**`layout asm` 查看汇编**

**`layout regs` 查看寄存器的值**

**`layout prev`**

**`layout next`**

##### 走一走

**`run / r` 开始调试程序，直到下一个断点**

**`next / n` 执行下一行代码，遇到函数调用，会执行整个函数**

**`step / s` 单步调试，遇到函数调用，会进入函数中**

**`finish` 执行完当前函数，回到调用者处**

**`continue` 执行到逻辑上的下一个断点**

##### 停一停

**`break / b` 设置断点 ；`break n / b n` 在第 n 行设置断点**

**`ignore n COUNT` 忽略断点，n 代表断点编号 , COUNT 代表忽略多少次 , 常用在忽略循环**

##### 看一看

**`print / p + 变量名称` 查看变量 ( 表达式 ) 的值**

**`print n = 12` 修改变量 n 的值**

**`print \*p@lenofarr` 查看堆上数组的值**

**`delete + 断点编号 / d + 断点编号`；`d` 删除所有断点 **

**`info break / i b` 查看断点信息 **

- **第一个字段是 断点编号**
- **`Enb`( Enable ) 代表该断点是否生效**
- **最后一个字段是断点所在行**

**`display n` 自动展示变量 n ( 表达式 ) 的值**

**`undisplay + 自动展示编号` 删除一个自动展示的表达式**

**`undisplay` 删除所有自动展示的表达式**

**`info display` 查看当前自动展示的表达式**

- **第一个字段是自动展示的编号**
- **`Enb`( Enable ) 代表该断点是否生效**

**`info locals` 查看所有的局部变量**

**arguments : 实参 ；parameters : 形参**

**`info args` 查看实参的值**

**`info registers` 查看寄存器的值**

### Makefile

```
main : main.o add.o sub.o mul.o div.o
    gcc main.o add.o sub.o mul.o div.o -o main
# target
# prerequisites
# commands:可以是任意的shell命令
```

**规则中可以没有依赖，也可以没有命令，但是二者必有其一**

**`main` 为要生成的目标文件**

**`main.o add.o sub.o mul.o div.o` 称为依赖，生成目标所依赖的其它文件**

**`gcc main.o add.o sub.o mul.o div.o -o main` 称为命令，一般情况下为生成该目标所需执行的命令**

**命令执行的条件: **

- **目标 ( target ) 不存在**
- **目标不存在，但是依赖比目标更新**

==依赖和命令二者有其一==

#### 格式

**`make [target]` 如果省略，默认执行Makefile里的第一个 `target`**

**本质 : Makefile 是脚本，指明项目的结构，文件之间的依赖关系**

#### 伪目标

**命令不会创建目标文件**

#### 静态库和动态库

**Linux 中的静态库以 `.a` 结尾；动态库以 `.so` 结尾**

**Windows中静态库以 `.lib` 结尾；动态库以 `.dll` 结尾**

#### 通用Makefile

```
Srcs := $(wildcard *.c)
Outs := $(patsubst %.c, %, $(Srcs))

CC := gcc
CFLAGS = -Wall -g

ALL: $(Outs) 

%: %.c
	$(CC) $< -o $@ $(CFLAGS)

.PHONY: clean rebuild ALL

clean:
	$(RM) $(Outs)
rebuild: clean ALL
```

## Linux 系统编程

### 使用`man` 命令查看API的思路

1. **首先关注第一行，代表在 `man` 手册的第几章，看`NAME` 字段**
2. **其次关注`SYNOPSIS`字段，包含了API的头文件和函数原型**
   - **函数原型中要注意指针类型参数和指针类型的返回值**
   - **指针类型参数 : **
     - **`char\* buf` 传入传出参数，在这个函数中会修改指针指向的对象**
     - **`const char\* buf`传入参数，不会修改指针指向的对象**
   - **指针类型的返回值: **
     - **指向栈区: 用户无需关心释放问题 自动存储期限**
     - **指向静态区 (代码区,数据区): 静态存储期限，用户无需关心释放问题**
     - **指向堆区 : 动态存储期限, 需要调用者释放其内存空间**
3. **最后关注`RETURN VALUE` 字段，会详细介绍其返回值内容，可用于错误检查**
4. **如果还没有解决问题，那么再去看`DESCRIPTION` 字段，带着自己的问题去看**

### 错误处理

#### 检测错误

**1. 通过函数返回值检测**

**2. 通过 `errno` 检测是否发生了错误**

- **`0` : 没有发生错误**
- **`!0` : 发生了错误**

#### 打印错误信息

##### `strerror(errno)`

**作用 : 将`errno` 的整数解析成文本的错误信息**

- **`0` : Success ( 成功执行 ) **
- **`!0` : 执行出错，`errno` 的整数代表具体的错误文本信息**

##### `perror(prefix)`

```
FILE* fp = fopen("t_error.txt","r");
  6     if(!fp){
  7         perror("t_error.txt");
  8         printf("errno = %d \n",errno);       
  9     }
```

等价于 **`fprintf(stderr,"%s: %s\n",prefix,strerror(errno))``**

使用较麻烦

##### `error(int status,int errnum,char* format)`

**参数介绍：**

- **`status` : **
  - **`0` 不退出，不执行 `exit()`**
  - **`!0` 打印错误信息后，执行`exit(status)`**
- **`errnum` : **
  - **`0` 成功**
  - **`!0` 输出`strerrror(errnum)`**
- **format ： 自定义格式串**

### 目录

#### 目录流

### 文件

#### 文件描述符

##### 内核管理文件的数据结构

1. **在用户态，用户能够操作的只是一个文件句柄，也就是 `int` 类型的文件描述符**
2. **文件描述符是和进程绑定的，在每个 PCB 中有一个 `srtuct file\* ofile[]` 的数组，也就是文件描述符表**
3. **在进程的文件描述符表中，存储的 `file*` 指针，指针指向一个打开文件`open file`的结构体，其中包含 `open` 系统调用打开时的权限，文件位置的偏移量 `offset` ，指向 `vnode` 的指针, 引用计数 `reference count` **
4. **`vnode` 指针指向一个 `struct vnode` ，这是 `inode` 的副本，存放的有该文件的元数据 ，设备号 和 指向物理设备上的 `inode`**
5. **`inode` 指针指向物理磁盘上的文件**

==2,3,4 中的数据结构在内核区, 5 中的inode在磁盘==

##### 这么设计的好处

1. 安全
2. 操作简单方便
3. 提供了统一的操作方式

##### 常用API

###### `open`

**作用 : 打开文件描述符**

```
int open(const char* path,int flags,mode_t mode);
```

**参数 flags:**

- **O_RDONLY**
- **O_WRONLY**
- **O_RDWR**
- **O_CREAT**
- **O_EXCL**
- **O_TRUNC**
- **O_APPEND**

**`O_RDONLY / O_WRONLY / O_RDWR `**这三种是访问模式，有且只能选择其中一个

`O_CREAT | O_EXCL` 如果文件存在，这种模式打开会打开失败

`O_CREAT | O_TRUNC` 如果文件存在，则会截断文件为0

**其他内容查看 `man` 手册**

###### `close`

**作用 : 关闭一个文件描述符, 并将其关联文件的引用计数减一**

```
int close(int fd);
```

**其他内容查看 `man` 手册**

###### `read`

**作用: 读文件描述符, 把读取的内容放到自己声明的数组中，返回成功读取字节的个数，如果读取失败，返回 -1 , 设置errno，每次读取 `size` 个字节**

==读文件和读 stdin 的区别: 读文件若没有数据返回 0，读标准输入若没有数据会自我阻塞。==

```
int read(int fd,char* buf,size_t size);
```

**其他内容查看 `man` 手册**

###### `write`

**作用 : 写文件描述符, 把 buf 中的数据写入到文件描述符中，每次写入 `count` 个字节, 返回实际写入的字节数目，失败返回 -1, 设置 errno**

```
int write(int fd,const char* buf,size_t count);
```

**其他内容查看 `man` 手册**

###### `lseek`

**作用 : 移动文件位置**

```
int lseek(int fd,off_t offset,int whence)
```

**参数：**

- **fd : 文件描述符**
- **offset : 从文件位置的偏移量**
- **whence : **
  - **`SEEK_SET` 文件起始位置**
  - **`SEEK_CUR` 文件当前位置**
  - **`SEEK_END` 文件末尾位置**

**返回值: 成功返回移动后文件的位置，失败返回 -1,设置 errno**

###### `fsync`

**作用 : 把内核中脏页写回到磁盘**

```
int fsync(int fd);
```

**其他内容查看 `man` 手册**

###### `ftruncate`

**作用 : 截断文件长度**

```
int ftruncate(int fd,off_t length)
```

**参数 length : **

- **如果 length < 原文件大小，那么截断的数据会丢失**
- **如果 length > 原文件大小，扩充的部分会填入空字符 `'\0'`**

如果一整页都是 `'\0'`，不会占用磁盘空间，此时出现了文件空洞

###### `fstat`

**作用 : 查看文件的元数据**

```
int fstat(int fd,struct stat* sb);
```

**==参数 sb== :**

- **`st_ino` 文件的 inode 编号**
- **`st_size` 文件的大小**
- **`st_mode` 文件的权限信息 ( 八进制输出 `%o`**
- **`st_blocks` 文件所占用的块数量 ( block = 512 byte**
- **`st_nlinks` 文件的硬链接数**

**其他内容查看 `man` 手册**

###### `dup`

**作用 : 复制文件描述符**

```
int dup(int oldfd);
```

**缺点:**

- **不能指定newfd**
- **如果要实现重定向操作，那么close 和 dup 操作之间可能会引发竞态条件，在多进程环境下，导致并发问题**

###### `dup2`

**作用 : 复制文件描述符**

```
int dup2(int oldfd,int newfd);
```

执行成功返回新的文件描述符, 失败返回 -1，设置 errno

###### 内存映射 I/o - `mmap`

**作用 : 将文件内容直接映射到进程的虚拟内存空间**

**`void \*mmap(void \*addr, size_t length, int prot, int flags, int fd, off_t offset);`**

**参数: **

- **`void\* addr` 一般填 NULL，由操作系统指定映射的起始位置**

- **`off_t length` 每次映射区域的大小**

- `prot` 内存映射区的保护位，要么是 `PROT_NONE` ，要么是其他三个的组合

  - **`PROT_NONE` 映射区不能被访问**
  - **`PROT_READ` 映射区可读**
  - **`PROT_WRITE`映射区可写**
  - **`PROT_EXEC` 映射区可执行**

- **

  ```
  int flags
  ```

   

  **

  - **`MAP_PRIVATE` 写时复制，对映射区的修改，复制一份内容到自己的进程虚拟内存中，不会写回到底层文件中，一般用于把文件的内容初始化内存空间**
  - **`MAP_SHARED` 对映射区的修改，会写回到磁盘，进程共享这片映射区，零拷贝技术，适用于大文件**

- **`int fd` 要操作的文件描述符**

- **`off_t offset`偏移量，==必须设置为页的整数倍，因为内存读磁盘是 页 为单位读取==。一页是 4096 byte**

**映射成功返回映射区起始地址, 失败返回`MAP_FAILED`, 并设置errno**

###### 内存映射 I/o - `munmap`

**作用 : 解除映射**

```
int munmap(void* addr,off_t length);
```

执行成功返回 0，失败返回 -1，设置 errno

#### 文件流 VS 文件描述符

|          文件流           | （返回值: ==int==)文件描述符 |
| :-----------------------: | :--------------------------: |
| (返回值: ==FILE*==) fopen |             open             |
|          fclose           |            close             |
|           fread           |             read             |
|          fwrite           |            write             |
|    fseek/ftell/rewind     |            lseek             |

**二者的区别: **

1. **文件流是库函数，可移植性强；而文件描述符是系统调用，可移植性差**
2. **以 `fread / read `为例，在内核把磁盘上的文件读入内存后，文件流会把数据先复制到用户态缓冲区中，在从用户态缓冲区复制到栈上或者堆上的用户自定义的 buffer 中，而文件描述符中间少了一层用户态缓冲区，直接把数据复制到用户自定义的 buffer 中，少了一次复制操作**
3. **文件流是对文件描述符的一层封装**

**文件流 : 适合人类 一行一行的 读写数据，一般处理文本数据 ( 复制两次**

**文件描述符 : 适合机器 一大块一大块 的读写数据，一般用于传输文件 ( 复制一次 **

### 进程

#### 概念

user 视角: 进程是程序的动态执行过程

OS 视角 : 正在执行的任务，计算机的负载 ，进程是计算机资源分配的基本单位。

#### `struct process` 的属性

1. **内存资源**
2. **上下文 ( CPU 的状态 属于底层机制 ) **
3. **外部设备**
4. **当前工作目录**
5. **父进程**
6. **状态属性 ( 运行态 runing , 就绪态 runable , 阻塞态 sleep , 挂起态 stop**

#### 实现 - 底层机制 - 怎么切换进程

##### 方案一 直接运行协议

1. **简单**
2. **不安全**
3. **OS没有控制权**

##### 方案二 受限直接运行协议

**硬件帮助，引入CPU模态为了进程安全**

1. **用户态：不能访问非法内存空间，不能执行特权指令**
2. **内核态**

用户调用系统调用陷入内核态，内核维护一个陷阱表，通过陷阱表执行不同的特权指令，在执行 `return from trap` 返回用户态

**缺点: OS 不能主动获得控制权**

##### 方案三 受限直接运行协议 ( 时钟中断)

**引入 时钟中断为了OS 每隔 `x`ms主动拿到控制权**

#### 实现 - 上层策略

**CPU调度算法**

#### 上下文切换的开销

1. **保存上一个进程的寄存器**
2. **恢复要执行进程的寄存器的值**
3. **高速缓存失效 ( 损耗占比最大 )**
4. **TLB失效 -- 页表的缓存**

### 进程相关API

#### 获取相关进程的标识

##### `getpid()`

**作用 : 获取当前进程的pid**

##### `getppid()`

**作用 : 或的父进程的pid**

#### 创建进程 `fork()`

```
pid_t fork(void);
```

##### 原理

复制父进程的 PCB，并修改其中的某些信息

复制父进程的页表，并且在修改数据时发生写实拷贝 ( copy on write )

**在父子进程都是从 fork() 返回点开始执行，一次执行，二次返回。**

**返回值 : 成功时，父进程返回子进程的pid，子进程返回 0**

 **失败，返回 -1，设置 errno**

##### 父子进程资源共享及私有

1. **代码段**
2. **栈，堆，数据段**
3. **用户态缓冲区**
4. **文件描述符列表**

**上述是父子进程各有一份数据**

**内核中的 `open file` 是父子进程共享**

#### 终止进程

##### 正常终止 `exit() / _exit()`

库函数 : `exit()`

系统调用 : `_exit()`

从 `main` 函数返回执行 `exit()`

##### `exit()`

1. 按和注册相反的顺序执行退出处理函数
   1. **`int atexit(void)` 成功返回 0，失败返回非 0。局限性 : 不能获取退出状态，没有参数**
   2. **`int on_exit(void(\*func)(int,void\*),void\* arg)`, 成功返回 0，失败返回非 0**
2. **刷新用户态缓冲区 ( stdio )**
3. **执行系统调用 `_exit()`**

##### `_exit(int status)`

`status` 只使用后八位，表示退出状态，0表示退出成功，非0 表示执行失败。

#### 异常终止 ( 响应信号 )

==进程异常终止不会调用 进程的退出处理函数 ( atexit(void) / o_exit(void(*func)(int,void*),void* arg) )==

**`abort()` 方法，等于给自己发送 `SIGABRT` 信号**

**发送信号**

#### 监控子进程的状态 `wait/waitpid`

##### `wait`

**作用 : 监控子进程是否==终止==，如果子进程没有终止，则父进程一直阻塞。**

**参数 ( int* status) 使用宏接收 status 来解析程序退出信息: **

1. **`WIFEXITED` -- 判断子进程是否正常终止**

2. **`WEXITSTATUS` -- 获取子进程的退出状态**

3. **`WIFSIGNALED` -- 判断子进程是否异常终止**

4. **`WTERMSIGNAL` -- 获取导致子进程异常终止的信号**

   **`WCOREDUMP` -- 使用条件编译判断是否定义的 WCOREDUMP 宏，如果定义了可以使用 `WCOREDUMP(status)`打印是否产生core文件 **

**返回值: **

- **成功 ： 返回终止子进程的 pid**
- **失败: -1，并设置 errno**

**局限性 : **

1. 如果没有子进程终止，那么会一直阻塞
2. 不能指定监控哪一个子进程
3. 只能监控子进程是否终止的状态 ( 阻塞态，挂起态.. 都不能监视 )

##### `waitpid`

**作用 : 监视子进程 终止，停止，继续这三种状态**

**参数 : **

**`pid`**

- pid > 0，监视进程ID为 pid 的子进程
- pid = -1，监视任意的子进程

**`int \*status` 使用宏接收 status 来解析程序退出信息：**

1. **`WIFEXITED` -- 判断子进程是否正常终止**
2. **`WEXITSTATUS` -- 获取子进程的退出状态**
3. **`WIFSIGNALED` -- 判断子进程是否异常终止**
4. **`WTERMSIGNAL` -- 获取导致子进程异常终止的信号**
5. **`WCOREDUMP` -- 使用条件编译判断是否定义的 WCOREDUMP 宏，如果定义了可以使用 `WCOREDUMP(status)`打印是否产生core文件 **
6. **`WIFSTOPPED` -- 判断子进程是否停止**
7. **`WSTOPSIG` -- 获取导致子进程停止的信号**
8. **`WIFCONTINUED` -- 判断子进程是否继续执行, 若子进程收到`SIGCONT` 信号继续执行，返回 `true`**

**`option` 标志位**

1. **`WNOHANG` 父进程不阻塞**
2. **`WUNTRACE` 监控子进程停止状态**
3. **`WCONTINUED` 监控子进程继续状态**

**返回值: **

- **成功 ： 返回子进程状态发生改变的pid**
- **失败: -1，并设置 errno**

#### 执行程序`execve()`

执行流程 :

1. **清除当前进程的代码段，数据段，堆栈，上下文等信息**
2. **加载新的可执行程序，设置代码段，数据段等**
3. **从新可执行程序的 `main()` 开始执行**

**`int execve(const char* pathname,char* const argv[],char* const envp[]);` **

**执行成功不返回，失败返回 -1，设置errno**

**参数： **

- **`pathname` : 可执行程序的路径 + 可执行程序的名称**
- **`char\* const argv[]` 命令行参数数组，必须以 NULL 结尾**
- **`char\* const envp[]` 环境变量，也必须要以NULL结尾**

##### `exec` 函数簇

**`int execl(const char\* pathname,const char\* arg1,const char\* arg2...)`**

**`int execlp(const char\* file,const char\* arg1,const char\* arg2...);`**

**`int execle(const char\* pathname,const char\* arg1,const char\* arg2,char\* const envp[]);`**

**`int execv(const char\* pathname,char\* const argv[]);`**

**`int execvp(const char\* file,char\* const argv[]);`**

**`int execvpe(const char\* file,char\* const argv[],char\* const envp[]);`**

**`l` : 表示 list， 可变长命令行参数**

**`v` : 表示 vertor，命令行参数放在数组中**

**`e` : 表示 environment ，设置环境变量**

**`p` : 表示 PATH ，程序会从 PATH环境中去寻找 `filename`, 所以参数只写可执行程序名称就可以了**

##### 惯用法

```
int systemFun(){
    
}
```

### 进程间通信

#### 管道 `pipe` ( 无名管道 )

**多用于相关进程之间通信 ( 多数是父子进程之间 )**

**`int pipe(int field[2]);`**

**`field[0]` 为读端，`field[1]` 为写端**

**失败返回 -1，并设置`errno`, 成功返回 0，将把管道的读端写端关联到`field` 数组**

##### 管道的特性

###### 管道是字节流 ( 文件 )

1. **字节流中的数据没有边界 ( 适用于传输大数据 ) , 流的末尾标志 : `EOF / ctrl + d`**
2. **在字节流中读取的数据和写入的顺序是一致的**
3. **不能随机访问数据, 不能使用 `lseek()` 移动文件位置**

**==从空管道read()会被阻塞；若写端关闭，读进程从管道中读完剩余的数据之后, 再次读取会读到 `EOF`, 标志着文件流结束标志，`read() `返回 0 ， 若stdin中没有数据，read() 会被阻塞==**

**管道 / 套接字 若写端关闭，读端读完数据后，返回0；若读端关闭，写端进程收到 `SIGPIPE`( 进程终止 ) 信号**

###### 管道是半双工

管道不能同时读写，在任意时刻，只能有一个进程读，一个进程写，但其读写方向可以改变

###### 管道的容量是有限的

若管道满了之后写进程再写入数据，那么此时会被阻塞。

管道大小 - 16个比特位( 65536 个字节)

#### mkfifo ( 具名管道 )

**多用于非相关进程之间的通信**

用`mkfifo` 命令在 shell 中创建一个 fifo

**`mkfifo [-m mode] pathname`**

**`pathname` 是FIFO的名称， `-m` 指定 FIFO de 权限**

**系统调用 : `mkfifo()`**

**`int mkfifo(const char\* pathname,mode_t mode);`**

**成功返回 0，失败返回 -1，并设置errno，参数和 shell 命令的mkfifo一致**

**常用 `shell` 命令创建具名管道 FIFO**

==打开管道文件时，只有两端都就绪才会返回，当只有一端就绪时那么就绪端会陷入阻塞，所以在打开管道操作是一个进程的阻塞点==

#### I/O 多路复用

**在一个进程的执行流程中，最好是只有一个阻塞点**

**作用 : 将多个阻塞点变成一个阻塞点**

**优势 : 不用创建多个线程 / 进程来分摊一个进程中的多个阻塞点，避免了进程 / 线程切换的系统开销，提高系统资源的利用率。**

 I/O 多路复用是一种同步的 I/O 事件监听机制：可同时监听多个 I/O 事件，当监听的事件中任意一个事件就绪，就及时返回，避免了一个 I/O 阻塞而影响其他的 I/O 事件.

**Linux 中的三种 I/O 多路复用的三种方式 : `select(),poll(),epoll().`**

##### `select()`

**`int select(int nfds, fd_set\* readfds, fd_set\* writefds, fd_set\* exceptfds, struct timeval\* timeout)`**

`select()` 系统调用工作原理：**当调用`select`时，此时如果 `struct timeval` 的两个成员的值不都为0，进程在超时时间内陷入阻塞态，OS 帮助User 监听 user 关注的 I/O 事件，如果有 I/O 事件就绪，OS 会修改 user 传入的 `readfds/writefds` ，也就是清空未就绪的文件描述符，函数返回，此时 user 拿到的 `readfds/writefds` 就只是就绪的 I/O 事件的文件描述符，此时 `timeout` 中成员的值是剩余时间**

###### `select`缺陷

**返回值: **

- **成功返回就绪 I/O 事件的个数，如果超时，返回 0**
- **失败返回 -1，设置 `errno`**

**参数 : **

- **`nfds, readfds,writefds, exceptfds` 指定了`select()` 要检查的文件描述符集合，`timeout` 设定阻塞时间的上限**
- **`nfds`: 设为监听的最大文件描述符 + 1，告诉 OS 要检查位图的前几位，使 OS 不用遍历整个位图**
- **`readfds`: 传入传出参数，传入时监听读事件的集合，传出表示读事件已就绪的集合**
- **`writefds`: 传入传出参数，传入是表示要监听写事件的集合，传出表示写事件就绪的集合**
- **`exceptfds` : 传入传出参数，传入时监听异常事件的集合，传出表示发生异常事件的集合 ( 不常使用**

**`fd_set` 类型定义 : **

```
typedef struct {
    __fd_maks fds_bits[1024 / (8 * (int)sizeof(__fd_mask))];
}fd_set;
```

**其本质是一个位图，共有 1024 位，也就是说 `select` 最多可监视 1024 文件描述符，而把位图定义为结构体的原因是利用了结构体赋值运算符复制的特性**

**常用以下宏函数操作位图中的文件描述符**

1. **`void FD_CLR(int fd, fd_set\* set);` 将文件描述符 fd 从fd_set 所指向的集合中移除**
2. **`int FD_ISSET(int fd, fd_set\* set);` 检查 fd 是否是 fd_set 所指向的集合中的成员**
3. **`void FD_SET(int fd, fd_set\* set);` 将文件描述符 fd 添加到 fd_set 所指向的集合中**
4. **`void FD_ZERO(fd_set\* set);` 清空fd_set 所指向的集合**

**`timeval` 类型定义: **

```
struct timeval{
    time_t tv_sec; // 秒
    suscondsPt tv_usec; // 微秒，m - 毫秒，n - 纳秒
};
```

1. **如果`timeout` 值为NULL，那么 `select()` 会一直阻塞，直到有一个 I/O 事件就绪**
2. **如果 `struct timeval` 的两个成员的值都为 0，那么`select()` 不会阻塞，没有 I/O 事件就绪就立马返回**
3. **最后一种情况，`timeout` 是传入传出参数，传入时表示超时时间，传出表示还剩余的时间**

##### `epoll`

###### 函数原型:

###### 底层实现

> 回调机制

###### 参数结构体

###### 水平触发

###### 边缘触发

###### ==epoll的好处/和select的区别==

#### 信号 `signal`

**信号是异步的事件通知机制**

==使用 `man 7 signal` 查看信号所有信号的作用==

==`kill -l` 查看信号和信号代表的数字==

**同类信号无法打断同类信号函数的执行**

**不同信号之间可以打断信号函数的执行**

##### 特征

1. **异步，进程不知道什么时候收到信号，但一旦收到信号，会立刻相应信号**
2. **不稳定，内核中在事件发生到递送信号之间时，信号处于 peding 悬而未决状态，可能会发生信号丢失**
3. **语义不明确，不同操作系统之间信号的语义不尽相同**

##### 事件源

1. 硬件：
   1. 算数除零 ，**`SIGFPE`**
   2. 访问非法内容 ，**`SIGSEGV`**
   3. 访问非法内存，**`SIGILL`**
2. 软件
   1. 子进程的状态发生改变，**`SIGCHLD`**
   2. 写破损的管道，**`SIGPIPE`**
   3. 调用 abort() ，**`SIGABRT`**
3. 用户
   1. **`ctrl + z ->> SIGTSTP`**
   2. **`ctrl + c ->> SIGINT`**
   3. **`ctrl + \ ->> SIGQUIT`**

==在进程收到信号后，程序有默认对应的行为，或者用户也可以使用 `signal()` 函数捕获信号，改变信号的行为！==

##### 默认行为

- **Term，终止程序**
- **Core，程序生成 Core 文件后再终止程序**
- **Stop，将程序挂起，暂停程序的执行**
- **Cont，恢复程序的运行**
- **Ign，忽略收到信号**

##### 自行处置 -- signal

**注册信号处理函数: `signal(int signal,void (\*hander)(int));`**

返回 `sighandler_t` 类型，handler：`SIG_DFL / SIG_IGN` 恢复默认处置 / 忽略信号。或者自定义处理函数 (handler)

**返回值: 成功，返回 `sighandler_t` 类型，失败返回 `SIG_ERR`**

##### 发送信号 `kill`

**`int kill(pid_t pid,int signo);`**

**参数 pid：**

- \> 0 : 给进程ID 为pid 的进程发送信号
- =0 : 给同进程组的进程发送信号
- = -1 : 给权限允许的所有进程发送信号
- < -1 : 给进程组 id 为 |pid| 的进程发送信号

**返回值 : 成功( 至少发送了一次信号 ) 返回 0，失败 返回 -1，设置error**

**`int raise(getpid(),signo);`**

### 进程 / 线程 相关命令

#### `ps -elLf`

**作用 : 查看所有线程的属性**

#### `ps`

**作用 : 显示当前进程的快照**

**`ps - report a snapshot of the current processes`**

**`TTY` 字段 : 远程控制终端**

#### `ps x`

**作用 : 显示当前用户的所有进程**

**`STAT` 状态字段常见参数 : **

- **`D ( uninterruptible sleep)` 不可中断的阻塞 ( Deep sleep**
- **`I ( Idle kernel thread)` 空闲进程 **
- **`R ( running or runnable on run queue)` 运行态或者阻塞态**
- **`S ( interruptible sleep )` 可被打断的阻塞**
- **`T ( stopped by job control signal )` 挂起态**
- **`Z ( zombie process )` 僵尸进程**
- **`+` 前台进程**
- **`s ( session leader )`**

#### `ps aux`

**作用 : 显示所用用户的进程**

**`USER` 字段显示进程所属用户**

**`START` 字段显示进程开始时间**

**`VSZ virtual memory size` swap 空间**

**`RSS resident set size` 常驻内存**

#### `top`

**作用 : 动态显示系统运行信息**

**`top -` 后是当前时间**

**`up` 是 系统运行的总时长 **

**接下来是当前登录用户的数量**

**`load average` 负载均衡 : 1 min, 5 min, 15 min 内的负责均衡 （ 数值小于 1 表示空闲，等于 1 表示正常，大于 1 表示繁忙 ）**

**`Tasks:` 任务总数, 后面显示了多少正在运行，多少阻塞，多少挂起，多少僵尸**

#### `pstree`

**作用 : 以树的形式显示当前运行的进程**

### 前台进程和后台进程

**`ctrl + c === SIGINT` 信号**

**`ctrl + z === SIGTSTP` 信号 **

**`ctrl + \ === SIGOUIT` 信号**

**`ctrl + d === EOF`**

==浅显理解==

**前台进程 ：会占用bash的IO**

**后台进程 : 不会占用 bash 的IO**

**把后台进程变为前台进程**

**`fg n` n 代表任务编号, fg ： foreground**

**把前台进程变为后台进程**

1. **`Stopped`**
2. **`jobs`**
3. **`bg n`**

**`jobs` 查看程序任务状态**

- **第一个参数 ： 任务编号**
- **第二个参数 : 任务状态**

### 线程

#### 什么是线程 what

==线程是进程的一条执行流程，它是CPU调度的基本单位==

#### 为什么引入线程 why

1. **相对于进程而言，线程是轻量级的**
2. **进程之间通信需要打破隔离的避障，而线程之间通信几乎没有代价**
3. **线程之间切换，不会导致CPU的 高速缓存 和 TLB 的失效**

### 线程相关的 API ( how

#### 获取线程的标识

**`pthread_t pthread_self(void);`**

#### 创建线程

函数原型 : man pthread_create

**参数 : **

- **`pthread_t tid` ，传出参数，接收新线程的 ID**
- **`attr` 线程属性，一般为 NULL，表示使用默认属性**
- **`void\* start_routine(void\*)` 线程的入口函数**
- **`void\* arg` 入口函数的实参**

**返回值: 成功返回 0，失败返回错误码，不设置 errno**

#### 终止线程

函数原型 : man pthread_exit

==主线程调用 `pthread_exit` ，不会影响其他线程的执行==

**线程终止的四个时机: **

- **进程终止 ( return, exit ) ，进程中的所有线程都会终止**
- **执行完线程入口函数，从函数中返回**
- **调用 `pthread_exit(void\*)` 函数**
- **相应 `pthread_cancel()` 的取消请求**

**参数 ：void\* retval**

#### 连接线程

函数原型 : man pthread_join

**作用 : 连接==已终止==的线程，等待线程的计算结果，在此期间，主线程进入阻塞状态**

连接终止的子线程

**参数: **

- **`pthread_t tid` 连接线程的 id**
- **`void\** retval` 传出参数，==用来接收线程的返回值==，如果线程是因为响应取消请求而终止，线程返回 `PTHREAD_CANCELLED`**

**返回值 ： 成功返回 0，失败返回 错误码，不设置 `errno`**

#### 分离线程

函数原型 : man pthread_detach

**参数 ：tid, 分离线程 ID 为 tid 的线程**

==处于游离态的线程不能被 join，也不能恢复到 joinable 的状态==

#### 发送取消请求

函数原型 : **`int pthread_cancel(pthread_t thread);`**

一个线程通知另一个线程终止

==发送请求后，函数会立刻返回，不会等待目标线程退出，目标线程什么时候相应请求，取决于线程的 取消状态 ( cancellation ) 和 取消类型 ( cancellation type )==

**取消状态 : **

- **`ENABLE` 默认属性，表明该线程属于可取消状态**
- **`DISABLE` 表明该线程属于不可取消状态，这时线程会把取消请求挂起，==并不会忽略。==等待属性设置为 `ENABLE` 时启用**

**取消类型 : **

- **`DEFFERED` 默认属性，表示线程将延迟取消，在 OS 规定的取消点相应取消请求**
- **`ASYNCHROUNS` 异步属性，任意时候相应取消请求**

**查看取消点 : `man 7 pthreads`**

#### 清理线程

当线程收到取消请求 或者 执行 `pthread_exit() `后，会终止线程。但是如果线程直接终止，那么可能会存在对共享资源的修改或者没有释放互斥锁等的错误，为了规避这种问题，线程可以设置一个或者多个清理函数，当线程收到取消请求 或者 执行 `pthread_exit() `后，会自动执行清理函数。

**OS 是以栈的结构管理这些清理函数**

##### 线程清理函数栈

**`void pthread_cleanup_push(void(\*routine)(void\*),void\* arg);`**

**`void routine(void\* arg);`**

**`void pthread_cleanup_pop(int execute);`**

**参数：**

- **`execute` 为 0，不执行 `routine` 函数，线程立刻终止，依次将清理函数栈中的方法弹出并执行清理函数**
- ==**`execute` 不为 0，执行 `routine` 清理函数，但线程不会终止**==

##### 进程 / 线程 清理函数执行时机对比

| 进程                                       | 线程                                     |
| ------------------------------------------ | ---------------------------------------- |
| 从 main 函数返回 ( 执行 exit() ) -->> 执行 | 从线程入口函数返回 -->> 不执行           |
| 调用 exit() -->> 执行                      | 调用 pthread_exit() -->> 执行            |
| 响应信号 -->> 不执行                       | 响应 pthread_cancel() 取消请求 -->> 执行 |
|                                            | 调用 pthread_cleanup_pop(非0) -->> 执行  |

### 同步与互斥

## Linux 网络编程

### 理论模型

#### 1.1 OSI七层模型

应用层，表示层，会话层，传输层，网络层，数据链路层，物理层

#### 1.2 TCP/IP 四层模型

应用层，传输层，网络层，网络接口层

#### 1.3 实际应用的五层模型

应用层，传输层，网络层，数据链路层，物理层

#### 数据转发整体流程

**上层(应用层) 产生的数据往下层传输时，要加上(解开) 一层层的头部信息。**

- **头部信息: 描述数据本身**
- **每一层的头部都有严格的格式 ( 协议 )**
- **加头部的目的，==为了增加信息的自我描述性==**

#### 层级划分的必要性

1. **解耦合，降低复杂度**

### 应用层协议 `http/https`

1. **`http` 请求 -->> 发给目标服务器**
2. **`http` 响应 -->> 发回请求主机**

#### `http` 的研究内容

##### 请求报文

1. **请求行**
2. **请求头/消息头**
3. **空行**
4. **正文**

**请求行的内容 : 请求方式/请求方法 资源路径 http的协议描述**

**请求方式/请求方法: `get/post`**

==( 重要 )二者的区别:==

- **get一般用来获取数据，且把参数拼接到资源路径之后**
- **post一般用来提交数据，把参数放在正文里**

##### 响应报文

1. **响应行**
2. **响应头/消息头**
3. **空行**
4. **正文**

**响应行的内容 : 协议和版本 ==状态码== 原因短语**

==( 重要 )状态码 :==

- **`100` 临时响应 ( 基本不用 )**
- **`200` 状态正常( 请求响应成功 )**
- **`300` 重定向**
- **`404` 未找到 ( 资源不存在 )**
- **`500` 服务器内部错误**

#### 抓包 ( 重要 )

**工具 : `wireshark` / 网页的开发者工具**

抓包需要关注的信息:

1. **请求方式是不是想要的方式 ( get 、 post )**
2. **IP 和 端口 是否和自己预期的一样**
3. **携带参数 和 资源路径 对不对**
4. **请求有没有成功 : 状态码 -> 200**
5. **返回的参数 和 数据 是否正确**

### 传输层协议 `UDP/TCP`

#### 地址转换

##### 大小端地址理论

##### 点分十进制 / 端口转换

**关注 几个结构体 和 IP/端口转换的API**

##### DNS -> 用API 解析 域名

**只需要`struct sockaddr \*ai_addr;` 类型和 `struct addrinfo \*ai_next; `类型**

#### TCP 通信

##### 理论模型

> 

##### 基于Socket通信的 TCP

==**查看Socket通信查看程序状态的命令 : `netstat -an`**==

> ==实践过程中出现的问题 ( 服务端端口占用)==：
>
> 若服务端先 close，那么会向客户端先发起 四次挥手，会先进入 timewaite状态。此时若重启服务端，则显示端口已被占用，因为在 timewaite 状态，OS 并不会释放该端口，在 2个 MSL结束后，释放该端口。可再次启动服务端
>
> 也可以使用 **`setsockopt()`** 使服务器在timewaite阶段也可再次使用其端口
>
> ```
> int reuse = 1;
> setsockopt(socketFd, SOL_SOCKET, SO_REUSEADDR, &reuse, sizeof(reuse));
> ```

> **tcpdump 操作 : connect时使用tcpdump命令查看包的状态**
>
> ==解决网络问题的流程:==
>
> ```
> 观察连接的状态
> // ss -tn
> // netstat -tn
> tcpdump 保存抓包数据 （用wireshark打开抓包数据分析）
> // sudo tcpdump -w a.txt
> ```

##### TCP 的粘包问题

##### 半包问题

避免半包问题: 接收方的recv函数添加 MSG_WAITALL

#### UDP 通信

##### 理论模型

##### 基于Socket通信的 UDP

### 进程池

#### 进程池与线程池

适用场景 :

- **多进程: 适合cpu密集，适合关联性弱的任务并发/并发执行**
- **多线程: 适合I/O密集，适合关联性强的任务并发/并发执行**

考虑时间片是否能全部用完，若有大量的 I/O 请求，会导致阻塞，让出cpu，所以这种情况适用多线程

若任务设计大量计算，那么使用 cpu密集，

进程数量的标准： 1 倍(cpu密集) 到 2(I/O密集) 倍的核心数。

由于创建进程的开销较大，我们不希望进程频繁的创建与销毁，而是希望有用户请求，交给一个进程和用户交互，交互完成后，进入阻塞，等待下个用户( 池化设计 )

#### 设计逻辑

**父进程: 主要实现控制逻辑，fork() 创建子进程 ->> 创建池中进程**

- **监听 8080端口，有新的连接，发送给池中的子进程，，让子进程持有socket对象，和客户端通信**
- **父进程记录子进程的忙/闲状态，和本地通信的 socket套接字**
- **子进程处理完和用户的逻辑后，通知父进程修改忙/闲状态**
- **退出时，收到 SIGKILL 信号，主进程通知子进程要退出，子进程处理完和用户的交互，执行exit(0), 子进程退出，父进程 调用 wait() 函数清理子进程**

#### 父子进程之间传递文件对象的问题

使用 socketpair函数: **用于创建一对互相连接的全双工通信的socket,主要用于同一台机器的进程间通信**

```
// create a pair of connected sockets
int socketpair(
   int domain, // 指定socket使用的协议族, 本地通信我们使用: AF_LOCAL
   int type, // 指定socket的类型: SOCK_STREAM(TCP), SOCK_DGRAM(UDP)
   int protocol, // 指定协议, 默认设置0即可
   int sv[2] // 用于返回两个连接的socket描述符(等价与socket的fd), 父子进程可以通过这个文件描述符进行通信(任何发送到sv[0]的数据都可以从sv[1]读取，反之任何发送到sv[1]的数据都可以从sv[0]读取。)
);
// 返回值: 成功返回0, 失败返回-1
```

socketpair函数实现了创建了通信的端点，实现具体传输需要使用 : **sendmsg ，recvmsg**

```
// send a message on a socket
ssize_t sendmsg(
   int sockfd, // socket文件描述符(对应上面socketpair中创建的文件描述符sv[]数组)
   const struct msghdr *msg, // 要发送的详细信息
   int flags // 发送行为, 默认0
);
// 返回值: 成功返回一个ssize_t类型的值，表示发送的字节数。失败-1。
// receive a message from a socket
ssize_t recvmsg(
   int sockfd, // socket文件描述符(对应上面socketpair中创建的文件描述符sv[]数组)
   struct msghdr *msg,  // 要接收的详细信息
   int flags // 接收行为, 默认0
);
// 返回值: 成功返回一个ssize_t类型的值，表示接收的字节数。失败-1。
```

**struct msghdr:**

```
struct msghdr {
   void         *msg_name;//记录消息地址, 填充NULL交给系统处理
   socklen_t     msg_namelen;//地址长度, msg_name为NULL时系统自动填充
   struct iovec *msg_iov;//iovec类型的数组, 每个iovec类型都是一份数据 (即:这个数组可以携带多份数据)(比较灵活)
   size_t        msg_iovlen;//上个参数iovec数组中的长度
   void         *msg_control;//(本质是一个cmsghdr类型指针) 用于包含控制信息(传输文件对象就要用到它)
   size_t        msg_controllen;//控制信息缓冲区的长度 (比较复杂)
   int           msg_flags;//消息的标志, 系统填充
};
```

**struct iovec**

```
struct iovec{
   void *iov_base;//一个数据的指针
   size_t iov_len;//数据的长度(字节)
}
```

**struct cmsghdr**

```
struct cmsghdr {
   socklen_t cmsg_len;//数据长度(字节): 头部信息(cmsg_len/cmsg_level/cmsg_type) + cmsg_data长度: 需要计算
   int       cmsg_level;//协议类型: (socket使用)SOL_SOCKET
   int       cmsg_type;//消息的类型: (传输文件描述符) SCM_RIGHTS 
   unsigned char cmsg_data[]//存放具体数据
};
ps1: cmsg_data数组的长度用于存放额外的数据,可以根据需求的变化而变化(比如现在我们使用它, 准备存放文件描述符)
ps2: 我们可以通过CMSG_LEN这个宏用于计算包括cmsg_data在内的完整cmsghdr结构的长度。而使用CMSG_LEN的时候, 其参数只需要传入cmsg_data的长度
// 比如: cmsg_data存储文件描述符(文件描述符int类型), 通过CMSG_LEN(sizeof(int))得到的长度就是整个cmsghdr结构体的长度(cmsg_len + cmsg_level + cmsg_type + cmsg_data)
ps3: CMSG_DATA这个宏用于获取指向cmsghdr结构中数据部分cmsg_data的指针
// 比如: 如果我们准备用cmsghdr传输文件描述符, 就要先通过CMSG_DATA获取指向cmsg_data部分起始位置的指针
//		文件描述符指针: *netfd;
//		struct cmsghdr *pcms = (struct cmsghdr *) malloc(  CMSG_LEN(sizeof(int))  )
//		void *addr = CMSG_DATA(pcms);
//      int * p_fd = (int *)addr;
//		*p_fd = *netfd
```

**具体用法:**

```
int fd[2];
socketpair(AF_LOCAL, SOCK_STREAM, 0, fd);

if(fork() == 0){
   int fd_txt = open("1.txt", O_WRONLY);
   close(fd[0]);
   int socket_fd = fd[1];

   struct msghdr hdr;
   bzero(&hdr, sizeof(hdr));

    // 正文信息
   char *str = "hello";
   struct iovec vec[1];
   vec[0].iov_base = str;
   vec[0].iov_len = strlen(str);

   hdr.msg_iov = vec;
   hdr.msg_iovlen = 1;

    // 控制信息
   struct cmsghdr *pcms = (struct cmsghdr *)malloc(CMSG_LEN(sizeof(int)));
    // 计算整个cmsghdr对象的大小
   pcms->cmsg_len = CMSG_LEN(sizeof(int));
   pcms->cmsg_level = SOL_SOCKET;
   pcms->cmsg_type = SCM_RIGHTS;
    // 获取存放文件描述符的指针
   void *addr = CMSG_DATA(pcms);
   int *p_fd = (int *)addr;
    // 赋值
   *p_fd = fd_txt;

   hdr.msg_control = pcms;
   hdr.msg_controllen = CMSG_LEN(sizeof(int));

    // 发送
   sendmsg(socket_fd,&hdr, 0);

   printf("son 1.txt fd: %d \n", fd_txt);
}else{
   close(fd[1]);
   int socket_fd = fd[0];

struct msghdr hdr;
   bzero(&hdr, sizeof(hdr));

    // 接收正文信息
char buf[60] = {0};
   struct iovec vec[1];
   vec[0].iov_base = buf;
   vec[0].iov_len = sizeof(buf);

hdr.msg_iov = vec;
   hdr.msg_iovlen = 1;

    // 设置控制信息
struct cmsghdr *pcms = (struct cmsghdr *)malloc(CMSG_LEN(sizeof(int)));
   pcms->cmsg_len = CMSG_LEN(sizeof(int));
   pcms->cmsg_level = SOL_SOCKET;
   pcms->cmsg_type = SCM_RIGHTS;

hdr.msg_control = pcms;
   hdr.msg_controllen = CMSG_LEN(sizeof(int));

    // 接收文件对象
recvmsg(socket_fd,&hdr, 0);

    // 获取指向文件对象的指针
void *addr = CMSG_DATA(pcms);
   int *fd = (int *)addr;

   wait(NULL);
   printf("main 1.txt fd: %d \n", *fd);
   printf("main str :%s \n", buf);

write(*fd, "world", 5);
}
```

#### 遇到的粘包问题

用户调用send函数将数据发送内个的socket对象的输出缓冲区中，OS决定合适把数据发走，若调用多次send(), 由于TCP连接传输的是字节流，数据之间没有边界，对方在接受数据时，OS可能会一次把对方多次发送的数据读走，这种问题为粘包问题

**解决方案: 可以使用简单的自定义协议，在数据前面增加描述数据的大小的字段，一起发送给客户**

#### 遇到的半包问题

半包问题指在传输大文件时，有几率发生用户 send() 一次的数据，OS却两次发走，这种情况称为半包问题

**为了规避半包问题，用户在接收数据时，在 recv() 方法的flag参数位，添加 MSG_WAITALL 宏，指明必须收满指定的字节，才会返回，若对方断开连接，那么返回读到的字节数**

#### 客户端先关闭，与其交互的子进程变为僵尸进程的问题

若在交互的过程中，客户端一方先断开了链接，那么默认的 send() 函数会发送 SIGPIPE 信号给进程，导致直接崩溃，变成僵尸进程。

**解决方案 : 每次调用send() 函数时，在参数的标记位写入 MSG_NOSIGNAL 的宏，代表忽略抛出的 SIGPIPE 信号**

此时，若客户端关闭掉了链接，那么第二次调用send() 函数时，会返回 -1

#### 传输文件时的优化方案

##### 使用 `read()/write()` 的弊端

使用 send() 前调用 read() 函数，将数据拷贝(DMA)到内核缓冲区中，在从内核拷贝到用户态缓冲区中，然后，send() 会将数据在拷贝到socket对象的输出缓冲区中，DMA将socket输出缓冲区的数据拷贝到网卡发走

对方的网卡接收到数据后，OS 会把数据拷贝到 socket对象的输入缓冲区中，调用recv() 将数据再拷贝到用户态的缓冲区中，最后调用 write() 将数据拷贝到 内核的缓冲区中，OS 将数据写回磁盘上的文件

**分析( 只考虑一方:**

- **四次数据拷贝，包括两次CPU拷贝，两次DMA拷贝**
- **四次上下文切换**

##### 使用 `mmap()` 方法传输文件

使用 mmap() 方法，DMA将文件拷贝到内核缓冲区中，在映射到用户态缓冲区中，用户调用send() 发送给 socket对象的输出缓冲区，DMA在拷贝至网卡

对方的网卡收到数据后，将数据拷贝到socket对象的输入缓冲区中，用户调用recv() 将数据读到 mmap的映射区域中，然后OS会把数据写到文件中

**分析:**

- **三次数据拷贝，包括一次cpu拷贝，两次DMA拷贝**
- **发生了四次上下文切换**

##### 使用`sendfile()` 方法传输文件

发送方调用 `sendfile() `方法，会将内核缓冲区的数据直接跳过socket对象，拷贝到 网卡上，直接发送走，用户不需要调用 send() 方法，实现 ==零拷贝==

但接收方还必须要使用 recv 函数接受数据到 mmap的映射的区域中。

**分析: **

- **两次数据拷贝, 只有两次DMA拷贝，无CPU拷贝**
- **发生了两次上下文切换**

#### 进程与进程组

**`./main` -->> 创建一个进程，属于新创建的进程组，其fork() 的子进程 -->> 和父进程属于同一个进程组**

在一个会话中：==最多有一个前台进程组==，可能有多个后台进程组

**前台进程组：可以直接和命令行交互的进程组，`ctrl + z` 变成后台进程组**

**`ctrl + c` 给整个==前台进程组==发送 2 号信号**

**`fg` 命令 把后台进程组拉回到前台**

#### 关于程序有序关闭的问题

**`setpgid(0,0);` 第一个0代表自己，第二个0代表自己成为一个进程组 **

使每个子进程分离出来变为后台一个单独的后台进程

当父进程接收到 2 号信号时，父进程退出，而子进程本地套接字还在读取父进程发送的 net_fd, 由于父进程已退出，写端关闭。子进程读 0，不阻塞，但 send() 时由于没有要发送的客户端，抛出 SIGPIPE 信号，子进程崩溃

**问题是: 收到终止信号时，让父进程要求并等待子进程运行完任务逻辑，清理完子进程，程序退出**

==信号 + 管道 + epoll==

解决方案: **声明全局作用域的管道，主进程捕获终止信号后，向管道写端写入数据，而epoll监听管道的读端，**

**当主进程收到终止信号时，主进程写管道，此时触发epoll监听管道读事件，执行相应的子进程退出处理逻辑**

#### 最终代码

##### 主进程:

```
#include "header.h"

// 创建管道，epoll监听管道是否收到信号，若收到信号，通知子进程要结束任务
int field[2];

// 收到信号时，往本地套接字写数据，触发epoll监听，通知子进程程序要结束了
void func(int num){
    // 通知子进程
    char *msg = "收到 2 号信号";

    write(field[1],msg,strlen(msg)+1);
}

int main(int argc,char* argv[])
{

    if(pipe(field) == -1){
        error(EXIT_FAILURE, errno, "pipe");
    }
    
    // 注册信号处理函数，捕获 2 号信号，改变信号行为
    signal(2, func);

    // 首先初始化进程池
    // 保存池子中的进程
    work_in_pool pool[3];
    init_pool(pool, 3);

    // 绑定端口和IP地址并监听端口
    int s_fd = socket(AF_INET, SOCK_STREAM, 0);
    init_tcp_link(s_fd, "8080", "192.168.7.28");

    // 创建epoll对象，并监听 s_fd 
    int e_fd = epoll_create(1);
    epoll_add_listen(e_fd, s_fd);

    // 把池子中进程加入监听，接收子进程发来的回收消息
    for(int i = 0;i < 3;++i){
        epoll_add_listen(e_fd, pool[i].local_socket);
    }

    // 监听管道
    epoll_add_listen(e_fd, field[0]);

    for(;;){
        // 就绪数组
        struct epoll_event events[3];
        memset(events, 0, sizeof(events));

        int ready_num = epoll_wait(e_fd, events, 3, -1);
        for(int i = 0;i < ready_num;++i){
            // 新的链接请求
            if(events[i].data.fd == s_fd){
                int new_fd = accept(s_fd, NULL, NULL);
                ERROR_CHECK(new_fd, -1, "accept");

                // 把这个和用户交互的描述符发送给子进程处理
                send_to_child(pool, 3, new_fd);

                close(new_fd);// 关闭掉主进程和客户端的连接, 只保留子进程的连接
            }else if(events[i].data.fd == field[0]){    // 收到终止信号，通知子进程
                // 把管道中的数据读出来                 
                char buf[128] = {0};
                read(field[0], buf, sizeof(buf));

                // 打印收到 2 号信号时的逻辑
                printf("%s ,要求子进程全部退出\n", buf);

                // 给所有子进程发送消息，要求子进程退出
                for(int i = 0;i < 3;++i){
                    write_netfd_to_child(0, pool[i].local_socket, true);
                }
                
                // 等待子进程退出, 并清理子进程
                for(int i = 0;i < 3;++i){
                    wait(NULL); // 无需捕获子进程的退出状态
                }
                
                // 主进程自动退出
                printf("子进程已经全部退出，现在主进程退出\n");
                exit(0);
            }else{  // 子线程发来请求，表明自己工作已经完成
                for(int j = 0;j < 3;++j){
                    if(pool[j].local_socket == events[i].data.fd){
                        pool[j].p_status = FREE;    // 把状态改为空闲
                        char buf[10] = {0};
                        recv(pool[i].local_socket, buf, 10, 0); // 默认水平触发，所以要把缓冲区中的数据读出来
                        break;
                    }
                }

            }
        }

    }
    return 0;
}
```

##### 头文件定义:

```
#include <func.h>

enum{
    BUSY,
    FREE
};

typedef struct {
    pid_t pid;  // 记录每个进程的 PID
    int p_status; // 标记进程繁忙与否
    int local_socket; // 用来和主进程通信的 socket
}work_in_pool;

// 初始化进程池
int init_pool(work_in_pool pool[], int num);

// 初始化服务器
int init_tcp_link(const int socket_fd, const char* port, const char*ip);

// epoll添加监听函数
int epoll_add_listen(const int epoll_fd, const int net_fd);

// 从池中选择一个进程，并让其处理这个网络套接字
int send_to_child(work_in_pool pool[],int n, int net_fd);

// 子进程工作函数
int gotoWork(const int local_socket);

// 把套接字发送给子进程
// 增加标记位，标记主进程是否要子进程退出
int write_netfd_to_child(const int net_fd, const int local_socket, bool flag);

// 获取主线程发送的 net_fd
int read_from_main(int* net_fd, const int local_socket, bool* flag);

// 和用户交互函数
int do_work(int net_fd);
```

##### 初始化进程池：

```
#include "header.h"


int init_pool(work_in_pool pool[], int num){
    
    for(int i = 0; i<num;++i){
        int local_socket[2];
        // 创建本地套接字， 父进程传递网络套接字给子进程
        socketpair(AF_LOCAL, SOL_SOCKET, 0, local_socket);

        int pid = fork();
        switch(pid){
        case -1:
            error(EXIT_FAILURE, errno, "fork");
            
        case 0:
            // 子进程
            // 关闭一端
            setpgid(0,0);// 第一个0代表自己，第二个0代表自己成为一个进程组
            close(local_socket[1]);
            
            // TODO...
            gotoWork(local_socket[0]);

        default:
            // 父进程
            close(local_socket[0]);
            
            // 父进程记录子进程的状态
            pool[i].pid = pid;
            pool[i].p_status = FREE;
            pool[i].local_socket = local_socket[1];
        }
    }
    return 0;

}
```

##### 父子进程传输文件对象信息:

```
#include "header.h"

#define LEN 128

int read_from_main(int *net_fd, const int local_socket, bool *flag){
    struct msghdr msg;
    memset(&msg, 0, sizeof(msg));
    
    // 正文信息, 接收父进程发来的标记位
    struct iovec vec[1];
    bool flag_parent;
    vec[0].iov_base = (void*)&flag_parent;
    vec[0].iov_len = sizeof(flag_parent);
    
    msg.msg_iov = vec;
    msg.msg_iovlen = 1; // iovec 数组的长度

    struct cmsghdr* cmsg = (struct cmsghdr*) malloc(CMSG_LEN(sizeof(int)));
    cmsg->cmsg_level = SOL_SOCKET;
    cmsg->cmsg_type = SCM_RIGHTS;
    // cmsg 结构体的长度
    cmsg->cmsg_len = CMSG_LEN(sizeof(int));
    
    msg.msg_control = cmsg;
    msg.msg_controllen = CMSG_LEN(sizeof(int));

    // 主进程关闭(写端关闭), 读端返回 0
   int ret =  recvmsg(local_socket, &msg, 0);
   if(ret == 0){
        printf("主进程退出了\n ret = %d\n", ret);
   } 
    
   // 正常执行，给传入传出参数赋值
    int* pfd = (int*) CMSG_DATA(cmsg);
    *net_fd = *pfd;
    
    // 修改标记位
    *flag = *(bool*)msg.msg_iov[0].iov_base;
    
}

int write_netfd_to_child(const int net_fd, const int local_socket, bool flag){
    
    struct msghdr msg;
    memset(&msg, 0, sizeof(msg));

    // 正文信息，接收主进程发来的标记位，判断子进程是否要退出
    struct iovec vec[1];    
    vec[0].iov_base = &flag;
    vec[0].iov_len = sizeof(flag);

    msg.msg_iov = vec;
    msg.msg_iovlen = 1; // 正文数组的长度

    struct cmsghdr *cmsg = (struct cmsghdr*)malloc(CMSG_LEN(sizeof(int)));
    cmsg->cmsg_level = SOL_SOCKET;
    cmsg->cmsg_type = SCM_RIGHTS;
    cmsg->cmsg_len = CMSG_LEN(sizeof(int));
    void* add = CMSG_DATA(cmsg);
    int *pfd = (int *)add;
    *pfd = net_fd;

    msg.msg_control = cmsg;
    msg.msg_controllen = CMSG_LEN(sizeof(int));

    // 发送
    sendmsg(local_socket, &msg, 0);

}
```

##### 子进程工作逻辑:

```
#include "header.h"
int send_to_child(work_in_pool pool[],int n, int net_fd){

    // 判断进程池中哪些是空闲连接
    for(int i = 0;i < n;++i){
        if(pool[i].p_status == FREE){
            // 这是主进程，把net_fd 通过本地套接字发送给子进程
            write_netfd_to_child(net_fd, pool[i].local_socket, false);
            // 把池中的这个进程置为繁忙
            pool[i].p_status = BUSY;
            return 0;
        }
    }
    
    // 走到这说明进程池中没有多余可用的连接
    char buf[90] = "没有可用链接";
    send(net_fd, buf, strlen(buf)+1, 0);    //给客户端发送消息

    close(net_fd);
    return 0;
}

// 子进程工作函数
int gotoWork(const int local_socket){
    while(1){
        // 拿到主线程发送的 net_fd
        int net_fd;
        bool flag;
        // 主进程关闭，相当于写端关闭，读端返回 0
        read_from_main(&net_fd, local_socket, &flag);  // 获取不到 net_fd 会自我阻塞
        // 如果标记位 为0，表示主进程要求子进程退出
        if(flag){
            exit(0);    // 子进程有序退出
        }

        // 和用户交互
        do_work(net_fd);

        // 交互完通知主进程, 把状态改为FREE
        // 若主进程关闭，子进程 没有send的客户端，抛出 SIGPIPE 信号，终止子进程
        send(local_socket, "OK",2, MSG_NOSIGNAL);
        printf("关闭客户端\n");
        close(net_fd);
    }
    return 0;
}

int do_work(int net_fd){
    
    const char* file_name = "1b.txt";

    // 发送文件名
   int file_name_len = strlen(file_name);
   // 若读端关闭，send 返回 -1, 并发送 SIGPIPE信号
   send(net_fd, &file_name_len, sizeof(int), 0);
   send(net_fd, file_name, file_name_len, 0);
    
   // 打开文件
   int file_fd = open(file_name, O_RDWR);
    ERROR_CHECK(file_fd, -1, "open");
    
    // 给客户端发送文件大小
    struct stat st;
    fstat(file_fd, &st);

    // 每个send都加上 MSG_NOSIGNAL， 防止读端断开连接，此进程程序崩溃
    send(net_fd, &st.st_size, sizeof(off_t), MSG_NOSIGNAL);

    sendfile(net_fd, file_fd, 0, st.st_size);
    
    close(file_fd);
    return 0;
}
```

### 线程池

### 网络层协议 `IP`

==需要记住的几个IP地址:==

- **`0.0.0.0` 作为源地址时表示本地主机 || 作为目的地址时，表示任意 IP 地址**
- **`192.168.0.x ~ 192.168.255.x` ：局域网IP**
- **`255.255.255.255` ：本地网络广播地址**
- **`127.0.0.1` ：回环地址，代表本机**

## Git

### git 作用

git 是来记变化，以==版本==来追踪文件变化的

### git 命令

#### `git clone url`

##### 作用

**把 远程仓库下载到本地，在本地生成 : ==本地仓库，缓冲区/暂存区，工作空间==**

本地仓库和缓冲区在 `.git` 文件中，除此之外，都是工作空间

**同一台机器中每一个clone的项目都有自己的本地仓库 ->> 本地仓库不共享**

#### `git status`

**作用: 查看 工作空间，缓冲区，本地仓库的状态( 变化**

#### `git add filename / .`

**`git add filename`作用 : 把工作空间文件的==变化==，放到缓冲区/暂存区**

**`git add .` : 把当前工作空间的所有变化，都放到缓冲区。**

#### `git commit -m '注释'`

**作用: 把缓冲区记录的变化，生成一个==版本==，放入本地仓库**

注释应该具有实际意义

#### `git log`

**作用: 查看本地仓库的版本记录**

**解释: **

- **第一行 : 版本号**
- **第二行: 作者 和 邮箱**
- **第三行: 产生时间**
- **最后: 版本注释**

### 分支结构

#### 查看分支

```
git branch -a 	// a ->> all
```

查看当前本地中所有的分支

remote字段代表远程的分支

**而本地仓库通过链表的方式来记录分支与版本**

**在 commit 后，分支记录最新版本**

#### 创建分支

```
git branch 分支名
```

**在本地仓库中创建一个分支**

#### 切换分支

```
git checkout 分支名
```

**切换分支**

#### 删除分支

```
git branch -d 分支名 // 安全删除，确保该分支的内容已被合并到上游
git branch -D 分支名 // 强制删除
```

#### 创建并切换

```
git checkout -b 分支名
```

**创建一个分支并切换到该分支**

#### 合并分支

若让 dev 分支 合并到 master 分支上：

- **切换到 master 分支上**
- **执行 `git merge dev` 命令**

##### Y 型结构

若创建dev分支后，并操作dev分支，而master 分支的版本也发生了变化，二者若合并分支，会产生一个新的合并版本，并且 master 会指向最新版本，**合并成功( 自动合并 ): 弹出一个版本注释页面**。

若dev 分支要获取最新版本，只需要将 把 master合并回来，执行 `git merge master`

**使用命令 `git log --oneline --all --graph` 查看**

**合并失败( 发生冲突 ): 需要自己手动解决冲突后重新提交 `git add / commit -m ....`**

**发生冲突取决于用户在提交和更新代码时修改了同一个文件的相近行**

#### `git push/pull`

**用户在克隆远程仓库的代码后，在本地会有一个对远程仓库数据的副本，和本地仓库**

**`git push` 命令将版本先推送到本地对远程仓库的副本上，在上传到远程仓库**

**`git fetch origin/master` 把远程仓库 master 分支的版本拷贝到本地的副本中**

**`git merge origin/master` 把副本中远程master的版本合并到本地的master上**

==将上面两个命令合并在一起就是 `git pull `命令==

##### 两个用户发生合并冲突问题

当一个用户修改了一个文件，把自己的版本上传到远程仓库上后，另一个用户也修改了这个文件的相邻行，并使用`git push` 将自己修改的文件推送到远程仓库中，此时发生了合并冲突，第二个用户需要先 `git pull` 下来第一个用户的代码，手动解决冲突，并通知 第一个用户，再次 `git push`。

#### 上传新的分支

**如果本地创建了一个分支, 而远程不具有这个分支, 也可以通过命令的方式把它推送到远程上, 让远程多一个新分支**

**`git push --set-upstream | -u origin 分支名`**

#### 获取远程分支

**`git fetch origin dev:dev`**

**把远程的 dev 分支下载到本地并创建 dev 分支，但这是并没有与远程的 dev 分支建立关联，建立关联使用：`git branch --set-upstream-to=origin/dev dev` 命令**

#### 忽略文件

##### `.gitignore`

==在项目创建后，就要设置忽略文件==，否则若想忽略的文件已经被推送到远程仓库了之后，在去修改忽略文件，不会生效，因为该文件已经被 git 追踪了。

### git 回退

#### git工作空间的回退

**`git checkout filename(修改的文件)`**

#### 从缓冲区回退到工作空间

**`git reset filename`**

==尽量不使用回退，而是用覆盖==

#### 回退本地版本

**`git reset --hard 版本号`**

**`git log --oneline --all --graph` 图形页面查看所有的版本**

**回退到某个版本的状态，既可以回退回去，也可以回退回来**

### SSH

初次使用 ssh clone 按照 Gitee 的提示输入命令，生成公钥，粘贴到Gitee中。保存即可