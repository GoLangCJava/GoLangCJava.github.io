(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{275:function(e,t,a){"use strict";a.r(t);var r=a(0),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"微服务解决复杂问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#微服务解决复杂问题"}},[e._v("#")]),e._v(" 微服务解决复杂问题")]),e._v(" "),a("h2",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[e._v("#")]),e._v(" 概述")]),e._v(" "),a("p",[e._v("许多如 Amazon、 eBay 和 Netflix 这样的组织，已经采用现在所谓的微服务架构模式解决了这个问题，而不是构建一个臃肿的单体应用。它的思路是将应用程序分解成一套较小的互连服务。一个服务通常实现了一组不同的特性或功能，例如订单管理、客户管理等。每一个微服务都是一个迷你应用，它自己的六边形架构包括了业务逻辑以及多个适配器。")]),e._v(" "),a("p",[e._v("一些微服务会暴露一个供其他微服务或应用客户端消费的 API。其他微服务可能实现了一个 web UI。在运行时，每个实例通常是一个云虚拟机 (virtual machine， VM) 或者一个 Docker 容器。")]),e._v(" "),a("p",[e._v("例如，前面描述的系统可能分解成如下图（一个单体应用分解成微服务) 所示：")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/858f9ae6c861c8c93cd5379be54f9fc1.png",alt:""}})]),e._v(" "),a("p",[e._v("应用程序的每个功能区域现在都由自己的微服务实现。此外，Web 应用程序被划分为一组更简单的 Web 应用程序。例如，以我们的出租车为例，一个是乘客的应用，一个是司机的应用。这使得它更容易地为特定的用户、司机、设备或者专门的用例部署不同的场景。每个后端服务暴露一个 REST API，大部分服务消费的 API 由其他服务提供。例如， Driver Management 使用了 Notification 服务器来通知一个可用司机一个可选路程。UI 服务调用了其他服务来渲染页面。服务也可以使用异步、基于消息的通信。")]),e._v(" "),a("p",[e._v("一些 REST API 也暴露给移动端应用以供司机和乘客使用。然而，应用不能直接访问后端服务。相反，他们之间的通信是由一个称为 API 网关 (API Gateway) 的中介负责。 API 网关负责负载均衡、缓存、访问控制、 API 计量和监控， 可以通过使用 NGINX 来实现。")]),e._v(" "),a("p",[e._v("开发和交付中的伸缩立方：")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/0714fcab4f6d5951014e5613657c8289.png",alt:""}})]),e._v(" "),a("p",[e._v("微服务架构模式相当于此伸缩立方的 Y 轴坐标，此立方是一个来自《架构即未来》 的三维伸缩模型。另外两个坐标轴是由运行多个相同应用程序副本的负载均衡器组成的X 轴坐标和 Z 轴坐标（或数据分区) ，其中请求的属性（例如，一行记录的主键或者客户标识) 用于将请求路由到特定的服务器。")]),e._v(" "),a("p",[e._v("在运行时，X 坐标轴上运行着服务的多个实例，每个服务配合负载均衡器以满足吞吐量和可用性。某些应用程序也有可能使用 Z 坐标轴来进行分区服务。下图展示了如何用 Docker 将 Trip Management 服务部署到 Amazon EC2 上运行。")]),e._v(" "),a("p",[e._v("使用 Docker 部署 Trip Management 服务：")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/ca6ddafaa8b506ae4d45dde53ee5efb6.png",alt:""}})]),e._v(" "),a("p",[e._v("在运行时，Trip Management 服务由多个服务实例组成，每个服务实例是一个 Docker容器。为了实现高可用，容器是在多个云虚拟机上运行的。服务实例的之前是一个类似 NGINX 的负载均衡器，用于跨实例分发请求。负载均衡器也可以处理其他问题，如缓存、访问控制、API 度量和监控。")]),e._v(" "),a("p",[e._v("微服务架构模式明显影响到了应用程序与数据库之间的关系。与其他共享单个数据库模式 (schema) 服务有所不同， 其每一个服务都有自己的数据库模式。一方面，这种做法与企业级数据库数据模型的想法相背，此外，它经常导致部分数据冗余。然而，如果您想从微服务中受益，每一个服务都应该有自己的数据库模式。因为它能实现松耦合。下图展示了数据库架构示例应用程序。")]),e._v(" "),a("p",[e._v("每个服务都拥有各自的数据库。而且，服务可以使用一种最适合其需求、号称多语言持久架构 （polyglot persistence architecture )  的数据库。例如，DriverManagement，要找到与潜在乘客接近的司机，就必须使用支持高效地理查询的数据库。")]),e._v(" "),a("p",[e._v("打车应用的数据库架构：")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/384781ccf56d3057df5acd198e8d1f3d.png",alt:""}})]),e._v(" "),a("p",[e._v("从表面上看，微服务架构模式类似于 SOA。微服务是由一组服务组成。然而，换另一种方式去思考微服务架构模式，它是没有商业化的 SOA，没有集成 Web 服务规范 (WS-*) 和企业服务总线 (Enterprise Service Bus， ESB) 。基于微服务的应用支持更简单、轻量级的协议，例如，REST，而不是 WS-*。他们也尽量避免使用 ESB，而是实现微服务本身具有类似 ESB 的功能。微服务架构也拒绝了 SOA 的其他部分，例如，数据访问规范模式概念。")])])}),[],!1,null,null,null);t.default=s.exports}}]);