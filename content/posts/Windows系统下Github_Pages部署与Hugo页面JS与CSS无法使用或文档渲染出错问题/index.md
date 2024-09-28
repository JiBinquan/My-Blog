+++
title = 'Windows系统下Github_Pages部署Hugo页面JS与CSS无法使用或文档渲染出错问题'
date = 2024-06-06T09:29:34+08:00
draft = false

tags=["技术","前端","建站"]

series = ["博客搭建"]
series_order=3

showSummary=true

Summary="这个自以为是博客部署时遇到的最大的一个坑…默认设置公式排版直接爆炸"

+++

## 换行符替换导致的 JS/CSS 无法使用或文档渲染出错问题

 在使用git部署到Github仓库时，`git bash` 给我返回了这么个警告：

```bash
warning: in the working copy of 'posts/补档eoj4329/index.html', LF will be repla
ced by CRLF the next time Git touches it
```

我没注意，结果部署上去后，公式渲染出大问题……（忘截图了，反正就是单行公式的渲染及其离谱，一行渲染一行原代码那种，根号飞到天上去了）

究其原因，是Git 在不同的操作系统上使用时，可能会遇到文件换行符格式不一致的问题。

为了保持跨平台的一致性，Git 有一个配置项叫 `core.autocrlf`，用于自动转换换行符。

- `core.autocrlf` 设为 `true` 时，Git 会在检出文件时将 LF 转换为 CRLF，在提交时将 CRLF 转换为 LF。
- `core.autocrlf` 设为 `input` 时，Git 只在提交时将 CRLF 转换为 LF，但在检出时不会做任何转换。
- `core.autocrlf` 设为 `false` 时，Git 不会进行任何换行符转换。

而LF (`\n`) 是 Unix 和 Unix-like 系统（如 Linux 和 macOS）使用的换行符，CRLF (`\r\n`) 是 Windows 系统使用的换行符。如果没有特殊设置，`core.autocrlf`一般是`true`。那么在你的Windows 系统中，你文件中的LF就会被“贴心的”换成CRLF，于是你本地渲染的好好的一上传就变了样了。

**解决方法：**

删除github上现有的`.github.io`的仓库，重新创建仓库。

本地目录下，删除`public`目录下的`.git`目录。

重新执行

```bash
git init -b main
```

{{< alert >}}之后，关键的来了，多执行一步{{< /alert >}}

```bash
git config core.autocrlf false
```

保证`git`在上传时不会替换换行的格式。

之后正常部署即可

```bash
git remote add origin git@github.com:JiBinquan/JiBinquan.github.io.git
git pull --rebase origin main
git add .
git commit -m "FST"
git push origin main
```



