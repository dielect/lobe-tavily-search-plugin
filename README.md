# Lobe Chat Tavily Search Plugin

<p align="center">
  <img src="./public/plugin-logo.png" height="128" alt="Lobe Chat Tavily Search Plugin Logo">
</p>

<h3 align="center">
  A powerful search plugin for LobeChat powered by Tavily AI Search API
</h3>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#installation">Installation</a> •
  <a href="#usage">Usage</a> •
  <a href="#configuration">Configuration</a> •
  <a href="#development">Development</a>
</p>

## 🌟 Features | 功能特点

- 🔍 Powered by Tavily's AI-first search engine
  - 由 Tavily 的 AI 优先搜索引擎提供支持
- 🤖 Seamless integration with LobeChat
  - 与 LobeChat 无缝集成
- ⚡ Real-time search results with high accuracy
  - 高精度实时搜索结果
- 🌐 Support for multiple search types
  - 支持多种搜索类型
- 🔐 Secure API key management
  - 安全的 API 密钥管理

## 📦 Installation | 安装

1. Clone this repository
   ```bash
   git clone https://github.com/dielect/lobe-tavily-search-plugin.git
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

## 🚀 Usage | 使用方法

1. Get your Tavily API key from Tavily AI Dashboard
2. Configure the plugin in LobeChat settings
3. Start using the enhanced search capabilities in your LobeChat conversations

## ⚙️ Configuration | 配置

### Environment Variables | 环境变量

Create a `.env` file in the root directory:

```env
TAVILY_API_KEY=your_api_key_here
```

## 🛠️ Development | 开发

### Prerequisites | 前提条件

- Node.js 18+
- npm/yarn/pnpm
- Tavily API key

### Local Development | 本地开发

Start the development server:
```bash
npm run dev
```

Open http://localhost:3000 to view the plugin

### Project Structure | 项目结构

```
lobe-tavily-search-plugin/
├── app/                    # Next.js app directory
├── public/                 # Static files
├── components/            # React components
├── styles/                # CSS styles
└── package.json          # Project dependencies
```

## 🤝 Contributing | 贡献

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License | 许可证

MIT License - see the LICENSE file for details

## 🙏 Acknowledgments | 致谢

- LobeChat - The amazing chat platform
- Tavily AI - For providing the powerful search API
- Next.js - The React framework used

## 🔍 Keywords | 关键词

LobeChat Plugin, Tavily Search, AI Search, LobeChat Extension, Tavily AI, Chat Search Plugin, LobeChat Search, AI-powered Search, Next.js Plugin

## 📝 Notes | 注意事项

- This plugin requires a valid Tavily API key to function
- Make sure to keep your API key secure and never commit it to version control
- For production use, configure your environment variables properly

## 🐛 Troubleshooting | 故障排除

If you encounter any issues:

- Verify your Tavily API key is valid
- Check your Node.js version (18+ required)
- Clear your node_modules and reinstall dependencies
- Check the console for any error messages

<p align="center">Made with ❤️ for the LobeChat community</p>
<p align="center">为 LobeChat 社区用 ❤️ 制作</p>
