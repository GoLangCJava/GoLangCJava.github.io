(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{218:function(s,t,a){"use strict";a.r(t);var r=a(0),e=Object(r.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"docker-compose-部署-gitlab"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-部署-gitlab"}},[s._v("#")]),s._v(" Docker Compose 部署 GitLab")]),s._v(" "),a("h2",{attrs:{id:"什么是-gitlab"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-gitlab"}},[s._v("#")]),s._v(" 什么是 GitLab")]),s._v(" "),a("p",[s._v("GitLab 是利用 Ruby on Rails 一个开源的版本管理系统，实现一个自托管的 Git 项目仓库，可通过 Web 界面进行访问公开的或者私人项目。它拥有与 Github 类似的功能，能够浏览源代码，管理缺陷和注释。可以管理团队对仓库的访问，它非常易于浏览提交过的版本并提供一个文件历史库。团队成员可以利用内置的简单聊天程序 (Wall) 进行交流。它还提供一个代码片段收集功能可以轻松实现代码复用，便于日后有需要的时候进行查找。")]),s._v(" "),a("h2",{attrs:{id:"部署-gitlab"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署-gitlab"}},[s._v("#")]),s._v(" 部署 GitLab")]),s._v(" "),a("p",[s._v("我们使用 Docker 来安装和运行 GitLab 中文版，"),a("code",[s._v("docker-compose.yml")]),s._v(" 配置如下：")]),s._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("web")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'twang2218/gitlab-ce-zh'")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" always\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("hostname")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'192.168.75.145'")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("TZ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Asia/Shanghai'")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("GITLAB_OMNIBUS_CONFIG")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token scalar string"}},[s._v("\n          external_url 'http://192.168.75.145'\n          gitlab_rails['gitlab_shell_ssh_port'] = 2222\n          unicorn['port'] = 8888\n          nginx['listen_port'] = 80")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'80:80'")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'443:443'")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2222:22'")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/etc/gitlab\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/var/opt/gitlab\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./logs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/var/log/gitlab\n")])])]),a("h2",{attrs:{id:"配置-gitlab"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-gitlab"}},[s._v("#")]),s._v(" 配置 GitLab")]),s._v(" "),a("ul",[a("li",[s._v("访问地址：http://ip:8080")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/assets/Lusifer1511797825.png",alt:""}})]),s._v(" "),a("ul",[a("li",[s._v("设置管理员初始密码，这里的密码最好是 "),a("strong",[s._v("字母 + 数字组合，并且大于等于 8 位")])]),s._v(" "),a("li",[s._v("配置完成后登录，管理员账号是 "),a("strong",[s._v("root")])])]),s._v(" "),a("p",[a("img",{attrs:{src:"/assets/Lusifer1511798229.png",alt:""}})]),s._v(" "),a("blockquote",[a("p",[a("strong",[s._v("注意：")]),s._v(" 如果服务器配置较低，启动运行可能需要较长时间，请耐心等待")])]),s._v(" "),a("h2",{attrs:{id:"设置-gitlab"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置-gitlab"}},[s._v("#")]),s._v(" 设置 GitLab")]),s._v(" "),a("p",[s._v("第一次使用时可以做一些初始化设置，点击 "),a("strong",[s._v("管理区域")]),s._v(" -> "),a("strong",[s._v("设置")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/assets/Lusifer1511798480.png",alt:""}})]),s._v(" "),a("ul",[a("li",[s._v("关闭头像功能，由于 Gravatar 头像为网络头像，在网络情况不理想时可能导致访问时卡顿")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/assets/Lusifer1511798637.png",alt:""}})]),s._v(" "),a("ul",[a("li",[s._v("由于是内部代码托管服务器，可以直接关闭注册功能，由管理员统一创建用户即可")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/assets/Lusifer1511798763.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"账户管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#账户管理"}},[s._v("#")]),s._v(" 账户管理")]),s._v(" "),a("p",[s._v("使用时请不要直接通过 root 用户操作，需要先创建用户，然后通过创建的用户操作，如果你是管理员还需要为其他开发人员分配账户")]),s._v(" "),a("ul",[a("li",[s._v("创建账户，点击 "),a("strong",[s._v("管理区域")]),s._v(" -> "),a("strong",[s._v("新建用户")])])]),s._v(" "),a("p",[a("img",{attrs:{src:"/assets/Lusifer1511799413.png",alt:""}})]),s._v(" "),a("ul",[a("li",[s._v("设置账户信息，同时你可以将自己设置为管理员")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/assets/Lusifer1511799508.png",alt:""}})]),s._v(" "),a("ul",[a("li",[s._v("修改用户密码，由于我们创建时并没有配置邮箱，所以还需要重新编辑用户信息并手动设置密码")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/assets/Lusifer1511799858.png",alt:""}})]),s._v(" "),a("p",[a("img",{attrs:{src:"/assets/Lusifer1511799897.png",alt:""}})]),s._v(" "),a("ul",[a("li",[s._v("退出并使用新账户登录")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/assets/Lusifer1511800022.png",alt:""}})]),s._v(" "),a("blockquote",[a("p",[a("strong",[s._v("注意：")]),s._v(" 创建完账户，第一次登录时还会提示你修改登录密码")])]),s._v(" "),a("h2",{attrs:{id:"项目管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目管理"}},[s._v("#")]),s._v(" 项目管理")]),s._v(" "),a("ul",[a("li",[s._v("点击 "),a("strong",[s._v("+")]),s._v(" 号 -> "),a("strong",[s._v("新建项目")])])]),s._v(" "),a("p",[a("img",{attrs:{src:"/assets/Lusifer1511800438.png",alt:""}})]),s._v(" "),a("ul",[a("li",[s._v("输入项目名称及描述信息，设置可见等级为私有，这样别人就看不见你的项目")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/assets/Lusifer1511800627.png",alt:""}})]),s._v(" "),a("ul",[a("li",[s._v("我们选择通过增加一个 README 的方式来初始化项目")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/assets/Lusifer1511800836.png",alt:""}})]),s._v(" "),a("ul",[a("li",[s._v("直接提交修改即可")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/assets/Lusifer1511800904.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"使用-ssh-方式拉取和推送"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-ssh-方式拉取和推送"}},[s._v("#")]),s._v(" 使用 SSH 方式拉取和推送")]),s._v(" "),a("h3",{attrs:{id:"生成-ssh-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成-ssh-key"}},[s._v("#")]),s._v(" 生成 SSH KEY")]),s._v(" "),a("ul",[a("li",[s._v("使用 ssh-keygen 工具生成，位置在 Git 安装目录下，我的是 "),a("code",[s._v("C:\\Program Files\\Git\\usr\\bin")]),s._v("，输入命令：")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("ssh-keygen -t rsa -C "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"your_email@example.com"')]),s._v("\n")])])]),a("ul",[a("li",[s._v("执行成功后的效果：")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('Microsoft Windows [版本 10.0.14393]\n(c) 2016 Microsoft Corporation。保留所有权利。\n\nC:\\Program Files\\Git\\usr\\bin>ssh-keygen -t rsa -C "topsale@vip.qq.com"\nGenerating public/private rsa key pair.\nEnter file in which to save the key (/c/Users/Lusifer/.ssh/id_rsa):\nEnter passphrase (empty for no passphrase):\nEnter same passphrase again:\nYour identification has been saved in /c/Users/Lusifer/.ssh/id_rsa.\nYour public key has been saved in /c/Users/Lusifer/.ssh/id_rsa.pub.\nThe key fingerprint is:\nSHA256:cVesJKa5VnQNihQOTotXUAIyphsqjb7Z9lqOji2704E topsale@vip.qq.com\nThe key\'s randomart image is:\n+---[RSA 2048]----+\n|  + ..=o=.  .+.  |\n| o o + B .+.o.o  |\n|o   . + +=o+..   |\n|.=   .  oo...    |\n|= o     So       |\n|oE .    o        |\n| .. .. .         |\n| o*o+            |\n| *B*oo           |\n+----[SHA256]-----+\n\nC:\\Program Files\\Git\\usr\\bin>\n')])])]),a("h3",{attrs:{id:"复制-ssh-key-信息到-gitlab"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复制-ssh-key-信息到-gitlab"}},[s._v("#")]),s._v(" 复制 SSH-KEY 信息到 GitLab")]),s._v(" "),a("ul",[a("li",[s._v("密钥位置在："),a("code",[s._v("C:\\Users\\你的用户名\\.ssh")]),s._v(" 目录下，找到 "),a("code",[s._v("id_rsa.pub")]),s._v(" 并使用编辑器打开，如：")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/assets/Lusifer1511801618.png",alt:""}})]),s._v(" "),a("ul",[a("li",[s._v("登录 GitLab，点击“用户头像”--\x3e“设置”--\x3e“SSH 密钥”")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/assets/Lusifer1511801730.png",alt:""}})]),s._v(" "),a("ul",[a("li",[s._v("成功增加密钥后的效果")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/assets/Lusifer1511801884.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"使用-tortoisegit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-tortoisegit"}},[s._v("#")]),s._v(" 使用 TortoiseGit")]),s._v(" "),a("h3",{attrs:{id:"克隆项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#克隆项目"}},[s._v("#")]),s._v(" 克隆项目")]),s._v(" "),a("ul",[a("li",[s._v("新建一个存放代码仓库的本地文件夹")]),s._v(" "),a("li",[s._v("在文件夹空白处按右键")]),s._v(" "),a("li",[s._v("选择 "),a("strong",[s._v("Git 克隆...")])])]),s._v(" "),a("p",[a("img",{attrs:{src:"/assets/Lusifer1511802101.png",alt:""}})]),s._v(" "),a("ul",[a("li",[s._v("复制项目地址到 URL")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/assets/Lusifer1511802242.png",alt:""}})]),s._v(" "),a("ul",[a("li",[s._v("如果弹出连接信息请选择是")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/assets/Lusifer1511802354.png",alt:""}})]),s._v(" "),a("ul",[a("li",[s._v("成功克隆项目到本地")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/assets/Lusifer1511802402.png",alt:""}})]),s._v(" "),a("h3",{attrs:{id:"推送项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#推送项目"}},[s._v("#")]),s._v(" 推送项目")]),s._v(" "),a("ul",[a("li",[s._v("创建或修改文件（这里的文件为所有文件，包括：代码、图片等）")]),s._v(" "),a("li",[s._v("我们以创建 "),a("code",[s._v(".gitignore")]),s._v(" 过滤配置文件为例，该文件的主要作用为过滤不需要上传的文件，比如：IDE 生成的工程文件、编译后的 class 文件等")]),s._v(" "),a("li",[s._v("在工程目录下，新建 "),a("code",[s._v(".gitignore")]),s._v(" 文件，并填入如下配置")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("target/\n!.mvn/wrapper/maven-wrapper.jar\n\n## STS ##\n.apt_generated\n.classpath\n.factorypath\n.project\n.settings\n.springBeans\n\n## IntelliJ IDEA ##\n.idea\n*.iws\n*.iml\n*.ipr\n\n## JRebel ##\nrebel.xml\n\n## MAC ##\n.DS_Store\n\n## Other ##\nlogs/\ntemp/\n")])])]),a("ul",[a("li",[s._v("右键呼出菜单，选择 "),a("strong",[s._v("提交 Master...")])])]),s._v(" "),a("p",[a("img",{attrs:{src:"/assets/Lusifer1511802947.png",alt:""}})]),s._v(" "),a("ul",[a("li",[s._v("点击 "),a("strong",[s._v("全部")]),s._v(" 并填入 "),a("strong",[s._v("日志信息")])])]),s._v(" "),a("p",[a("img",{attrs:{src:"/assets/Lusifer1511803046.png",alt:""}})]),s._v(" "),a("ul",[a("li",[s._v("点击 "),a("strong",[s._v("提交并推送")])])]),s._v(" "),a("p",[a("img",{attrs:{src:"/assets/Lusifer1511803174.png",alt:""}})]),s._v(" "),a("ul",[a("li",[s._v("成功后的效果图")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/assets/Lusifer1511803209.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"查看-gitlab-确认提交成功"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看-gitlab-确认提交成功"}},[s._v("#")]),s._v(" 查看 GitLab 确认提交成功")]),s._v(" "),a("p",[a("img",{attrs:{src:"/assets/Lusifer1511803280.png",alt:""}})])])}),[],!1,null,null,null);t.default=e.exports}}]);