import './MainContent.css'

function MainContent() {
  const features = [
    { 
      icon: '🤖',
      title: 'AI 助手',
      description: 'Clawdbot 是一个强大的 AI 助手，可以帮助你处理各种任务。'
    },
    {
      icon: '💬',
      title: '多平台支持',
      description: '支持 Telegram、WhatsApp、Discord、Slack、飞书等多个平台。'
    },
    {
      icon: '⚡',
      title: '快速响应',
      description: '基于先进的大语言模型，提供快速、准确的回复。'
    },
    {
      icon: '🔧',
      title: '高度可定制',
      description: '支持自定义提示词、工具配置和工作流程。'
    },
    {
      icon: '🔒',
      title: "安全可靠",
      description: "数据加密传输，保障隐私安全。"
    }
  ]

  const quickLinks = [
    { title: "官方文档", href: "https://docs.clawdbot.com" },
    { title: "GitHub 仓库", href: "https://github.com/clawdbot" },
    { title: "快速开始", href: "/#quickstart" },
    { title: "API 参考", href: "/#api" }
  ]

  return (
    <main className="main-content">
      {/* Hero 区域 */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-icon">🤖</div>
          <h1 className="hero-title">欢迎来到 Clawdbot AI</h1>
          <p className="hero-subtitle">你值得信赖的 AI 助手</p>
          <p className="hero-description">
            基于先进的大语言模型，帮助你在各个平台上高效工作。
            <br />
            支持多平台集成，高度可定制，安全可靠。
          </p>
          <button className="cta-button">
            快速开始 →
          </button>
        </div>
      </section>

      {/* 特性展示区域 */}
      <section className="section">
        <h2 className="section-title">
          <span className="title-icon">✨</span>
          核心特性
        </h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="card feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 功能介绍区域 */}
      <section className="section">
        <h2 className="section-title">
          <span className="title-icon">🚀</span>
          平台支持
        </h2>
        <div className="platform-grid">
          <div className="card platform-card">
            <div className="platform-icon">💬</div>
            <h3 className="platform-title">Telegram</h3>
            <p className="platform-description">完整的消息处理和命令支持</p>
          </div>
          <div className="card platform-card">
            <div className="platform-icon">📱</div>
            <h3 className="platform-title">WhatsApp</h3>
            <p className="platform-description">实时聊天和多媒体消息</p>
          </div>
          <div className="card platform-card">
            <div className="platform-icon">🎮</div>
            <h3 className="platform-title">Discord</h3>
            <p className="platform-description">服务器管理和社区集成</p>
          </div>
          <div className="card platform-card">
            <div className="platform-icon">💼</div>
            <h3 className="platform-title">Slack</h3>
            <p className="platform-description">团队协作和消息处理</p>
          </div>
          <div className="card platform-card">
            <div className="platform-icon">📋</div>
            <h3 className="platform-title">飞书</h3>
            <p className="platform-description">企业级办公和消息处理</p>
          </div>
        </div>
      </section>

      {/* 快速链接区域 */}
      <section className="section">
        <h2 className="section-title">
          <span className="title-icon">📚</span>
          快速导航
        </h2>
        <div className="links-grid">
          {quickLinks.map((link, index) => (
            <a key={index} href={link.href} className="card link-card">
              <div className="link-content">
                <div className="link-number">{String(index + 1).padStart(2, '0')}</div>
                <h3 className="link-title">{link.title}</h3>
                <p className="link-description">点击访问</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 使用说明区域 */}
      <section className="section">
        <h2 className="section-title">
          <span className="title-icon">📖</span>
          快速开始
        </h2>
        <div className="card">
          <h3 className="step-title">第 1 步：配置平台</h3>
          <p className="step-description">
            在配置文件中添加你的平台凭证（Telegram Bot Token、WhatsApp Business API 等）
          </p>
          <div className="step-divider"></div>

          <h3 className="step-title">第 2 步：设置 AI 模型</h3>
          <p className="step-description">
            配置你使用的 AI 提供商（OpenAI、Anthropic、Google 等）和 API 密钥
          </p>
          <div className="step-divider"></div>

          <h3 className="step-title">第 3 步：启动服务</h3>
          <p className="step-description">
            运行 <code>clawdbot start</code> 命令启动服务，开始使用你的 AI 助手
          </p>
          <div className="step-divider"></div>

          <h3 className="step-title">第 4 步：享受使用</h3>
          <p className="step-description">
            开始与你的 AI 助手对话，体验智能、便捷的消息处理
          </p>
        </div>
      </section>
    </main>
  )
}

export default MainContent
