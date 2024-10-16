+++
title = '使用hfd通过镜像下载hugging Face上的模型'
date = 2024-10-07T09:45:10+08:00
draft = false

tags=["技术"]

showSummary=true

Summary="本次主要记录下载 Llama-3.2-11B-Vision-Instruct的过程，这个仓库还有访问限制，应该比较有代表性。"

+++

由于一些不可抗力，童鞋们在下载huggingface上的模型时可能面临无法下载、速度贼慢等问题，这时候就需要使用一些国内的镜像站进行下载，比如[HF-Mirror](https://hf-mirror.com/)。

<img src="pic/image-20241007094857550.png" alt="image-20241007094857550" style="zoom:33%;" />

[HF-Mirror](https://hf-mirror.com/)官网给出了几种下载的方法，我试了几种，感觉`hfd`还比较好用，**[hfd](https://gist.github.com/padeoe/697678ab8e528b85a2a7bddafea1fa4f)** 是[HF-Mirror](https://hf-mirror.com/)开发的 huggingface 专用下载工具，基于成熟工具 `git+aria2`，据说可以做到稳定下载不断线（其实我下载时还是断线了……）。

本次主要记录下载 `meta-llama/Llama-3.2-11B-Vision-Instruct` 的过程，这个仓库还有访问限制，应该比较有代表性。



## 1. 获取Access Token

先进入hf主站的token设置页面（当然你首先得有一个hf主站的账号密码）：[Hugging Face – The AI community building the future.](https://huggingface.co/settings/tokens)

添加一个新的`access token`

![image-20241007100045356](pic/image-20241007100045356.png)

设置一个名字，把能勾选的都勾选上，点击`create token`按钮生成密钥`hf-****`，复制下来备用。



另外，有的模型需要单独申请下载（比如llama系列模型），需要在相关仓库中填写表单申请通过后才能下载。



## 2. 下载并配置hfd

下载hfd脚本：

```sh
wget https://hf-mirror.com/hfd/hfd.sh
```



还需要安装`aria2c`下载器，如果是linux系统，使用：

```sh
apt install  aria2c git-lfs
```

如果是Windows系统，在cmd中使用:

```sh
winget install aria2
```



## 3.下载模型

`hfd.sh`脚本在linux系统下应该可以直接运行，可能需要添加一下执行权限`chmod a+x hfd.sh`。

windows系统可以在`git bash`中执行sh脚本。



如果你的git设置过代理，可能需要先把代理解除掉

查看git代理设置：

```sh
git config --global --get http.proxy
git config --global --get https.proxy
```

git解除代理绑定

```sh
git config --global --unset http.proxy
git config --global --unset https.proxy
```



一切准备就绪后，可以直接下载：

```sh
HF_ENDPOINT=https://hf-mirror.com  ./hfd.sh <hf模型路径> --hf_username <hf主站的用户名> --hf_token <第一步获取的access token>
```



* hf模型路径可看链接获取：![image-20241007193334597](pic/image-20241007193334597.png)
* hf用户名点击主站头像即可查看：![image-20241007193405334](pic/image-20241007193405334.png)



示例：

```sh
HF_ENDPOINT=https://hf-mirror.com  ./hfd.sh meta-llama/Llama-3.2-11B-Vision-Instruct --hf_username Hugging-Leg --hf_token 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
```

