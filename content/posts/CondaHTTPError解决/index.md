+++
title = 'CondaHTTPError: HTTP 000 CONNECTION FAILED for url的问题解决'
date = 2024-06-12T16:11:34+08:00
draft = false

tags=["技术","服务器","环境配置"]

+++

## 报错示例

```bash
Fetching package metadata ...
CondaHTTPError: HTTP 000 CONNECTION FAILED for url <https://repo.continuum.io/pkgs/main/linux-64/repodata.json.bz2>
Elapsed: -

An HTTP error occurred when trying to retrieve this URL.
HTTP errors are often intermittent, and a simple retry will get you on your way.
SSLError(MaxRetryError('HTTPSConnectionPool(host=\'repo.anaconda.com\', port=443): Max retries exceeded with url: /pkgs/main/linux-64/repodata.json.bz2 (Caused by SSLError(SSLError("bad handshake: Error([(\'SSL routines\', \'ssl3_get_server_certificate\', \'certificate verify failed\')],)",),))',),)

```

总之就是网络连接问题，可以按照下面步骤逐步排查

## 1. 网络问题

 首先确认你的电脑或服务器可以连网：

```bash
 curl -I https://www.baidu.com
```

下面是一个网络联通的返回示例，否则就要检查你的网络连接

```bash
HTTP/1.1 200 OK
Accept-Ranges: bytes
Cache-Control: no-cache
Connection: keep-alive
Content-Length: 227
Content-Security-Policy: frame-ancestors 'self' https://chat.baidu.com http://mirror-chat.baidu.com https://fj-chat.baidu.com https://hba-chat.baidu.com https://hbe-chat.baidu.com https://njjs-chat.baidu.com https://nj-chat.baidu.com https://hna-chat.baidu.com https://hnb-chat.baidu.com http://debug.baidu-int.com;
Content-Type: text/html
Date: Thu, 20 Jun 2024 07:48:56 GMT
Pragma: no-cache
Server: BWS/1.1
Set-Cookie: BD_NOT_HTTPS=1; path=/; Max-Age=300
Set-Cookie: PSTM=1718869736; expires=Thu, 31-Dec-37 23:55:55 GMT; max-age=2147483647; path=/; domain=.baidu.com
Set-Cookie: BAIDUID=DFDB30F27E4DAB2EEA37ED70BE16DD86:FG=1; Path=/; Domain=baidu.com; Max-Age=31536000
Set-Cookie: BAIDUID_BFESS=DFDB30F27E4DAB2EEA37ED70BE16DD86:FG=1; Path=/; Domain=baidu.com; Max-Age=31536000; Secure; SameSite=None
Traceid: 1718869736282151399411655385938091250512
X-Ua-Compatible: IE=Edge,chrome=1
X-Xss-Protection: 1;mode=block
```



## 2. 数据源问题

执行以下命令可以查看当前conda的数据源。

```bash
conda config --get channels
```

如果只有默认数据源，可能出现下载速度慢或无法连接问题，可以添加清华源：

```bash
conda config --add channels http://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/
conda config --add channels http://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/
conda config --add channels http://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forge/
conda config --add channels http://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/msys2/
conda config --set show_channel_urls yes
```

**注意这里清华镜像源推荐使用http，而不是https，否则还有可能会报HTTP 000 CONNECTION FAILED的错误。**

如果你已经添加了https的数据源，可以通过以下两种方式补救（任选其一即可）：

1. 删除现有数据源并重新添加：

   ```bash
   conda config --remove channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/
   conda config --remove channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/
   ...
   ```

   如果在添加http源后还是无法连接，尝试关闭SSL验证。

2. 关闭SSL验证：

   在命令行中输入

   ```bash
   conda config --set ssl_verify false
   ```

   修改设置，或者在文件`~/.condarc`末尾添加一行`ssl_verify: false`（有则修改即可）



## 参考

[Conda创建环境失败：CondaHTTPError: HTTP 000 CONNECTION FAILED-CSDN博客](https://blog.csdn.net/sinat_38079265/article/details/121163019)

[清华源连接失败原因与解决 CondaHTTPError SSLError_连接镜像源时发生了 ssl 错误-CSDN博客](https://blog.csdn.net/kxqt233/article/details/121167753)
