+++
title = '为GitHub设置SSH Key'
date = 2024-06-05T19:48:08+08:00
draft = false

tags=["技术","建站"]

series = ["博客搭建"]
series_order=2

+++

在2022年后，没有SSH-Key无法通过SSH直接上传文件到仓库，故需要在本地生成SSH-Key上传到github。一般来说，一台设备只需要一个SSH-Key。下面是对Github官方文档的整合。

## 1. 生成SSH-Key

步骤参见：[生成新的 SSH 密钥并将其添加到 ssh-agent - GitHub 文档](https://docs.github.com/zh/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

1. 打开Git Bash。

2. 粘贴以下文本，将示例中使用的电子邮件替换为 GitHub 电子邮件地址。

   ```shell
   ssh-keygen -t ed25519 -C "h******@163.com"
   ```

   注意：如果你使用的是不支持 Ed25519 算法的旧系统，请使用以下命令：

   ```shell
    ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
   ```

   这将以提供的电子邮件地址为标签创建新 SSH 密钥。

   ```shell
   > Generating public/private ALGORITHM key pair.
   ```

   当系统提示您“Enter a file in which to save the key（输入要保存密钥的文件）”时，可以按 Enter 键接受默认文件位置。 请注意，如果以前创建了 SSH 密钥，则 ssh-keygen 可能会要求重写另一个密钥，在这种情况下，我们建议创建自定义命名的 SSH 密钥。 为此，请键入默认文件位置，并将 id_ALGORITHM 替换为自定义密钥名称。

   ```powershell
   > Enter file in which to save the key (/c/Users/YOU/.ssh/id_ALGORITHM):[Press enter]
   ```

3. 在提示符下，键入安全密码。 有关详细信息，请参阅“[使用 SSH 密钥密码](https://docs.github.com/zh/authentication/connecting-to-github-with-ssh/working-with-ssh-key-passphrases)”。

   ```shell
   > Enter passphrase (empty for no passphrase): [Type a passphrase]
   > Enter same passphrase again: [Type passphrase again]
   ```

**示例**

```bash
$ ssh-keygen -t ed25519 -C "h*****@163.com"
Generating public/private ed25519 key pair.
Enter file in which to save the key (/c/Users/***/.ssh/id_ed25519):
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /c/Users/***/.ssh/id_ed25519
Your public key has been saved in /c/Users/***/.ssh/id_ed25519.pub
The key fingerprint is:
SHA256:fN*******/c********6/b*******************Zo h*****@163.com
The key's randomart image is:
+--[ED25519 256]--+
|             *   |
|            *****|
|            **** |
|       **********|
|       **********|
|        *********|
|          *******|
|           ******|
|            *****|
+----[SHA256]-----+

```



## 2. 添加 SSH Key 到 ssh-agent

在向 ssh 代理添加新的 SSH 密钥以管理您的密钥之前，您应该检查现有 SSH 密钥并生成新的 SSH 密钥。一般一个电脑对应一个密钥就行了。

如果已安装 [GitHub Desktop](https://desktop.github.com/)，可使用它克隆存储库，而无需处理 SSH 密钥。

1. 在以**管理员身份运行** `PowerShell` 窗口中，确保 ssh-agent 正在运行。 可以使用“[使用 SSH 密钥密码](https://docs.github.com/zh/articles/working-with-ssh-key-passphrases)”中的“自动启动 ssh agent”说明，或者手动启动它：

   ```powershell
   # start the ssh-agent in the background
   Get-Service -Name ssh-agent | Set-Service -StartupType Manual
   Start-Service ssh-agent
   ```

2. 在无提升权限的终端窗口中，将 SSH 私钥添加到 ssh-agent。 如果使用其他名称创建了密钥，或要添加具有其他名称的现有密钥，请将命令中的 *id_ed25519* 替换为私钥文件的名称。

   ```powershell
   ssh-add /c/Users/***/.ssh/id_ed25519
   ```

   {{< alert >}}
   P.S.如果你的路径中有中文而输入的时候一直显示乱码并提示`No such file or directory`，那就使用`cd`命令进入那个目录再运行

   ```powershell
   ssh-add id_ed25519
   ```

   {{< /alert >}}

   输入刚才设置的密码即可。

   



## 3. 将SSH-Key上传到Github

参考：[新增 SSH 密钥到 GitHub 帐户 - GitHub 文档](https://docs.github.com/zh/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)

可以添加 SSH 密钥并将其用于身份验证或提交签名，或同时用于这两个目的。 如果要使用相同的 SSH 密钥进行身份验证和签名，则需要将其上传两次。

1. 将 SSH 公钥复制到剪贴板。

   如果您的 SSH 公钥文件与示例代码不同，请修改文件名以匹配您当前的设置。 在复制密钥时，请勿添加任何新行或空格。

```shell
$ clip < ~/.ssh/id_ed25519.pub
# Copies the contents of the id_ed25519.pub file to your clipboard
```

> **注意：**
>
> - 对于适用于 Linux 的 Windows 子系统 (WSL)，可以使用 `clip.exe`。 如果 `clip` 不起作用，你可以找到隐藏的 `.ssh` 文件夹，在你最喜欢的文本编辑器中打开该文件，并将其复制到剪贴板。
>
> - 在使用 Windows 终端的较新版本 Windows 中，或者在使用 PowerShell 命令行的任何其他位置，可能会收到一条 `ParseError`，表示 `The '<' operator is reserved for future use.`。在这种情况下，应使用以下替代 `clip` 命令：
>
>   ```powershell
>   $ cat ~/.ssh/id_ed25519.pub | clip
>   # Copies the contents of the id_ed25519.pub file to your clipboard
>   ```



1. 在任何页面的右上角，单击个人资料照片，然后单击“设置”。

   

   <img src="pic/userbar-account-settings-global-nav-update.png" alt="Screenshot of a user's account menu on GitHub. The menu item &quot;Settings&quot; is outlined in dark orange." style="zoom: 40%;" />

   

2. 在边栏的“访问”部分中，单击 “SSH 和 GPG 密钥”。

3. 单击“新建 SSH 密钥”或“添加 SSH 密钥” 。

4. 在 "Title"（标题）字段中，为新密钥添加描述性标签。 例如，如果使用的是个人笔记本电脑，则可以将此密钥称为“个人笔记本电脑”。

5. 选择密钥类型（身份验证或签名）。**一般Key Type选择 `Authentication Key`即可**， 有关提交签名的详细信息，请参阅“[关于提交签名验证](https://docs.github.com/zh/authentication/managing-commit-signature-verification/about-commit-signature-verification)”。

6. 在“密钥”字段中，粘贴公钥。

7. 单击“添加 SSH 密钥”。

8. 如果出现提示，请确认你的帐户是否拥有 GitHub 访问权限。 有关详细信息，请参阅“[Sudo 模式](https://docs.github.com/zh/authentication/keeping-your-account-and-data-secure/sudo-mode)”。

```bash
ssh-keyscan github.com >> ~/.ssh/known_hosts
```

