(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{264:function(t,a,s){"use strict";s.r(a);var r=s(0),_=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"spring-boot-常用配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spring-boot-常用配置"}},[t._v("#")]),t._v(" Spring Boot 常用配置")]),t._v(" "),s("h2",{attrs:{id:"概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),s("p",[t._v("本章节主要介绍一下 Spring Boot 中的一些常用配置，比如：自定义 Banner、配置日志、关闭特定的自动配置等。")]),t._v(" "),s("h2",{attrs:{id:"自定义-banner"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义-banner"}},[t._v("#")]),t._v(" 自定义 Banner")]),t._v(" "),s("p",[t._v("在 Spring Boot 启动的时候会有一个默认的启动图案")]),t._v(" "),s("pre",[s("code",[t._v("  .   ____          _            __ _ _\n /\\\\ / ___'_ __ _ _(_)_ __  __ _ \\ \\ \\ \\\n( ( )\\___ | '_ | '_| | '_ \\/ _` | \\ \\ \\ \\\n \\\\/  ___)| |_)| | | | | || (_| |  ) ) ) )\n  '  |____| .__|_| |_|_| |_\\__, | / / / /\n =========|_|==============|___/=/_/_/_/\n :: Spring Boot ::        (v2.1.6.RELEASE)\n")])]),t._v(" "),s("p",[t._v("我们在 "),s("code",[t._v("src/main/resources")]),t._v(" 目录下新建一个 banner.txt")]),t._v(" "),s("p",[t._v("通过 "),s("a",{attrs:{href:"http://patorjk.com/software/taag",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://patorjk.com/software/taag"),s("OutboundLink")],1),t._v(" 网站生成字符串，将网站生成的字符复制到 banner.txt 中")]),t._v(" "),s("p",[t._v("再次运行这个程序")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("${AnsiColor.BRIGHT_RED}\n////////////////////////////////////////////////////////////////////\n//                          _ooOoo_                               //\n//                         o8888888o                              //\n//                         88\" . \"88                              //\n//                         (| ^_^ |)                              //\n//                         O\\  =  /O                              //\n//                      ____/`---'\\____                           //\n//                    .'  \\\\|     |//  `.                         //\n//                   /  \\\\|||  :  |||//  \\                        //\n//                  /  _||||| -:- |||||-  \\                       //\n//                  |   | \\\\\\  -  /// |   |                       //\n//                  | \\_|  ''\\---/''  |   |                       //\n//                  \\  .-\\__  `-`  ___/-. /                       //\n//                ___`. .'  /--.--\\  `. . ___                     //\n//              .\"\" '<  `.___\\_<|>_/___.'  >'\"\".                  //\n//            | | :  `- \\`.;`\\ _ /`;.`/ - ` : | |                 //\n//            \\  \\ `-.   \\_ __\\ /__ _/   .-` /  /                 //\n//      ========`-.____`-.___\\_____/___.-`____.-'========         //\n//                           `=---='                              //\n//      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^        //\n//            佛祖保佑       永不宕机     永无BUG                  //\n////////////////////////////////////////////////////////////////////\n")])])]),s("p",[t._v("常用属性设置：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("${AnsiColor.BRIGHT_RED}")]),t._v("：设置控制台中输出内容的颜色")]),t._v(" "),s("li",[s("code",[t._v("${application.version}")]),t._v("：用来获取 "),s("code",[t._v("MANIFEST.MF")]),t._v(" 文件中的版本号")]),t._v(" "),s("li",[s("code",[t._v("${application.formatted-version}")]),t._v("：格式化后的 "),s("code",[t._v("${application.version}")]),t._v(" 版本信息")]),t._v(" "),s("li",[s("code",[t._v("${spring-boot.version}")]),t._v("：Spring Boot 的版本号")]),t._v(" "),s("li",[s("code",[t._v("${spring-boot.formatted-version}")]),t._v("：格式化后的 "),s("code",[t._v("${spring-boot.version}")]),t._v(" 版本信息")])]),t._v(" "),s("h2",{attrs:{id:"配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[t._v("#")]),t._v(" 配置文件")]),t._v(" "),s("p",[t._v("Spring Boot 项目使用一个全局的配置文件 "),s("code",[t._v("application.properties")]),t._v(" 或者是 "),s("code",[t._v("application.yml")]),t._v("，在 "),s("code",[t._v("resources")]),t._v(" 目录下或者类路径下的 "),s("code",[t._v("/config")]),t._v(" 下，一般我们放到 "),s("code",[t._v("resources")]),t._v(" 下。")]),t._v(" "),s("p",[t._v('修改 Tomcat 的端口为 9090，并将默认的访问路径 "/" 修改为 "boot"，可以在 '),s("code",[t._v("application.properties")]),t._v(" 中添加：")]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("server.port")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("9090")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("server.context-path")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("/boot")]),t._v("\n")])])]),s("p",[t._v("或在 application.yml 中添加：")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("server")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9090")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("context-path")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /boot\n")])])]),s("p",[t._v("测试效果：")]),t._v(" "),s("p",[s("img",{attrs:{src:"/assets/Lusifer1509896204.png",alt:""}})]),t._v(" "),s("p",[s("a",{attrs:{href:"https://docs.spring.io/spring-boot/docs/2.0.2.RELEASE/reference/html/common-application-properties.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("更多配置"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"starter-pom"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#starter-pom"}},[t._v("#")]),t._v(" Starter POM")]),t._v(" "),s("p",[t._v("Spring Boot 为我们提供了简化企业级开发绝大多数场景的 starter pom ，只要使用了应用场景所需要的 starter pom ，相关的技术配置将会消除，就可以得到 Spring Boot 为我们提供的自动配置的 Bean。")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://docs.spring.io/spring-boot/docs/2.0.2.RELEASE/reference/html/using-boot-build-systems.html#using-boot-starter",target:"_blank",rel:"noopener noreferrer"}},[t._v("更多 Starter POM"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"日志配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#日志配置"}},[t._v("#")]),t._v(" 日志配置")]),t._v(" "),s("p",[t._v("Spring Boot 对各种日志框架都做了支持，我们可以通过配置来修改默认的日志的配置")]),t._v(" "),s("p",[t._v("默认情况下，Spring Boot 使用 Logback 作为日志框架")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("logging")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("file")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ../logs/spring"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("boot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("hello.log\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("level.org.springframework.web")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DEBUG\n")])])]),s("h2",{attrs:{id:"关闭特定的自动配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关闭特定的自动配置"}},[t._v("#")]),t._v(" 关闭特定的自动配置")]),t._v(" "),s("p",[t._v("关闭特定的自动配置使用 "),s("code",[t._v("@SpringBootApplication")]),t._v(" 注解的 "),s("code",[t._v("exclude")]),t._v(" 参数即可，这里以关闭数据源的自动配置为例")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@SpringBootApplication")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("exclude "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DataSourceAutoConfiguration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=_.exports}}]);