+++
title = '服务器管理操作笔记'
date = 2025-03-02T19:11:05+08:00
draft = false

tags=["技术","服务器"]

showSummary=true

Summary="实验室服务器维护常用命令记录（Linux系统下），主要包括网络管理与磁盘管理的常用操作，后续也可能更新补充"

+++



## 1.基本指令

### 1.1 文件与目录操作

##### **查看当前目录和文件列表**  

- 命令：`ls`  
  示例：  

  ```bash
  ls          # 列出当前目录下的文件和文件夹（颜色区分文件类型）
  ls -l       # 详细列表格式，显示权限、所有者、文件大小、修改时间等信息
  ls -a       # 显示所有文件，包括隐藏文件（以.开头的文件）
  ls -lh      # 以人类可读格式显示文件大小
  ```

##### **切换目录**  

- 命令：`cd`  
  示例：  

  ```bash
  cd /var/log     # 进入 /var/log 目录
  cd ~            # 进入当前用户的主目录
  cd -            # 返回上一个工作目录
  cd ..           # 进入当前目录的上一级目录
  ```

##### **查看当前路径**  

- 命令：`pwd`  
  示例：  

  ```bash
  pwd     # 输出当前所在目录的完整路径
  ```

##### **创建和删除目录**  

- 创建目录：`mkdir`  
  示例：  

  ```bash
  mkdir new_folder          # 创建一个名为 new_folder 的目录
  mkdir -p /tmp/a/b/c       # 递归创建多级目录（a、b、c）
  ```

- 删除目录：`rmdir` 和 `rm -r`  
  示例：  

  ```bash
  rmdir empty_folder        # 删除空目录
  rm -r folder_to_remove    # 递归删除目录及其内容（注意：删除操作不可逆，请谨慎使用）
  ```

##### **文件复制、移动、跨服务器传输和删除**  

- 复制文件或目录：`cp`  
  示例：  

  ```bash
  cp source.txt destination.txt      # 复制文件
  cp -r source_directory/ target_dir/ # 递归复制整个目录
  ```

- 移动或重命名文件/目录：`mv`  
  示例：  

  ```bash
  mv old_name.txt new_name.txt       # 重命名文件
  mv file.txt /path/to/destination/   # 移动文件到指定目录
  ```

- 删除文件：`rm`  
  示例：  

  ```bash
  rm file.txt             # 删除单个文件
  rm -f file.txt          # 强制删除文件（不提示确认）
  rm -rf directory/       # 强制递归删除目录及其内容
  ```

* 文件远程传输：`scp`

  基本语法

  ```bash
  scp [选项] 源路径 目标路径
  ```

  示例：

  使用 `-r` 参数递归复制整个目录

  ```bash
  scp file.txt user@example.com:/home/user/ #从本地复制文件到远程主机
  scp -r username@remote_host:/path/to/remote_file /path/to/local_directory/ #从远程主机复制目录到本地
  ```

##### **查看和编辑文件内容**  

- 查看文件内容：`cat`、`more`、`less`、`head`、`tail`  
  示例：  

  ```bash
  cat file.txt           # 显示整个文件内容
  more file.txt          # 分页显示文件内容
  less file.txt          # 分页显示，并支持向前翻页
  head -n 10 file.txt    # 显示文件前10行
  tail -n 10 file.txt    # 显示文件最后10行
  tail -f /var/log/syslog  # 实时跟踪日志文件更新
  ```

- 编辑文件：`vi`、`nano`、`vim`  
  示例：  

  ```bash
  vi file.txt            # 使用 vi 编辑文件
  nano file.txt          # 使用 nano 编辑文件
  ```

##### **文件搜索与查找**  

- 根据文件名查找：`find`  
  示例：  

  ```bash
  find / -name "config*.txt"   # 从根目录开始查找所有以 config 开头的 txt 文件
  ```

- 根据内容搜索：`grep`  
  示例：  

  ```bash
  grep "error" /var/log/syslog   # 在 syslog 文件中查找包含 "error" 的行
  grep -R "function_name" ./     # 在当前目录递归查找包含 "function_name" 的文件
  ```

##### **文件权限与所有者管理**  

- 修改权限：`chmod`  
  示例：  

  ```bash
  chmod 755 script.sh      # 设置文件权限为 rwxr-xr-x
  chmod u+x script.sh      # 仅为当前用户添加可执行权限
  ```

- 修改所有者：`chown` 和 `chgrp`  
  示例：  

  ```bash
  chown user:group file.txt   # 同时修改文件的所有者和所属组
  chown user file.txt         # 修改文件所有者
  chgrp group file.txt        # 修改文件所属组
  ```

---



## 2. 网络管理

### 2.1 网卡相关

#### 网络连接

- **查看网络接口状态**  

  - 命令：`ip link show` 或 `ifconfig`（部分系统可能需要安装 net-tools）  
    示例：  

    ```bash
    ip link show             # 查看所有网络接口的状态
    # 或者
    ifconfig -a              # 显示所有网络接口（包括未激活的）
    ```

- **激活/禁用网络接口**  

  - 使用 `ip` 命令  
    示例：  

    ```bash
    sudo ip link set eth0 up       # 激活 eth0 接口
    sudo ip link set eth0 down     # 禁用 eth0 接口
    ```

- **配置静态 IP 地址**  

  - 示例（临时配置）：  

    ```bash
    sudo ip addr add 192.168.1.100/24 dev eth0
    sudo ip route add default via 192.168.1.1
    ```

- **注意**：永久配置需要修改对应网络管理配置文件（如 `/etc/network/interfaces`、`/etc/sysconfig/network-scripts/ifcfg-eth0` 或 NetworkManager 的配置文件），不同的发行版配置方式不同。

- **查看当前网络连接情况**  

  - 使用 `netstat` 或 `ss` 命令  
    示例：  

    ```bash
    netstat -tulnp     # 列出所有监听中的 TCP/UDP 端口及其对应的进程（需要 root 权限）
    # 或者使用 ss 命令（更快更现代）
    ss -tulnp
    ```

#### ip查询

其实`ifconfig` 就能看到ip信息了

- **查看本机IP地址**  

  - 命令：`ip addr show`  
    示例：  

    ```bash
    ip addr show eth0       # 查看指定接口的 IP 地址信息
    ip addr show            # 查看所有网络接口的 IP 地址信息
    ```

- **查看路由信息**  

  - 命令：`ip route`  
    示例：  

    ```bash
    ip route show           # 查看当前路由表信息
    ```

- **域名解析与网络诊断**  

  - 使用 `ping` 测试网络连通性  
    示例：  

    ```bash
    ping www.google.com
    ```

  - 使用 `traceroute`（或 `tracepath`）追踪网络路径  
    示例：  

    ```bash
    traceroute www.google.com
    # 或者
    tracepath www.google.com
    ```

### 2.2 防火墙

防火墙在服务器管理中扮演着重要的安全角色，不同系统和发行版可能默认使用不同的防火墙工具，如 iptables、ufw（Ubuntu常用）、firewalld（CentOS/RHEL常用）。

#### 查看目前开放端口

- **使用 iptables 查看规则**  
  示例：  

  ```bash
  sudo iptables -L -n -v
  ```

  解释：  

  - `-L` 列出所有规则  
  - `-n` 禁止域名解析，加快显示速度  
  - `-v` 显示详细信息（包括流量统计等）

- **使用 ufw 查看状态（适用于 Ubuntu 系统）**  
  示例：  

  ```bash
  sudo ufw status verbose
  ```

- **使用 firewall-cmd 查看开放端口（适用于 firewalld 系统，如 CentOS 7/8）**  
  示例：  

  ```bash
  sudo firewall-cmd --list-all
  ```

#### 开放指定端口

- **使用 iptables 开放端口**  
  示例（开放 TCP 端口 8080）：  

  ```bash
  sudo iptables -A INPUT -p tcp --dport 8080 -j ACCEPT
  # 保存规则（不同系统保存方法不一样，Ubuntu可能需要使用 iptables-persistent 或编写脚本）
  ```

- **使用 ufw 开放端口**  
  示例：  

  ```bash
  sudo ufw allow 8080/tcp
  sudo ufw reload     # 重新加载规则
  ```

- **使用 firewall-cmd 开放端口**  
  示例：  

  ```bash
  sudo firewall-cmd --zone=public --add-port=8080/tcp --permanent
  sudo firewall-cmd --reload
  ```

#### 关闭指定端口  

- **使用 iptables 关闭端口**  
  示例（关闭 TCP 端口 8080）：  

  ```bash
  sudo iptables -D INPUT -p tcp --dport 8080 -j ACCEPT
  # 或者直接拒绝该端口的访问
  sudo iptables -A INPUT -p tcp --dport 8080 -j DROP
  ```

  **注意**：iptables 规则不会永久生效，重启后会失效。需要保存规则（不同系统保存方式不同）。

- **使用 ufw 关闭端口**  
  示例（关闭 TCP 端口 8080）：  

  ```bash
  sudo ufw deny 8080/tcp
  sudo ufw reload  # 重新加载规则
  ```

  或者直接删除规则：  

  ```bash
  sudo ufw delete allow 8080/tcp
  ```

- **使用 firewall-cmd 关闭端口**  
  示例（关闭 TCP 端口 8080）：  

  ```bash
  sudo firewall-cmd --zone=public --remove-port=8080/tcp --permanent
  sudo firewall-cmd --reload
  ```

---

## 3. 磁盘管理

### 3.1 磁盘空间管理

- **查看磁盘使用情况**  

  - 命令：`df`  
    示例：  

    ```bash
    df -h         # 以人类可读格式显示各文件系统的使用情况
    ```

- **查看目录或文件大小**  

  - 命令：`du`  
    示例：  

    ```bash
    du -sh /var/log    # 显示 /var/log 目录的总大小
    du -h --max-depth=1 /   # 显示根目录下每个子目录的大小
    ```

- **查看磁盘分区和挂载情况**  

  - 命令：`lsblk`  
    示例：  

    ```bash
    lsblk          # 列出所有块设备及其挂载点
    ```

  - 命令：`fdisk -l` 或 `parted -l`  
    示例：  

    ```bash
    sudo fdisk -l
    ```

- **监控磁盘 I/O 状况**  

  - 工具：`iostat`（需要安装 sysstat 软件包）  
    示例：  

    ```bash
    iostat -x 2    # 每2秒刷新一次详细的 I/O 信息
    ```

### 3.2 外部磁盘挂载与卸载

- **挂载外部磁盘**  

  1. **查看设备信息与挂载情况**  

     - 命令：`lsblk` 或 `fdisk -l`  
       示例：  

       ```bash
       lsblk
       
       NAME   MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
       loop0    7:0    0     4K  1 loop /snap/bare/5
       loop1    7:1    0  55.4M  1 loop /snap/core18/2846
       sda      8:0    0 447.1G  0 disk 
       ├─sda1   8:1    0   512M  0 part /boot/efi
       └─sda2   8:2    0 446.6G  0 part /
       sdb      8:16   0  14.6T  0 disk 
       ├─sdb1   8:17   0   3.7T  0 part /data0
       ├─sdb2   8:18   0   3.7T  0 part /data1
       └─sdb3   8:19   0   7.3T  0 part /data2
       ```

  2. **创建挂载点**  
     示例：  

     ```bash
     sudo mkdir -p /mnt/external_disk
     ```

3. **挂载设备（临时挂载，重启失效）**  
   示例（假设设备为 `/dev/sdb1`）：  

   ```bash
   sudo mount /dev/sdb1 /mnt/external_disk
   ```

   - 如果需要指定文件系统类型或挂载选项，可使用：  

     ```bash
     sudo mount -t ext4 -o defaults /dev/sdb1 /mnt/external_disk
     ```

  4. **自动挂载设置（编辑 /etc/fstab）**  
     示例：  

     在 Linux 中，可以通过编辑 `/etc/fstab` 文件来设置开机自动挂载某个硬盘到指定目录。以下是具体步骤：

     **(1)确定硬盘分区信息**

     首先，使用 `lsblk` 或 `fdisk -l` 命令查看硬盘分区信息：

     ```bash
     lsblk
     ```

     或者：

     ```bash
     sudo fdisk -l
     ```

     找到你要挂载的分区，例如 `/dev/sdb1`。

     **(2)获取分区 UUID（推荐）**

     使用 `blkid` 命令查看该分区的 UUID：

     ```bash
     sudo blkid /dev/sdb1
     ```

     示例输出：

     ```
     /dev/sdb1: UUID="12345678-abcd-efgh-ijkl-9876543210" TYPE="ext4"
     ```

     记录下 `UUID` 的值（`12345678-abcd-efgh-ijkl-9876543210`）。

     **(3)创建挂载目录**

     决定要挂载的目录，比如 `/mnt/mydisk`：

     ```bash
     sudo mkdir -p /mnt/mydisk
     ```

     **(4)编辑 `/etc/fstab`**

     使用文本编辑器（如 `vim` 或 `nano`）打开 `/etc/fstab`：

     ```bash
     sudo vi /etc/fstab
     ```

     在文件末尾添加一行（注意，有的磁盘文件系统类型是xfs的，刚才blkid命令可以看到，就把下面ext4改成xfs）：

     ```
     UUID=12345678-abcd-efgh-ijkl-9876543210  /mnt/mydisk  ext4  defaults  0  2
     ```

     - **UUID**：替换为你实际的 UUID（推荐使用 UUID，而非设备路径 `/dev/sdb1`，以防设备名变化）。
     - **/mnt/mydisk**：你要挂载的目录。
     - **ext4**：文件系统类型（如果是 NTFS、xfs、btrfs 等，需修改）。
     - **defaults**：默认挂载选项（`rw,relatime` 等）。
     - 0 2：
       - 第一个 `0`：是否需要 `dump` 备份（一般设为 `0`）。
       - 第二个 `2`：文件系统检查顺序（`/` 根目录通常为 `1`，其他磁盘为 `2`）。

     **(5)测试挂载**

     运行以下命令测试挂载：

     ```bash
     sudo mount -a
     ```

     如果没有报错，则配置正确。

     **(6)重启验证**

     ```bash
     sudo reboot
     ```

     重启后，使用 `df -h` 或 `mount | grep /mnt/mydisk` 检查是否自动挂载成功：

     ```bash
     df -h
     mount | grep /mnt/mydisk
     ```

     这样，每次开机时，系统都会自动挂载该硬盘到指定目录。

     ```bash
     /dev/sdb1   /mnt/external_disk   ext4   defaults   0  2
     ```

     

     **卸载外部磁盘**  

- - 命令：`umount`  
    示例：  

    ```bash
    sudo umount /mnt/external_disk
    # 或者通过设备名卸载
    sudo umount /dev/sdb1
    ```

  - **注意**：卸载前请确保没有进程正在使用挂载目录，可以使用 `lsof /mnt/external_disk` 查看。

---



## 4. 其他问题

看看这里面写了么：[Server Management Notes（作者：abel）](https://blog.abelcode.tech/p/server-management-notes/)