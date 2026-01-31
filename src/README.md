# OpenClaw React 项目

基于 React 的 OpenClaw 智能聊天机器人前端应用。

## 特性

- 🎨 **现代化UI设计** - 精心设计的界面，提供优秀的用户体验
- 📱 **响应式布局** - 完美支持移动端和桌面端
- 🌙 **深色模式** - 护眼舒适的深色主题
- ⚡ **快速响应** - 基于React的组件化架构，响应迅速
- 🔧 **高度可定制** - 支持自定义主题、配置和功能
- 🔒 **安全可靠** - 数据加密传输，保障隐私安全

## 快速开始

### 在线体验

访问在线版本：
- [OpenClaw主页](https://golangcjava.github.io/)
- [React版本](https://golangcjava.github.io/src/)

### 本地开发

```bash
# 1. 克隆React项目
git clone https://github.com/GoLangCJava/clawdbot-react.git
cd clawdbot-react

# 2. 安装依赖
npm install
# 或
pnpm install
# 或
yarn install

# 3. 启动开发服务器
npm run dev

# 4. 构建生产版本
npm run build

# 5. 预览生产构建
npm run preview
```

## 项目结构

```
clawdbot-react/
├── public/          # 静态资源（HTML、CSS、JS、图片等）
├── src/             # 源代码
│   ├── components/  # React组件
│   │   ├── Counter.tsx
│   │   ├── MessageList.tsx
│   │   └── ...
│   ├── App.tsx      # 主应用组件
│   ├── main.tsx     # 应用入口
│   ├── style.css    # 全局样式
│   └── ...
├── index.html        # HTML模板
├── package.json      # 项目配置
├── vite.config.js    # Vite构建工具配置
├── tsconfig.json    # TypeScript配置
└── README.md        # 项目说明
```

## 技术栈

- **React 18+** - 使用最新的React特性和Hooks
- **TypeScript** - 类型安全的JavaScript超集
- **Vite** - 快速的构建工具和开发服务器
- **CSS3/Modern CSS** - 现代化的CSS样式
- **CSS Variables** - 主题定制和样式管理

## 主要功能

- 🤖 **智能对话界面** - 流畅的聊天体验
- ⚡ **快速消息处理** - 高效的消息队列和分发
- 🎨 **可定制主题** - 支持浅色/深色模式切换
- 📱 **移动端优化** - 完美的移动设备适配
- 🔒 **端到端加密** - 安全的消息传输

## 平台集成

OpenClaw支持集成到以下社交和通讯平台：

### 即时通讯平台

| 平台 | 支持功能 | 集成难度 |
|--------|---------|---------|
| 💬 Telegram Bot | 完整的消息处理、命令系统、富文本 | ⭐⭐⭐ |
| 📱 WhatsApp Business API | 实时聊天、多媒体消息、模板消息 | ⭐⭐⭐ |
| 🎮 Discord Bot | 服务器管理、频道消息、Slash命令 | ⭐⭐ |
| 💼 Slack App | 团队协作、消息处理、机器人集成 | ⭐⭐⭐ |

### 企业级平台

| 平台 | 支持功能 | 集成难度 |
|--------|---------|---------|
| 📋 飞书机器人 | 企业级办公、富消息、卡片、Webhook | ⭐⭐ |
| 💬 微信小程序 | 微信生态集成 | ⭐⭐⭐ |
| 📧 Email | 智能邮件回复 | ⭐⭐ |

## 配置指南

### 环境变量配置

创建 `.env` 文件：

```env
# OpenAI API配置
OPENAI_API_KEY=sk-your-openai-api-key-here

# Telegram Bot配置（可选）
TELEGRAM_BOT_TOKEN=your-telegram-bot-token-here
TELEGRAM_CHAT_ID=your-telegram-chat-id-here

# WhatsApp Business API配置（可选）
WHATSAPP_PHONE_ID=your-phone-number
WHATSAPP_ACCESS_TOKEN=your-access-token-here

# Discord Bot配置（可选）
DISCORD_BOT_TOKEN=your-discord-bot-token-here
DISCORD_GUILD_ID=your-guild-id-here

# Slack App配置（可选）
SLACK_BOT_TOKEN=xoxb-your-slack-bot-token-here
SLACK_SIGNING_SECRET=your-signing-secret-here

# 飞书配置（可选）
FEISHU_APP_ID=cli-your-app-id-here
FEISHU_APP_SECRET=your-app-secret-here
```

### 平台配置示例

#### Telegram Bot配置

```javascript
import { TelegramBot } from 'grammy';

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN);

bot.on('message', async (msg) => {
  // 调用OpenAI生成回复
  const response = await generateAIResponse(msg.text);
  
  // 回复用户
  await bot.sendMessage(msg.chat.id, response);
});

bot.start();
```

#### WhatsApp Business API配置

```javascript
import { whatsapp } from '@whiskeysockets/whatsapp';

const client = new whatsapp({
  authStrategy: new LocalAuth({ 
    clientId: process.env.WHATSAPP_PHONE_ID,
    clientSecret: process.env.WHATSAPP_ACCESS_TOKEN 
  })
});

client.on('message_create', async (msg) => {
  // 调用OpenAI生成回复
  const response = await generateAIResponse(msg.body);
  
  // 回复用户
  await client.sendMessage(msg.from, response);
});
```

#### Discord Bot配置

```javascript
import { Client, GatewayIntentBits } from 'discord.js';

const client = new Client({ 
  intents: GatewayIntentBits.Guilds | GatewayIntentBits.GuildMessages 
});

client.on('messageCreate', async (message) => {
  // 调用OpenAI生成回复
  const response = await generateAIResponse(message.content);
  
  // 回复用户
  await message.channel.send(response);
});

client.login(process.env.DISCORD_BOT_TOKEN);
```

## 开发指南

### 创建新组件

```tsx
import React, { useState } from 'react';

export function MessageInput() {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 处理消息提交
    console.log('Sending message:', message);
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="输入消息..."
      />
      <button type="submit">发送</button>
    </form>
  );
}
```

### 使用自定义Hook

```tsx
import { useState, useEffect } from 'react';

export function useAIResponse(prompt: string) {
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchResponse = async () => {
      setLoading(true);
      // 调用AI API
      const data = await generateAIResponse(prompt);
      setResponse(data);
      setLoading(false);
    };

    if (prompt) {
      fetchResponse();
    }
  }, [prompt]);

  return { response, loading };
}
```

## 部署

### GitHub Pages部署

```bash
# 1. 构建项目
npm run build

# 2. 复制dist目录内容到GitHub Pages根目录
cp -r dist/* ../

# 3. 提交并推送
git add .
git commit -m "Deploy to GitHub Pages"
git push

# 4. 访问你的网站
# https://yourusername.github.io/
```

### Vercel部署（推荐）

```bash
# 1. 安装Vercel CLI
npm i -g vercel

# 2. 登录Vercel
vercel login

# 3. 部署项目
cd clawdbot-react
vercel

# 4. 访问你的网站
# https://your-project.vercel.app/
```

### Netlify部署

```bash
# 1. 安装Netlify CLI
npm i -g netlify-cli

# 2. 登录Netlify
netlify login

# 3. 部署项目
cd clawdbot-react
netlify deploy --prod

# 4. 访问你的网站
# https://your-project.netlify.app/
```

## 架构设计

### 核心架构层次

```
┌─────────────────────────────────────┐
│         UI Layer (React)          │
├─────────────────────────────────────┤
│       State Management           │
├─────────────────────────────────────┤
│       AI Service Layer           │
├─────────────────────────────────────┤
│       Platform Adapters           │
├─────────────────────────────────────┤
│       API Integration Layer       │
└─────────────────────────────────────┘
```

### 层次说明

1. **UI Layer (React)**
   - React组件和状态管理
   - 用户界面和交互
   - 主题和样式

2. **State Management**
   - 全局状态管理（Context/Redux）
   - 会话状态维护
   - 用户配置

3. **AI Service Layer**
   - 大语言模型集成（OpenAI/Anthropic）
   - 提示词管理
   - 上下文维护

4. **Platform Adapters**
   - 多平台消息适配器
   - 事件处理器
   - Webhook管理

5. **API Integration Layer**
   - 外部API调用
   - 数据库操作
   - 文件处理

## 最佳实践

### 1. 安全性

- ✅ 永远不要在代码中硬编码API密钥
- ✅ 使用环境变量或密钥管理服务
- ✅ 实施速率限制和配额监控
- ✅ 定期轮换API密钥
- ✅ 使用HTTPS加密传输

### 2. 错误处理

- ✅ 实现完善的错误处理机制
- ✅ 使用指数退避策略进行重试
- ✅ 记录详细的错误日志
- ✅ 设置监控告警
- ✅ 优雅的错误降级

### 3. 性能优化

- ✅ 使用缓存机制减少API调用
- ✅ 实现消息队列处理高并发
- ✅ 异步处理长时间任务
- ✅ 优化组件渲染和更新
- ✅ 使用React.memo和useMemo

### 4. 代码质量

- ✅ 编写单元测试和集成测试
- ✅ 使用ESLint和Prettier
- ✅ 遵循TypeScript最佳实践
- ✅ 使用命名约定和代码规范
- ✅ 定期代码审查

## 相关资源

### 官方文档

- [OpenClaw文档](https://docs.clawdbot.com)
- [GitHub仓库](https://github.com/clawdbot/clawdbot)
- [Issue跟踪](https://github.com/clawdbot/clawdbot/issues)

### 社区

- [Discord社区](https://discord.gg/clawdbot)
- [GitHub Discussions](https://github.com/clawdbot/clawdbot/discussions)
- [Twitter](https://twitter.com/clawdbot)

### 学习资源

- [React官方文档](https://react.dev/)
- [Vite文档](https://vitejs.dev/)
- [TypeScript文档](https://www.typescriptlang.org/)
- [MDN Web Docs](https://developer.mozilla.org/)

## 贡献

欢迎贡献！请查看 [贡献指南](https://github.com/clawdbot/clawdbot/blob/main/CONTRIBUTING.md)

## 许可证

MIT License - 详见 [LICENSE](https://github.com/clawdbot/clawdbot/blob/main/LICENSE)

## 支持

如有问题或建议，请：
- 提交 [Issue](https://github.com/clawdbot/clawdbot/issues)
- 加入 [Discord社区](https://discord.gg/clawdbot)
- 发送邮件到 [support@clawdbot.com](mailto:support@clawdbot.com)

---

**OpenClaw** - 你值得信赖的AI助手 🤖
