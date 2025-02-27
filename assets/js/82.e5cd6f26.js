(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{303:function(t,e,n){"use strict";n.r(e);var s=n(0),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"sentinel-分布式系统的流量防卫兵"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sentinel-分布式系统的流量防卫兵"}},[t._v("#")]),t._v(" Sentinel 分布式系统的流量防卫兵")]),t._v(" "),n("h2",{attrs:{id:"什么是服务雪崩"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#什么是服务雪崩"}},[t._v("#")]),t._v(" 什么是服务雪崩")]),t._v(" "),n("p",[t._v("在微服务架构中，根据业务来拆分成一个个的服务，服务与服务之间可以通过 "),n("code",[t._v("HTTP/RPC")]),t._v(" 相互调用，在 Spring Cloud 中可以用 "),n("code",[t._v("RestTemplate + LoadBalanceClient")]),t._v(" 和 "),n("code",[t._v("Feign")]),t._v(" 来调用。为了保证其高可用，单个服务通常会集群部署。由于网络原因或者自身的原因，服务并不能保证 100% 可用，如果单个服务出现问题，调用这个服务就会出现线程阻塞，此时若有大量的请求涌入，"),n("code",[t._v("Servlet")]),t._v(" 容器的线程资源会被消耗完毕，导致服务瘫痪。服务与服务之间的依赖性，故障会传播，会对整个微服务系统造成灾难性的严重后果，这就是服务故障的 "),n("strong",[t._v("“雪崩”")]),t._v(" 效应。为了解决这个问题，业界提出了 "),n("strong",[t._v("熔断器模型")]),t._v("。")]),t._v(" "),n("p",[t._v("阿里巴巴开源了 Sentinel 组件，实现了熔断器模式，Spring Cloud 对这一组件进行了整合。在微服务架构中，一个请求需要调用多个服务是非常常见的")]),t._v(" "),n("p",[n("img",{attrs:{src:"/assets/Lusifer201805292246007.png",alt:""}})]),t._v(" "),n("p",[t._v("较底层的服务如果出现故障，会导致连锁故障。当对特定的服务的调用的不可用达到一个阀值熔断器将会被打开")]),t._v(" "),n("p",[n("img",{attrs:{src:"/assets/Lusifer201901080205008.png",alt:""}})]),t._v(" "),n("p",[t._v("熔断器打开后，为了避免连锁故障，通过 "),n("code",[t._v("fallback")]),t._v(" 方法可以直接返回一个固定值。")]),t._v(" "),n("h2",{attrs:{id:"什么是-sentinel"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#什么是-sentinel"}},[t._v("#")]),t._v(" 什么是 Sentinel")]),t._v(" "),n("p",[t._v("随着微服务的流行，服务和服务之间的稳定性变得越来越重要。Sentinel 以流量为切入点，从流量控制、熔断降级、系统负载保护等多个维度保护服务的稳定性。")]),t._v(" "),n("h3",{attrs:{id:"sentinel-的特征"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sentinel-的特征"}},[t._v("#")]),t._v(" Sentinel 的特征")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("丰富的应用场景：")]),t._v(" Sentinel 承接了阿里巴巴近 10 年的双十一大促流量的核心场景，例如秒杀（即突发流量控制在系统容量可以承受的范围）、消息削峰填谷（对于突然到来的大量请求，您可以配置流控规则，以稳定的速度逐步处理这些请求，从而避免流量突刺造成系统负载过高）、集群流量控制、实时熔断下游不可用应用等")]),t._v(" "),n("li",[n("strong",[t._v("完备的实时监控：")]),t._v(" Sentinel 同时提供实时的监控功能。您可以在控制台中看到接入应用的单台机器秒级数据，甚至 500 台以下规模的集群的汇总运行情况")]),t._v(" "),n("li",[n("strong",[t._v("广泛的开源生态：")]),t._v(" Sentinel 提供开箱即用的与其它开源框架 / 库的整合模块，例如与 Spring Cloud、Dubbo、gRPC 的整合。您只需要引入相应的依赖并进行简单的配置即可快速地接入 Sentinel")]),t._v(" "),n("li",[n("strong",[t._v("完善的 SPI 扩展点：")]),t._v(" Sentinel 提供简单易用、完善的 SPI 扩展接口。您可以通过实现扩展接口来快速地定制逻辑。例如定制规则管理、适配动态数据源等")])]),t._v(" "),n("h3",{attrs:{id:"sentinel-的主要特性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sentinel-的主要特性"}},[t._v("#")]),t._v(" Sentinel 的主要特性")]),t._v(" "),n("p",[n("img",{attrs:{src:"/assets/50505538-2c484880-0aaf-11e9-9ffc-cbaaef20be2b.png",alt:""}})]),t._v(" "),n("h3",{attrs:{id:"sentinel-的开源生态"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sentinel-的开源生态"}},[t._v("#")]),t._v(" Sentinel 的开源生态")]),t._v(" "),n("p",[n("img",{attrs:{src:"/assets/46240214-9c72ff80-c3d6-11e8-937a-0cffa1e8dc58.png",alt:""}})]),t._v(" "),n("h3",{attrs:{id:"sentinel-的组成"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sentinel-的组成"}},[t._v("#")]),t._v(" Sentinel 的组成")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("核心库（Java 客户端）：")]),t._v(" 不依赖任何框架 / 库，能够运行于所有 Java 运行时环境，同时对 Dubbo / Spring Cloud 等框架也有较好的支持")]),t._v(" "),n("li",[n("strong",[t._v("控制台（Dashboard）：")]),t._v(" 基于 Spring Boot 开发，打包后可以直接运行，不需要额外的 Tomcat 等应用容器")])])])}),[],!1,null,null,null);e.default=a.exports}}]);