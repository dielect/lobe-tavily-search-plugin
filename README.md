# Lobe Chat Tavily Search Plugin

<p align="center">
  <img src="./public/plugin-logo.png" height="128" alt="Lobe Chat Tavily Search Plugin Logo">
</p>

<h3 align="center">
  A powerful search plugin for LobeChat powered by Tavily AI Search API<br>
  基于 Tavily AI Search API 的强大 LobeChat 搜索插件
</h3>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#installation">Installation</a> •
  <a href="#usage">Usage</a> •
  <a href="#configuration">Configuration</a> •
  <a href="#development">Development</a>
</p>

## 🌟 Why Tavily | 为什么选择 Tavily

- 1,000 free searches per month without credit card requirement
  - 官方每个月 1000 次免费搜索，无需信用卡
- Educational accounts can apply for free trial (4,000 credits/month for 4 months)
  - edu 教育账号可申请免费试用（4000 信用积分/月，共 4 个月）

## 🚀 Quick Start | 快速开始

### Step 1: Get API Key | 第一步：获取 API 密钥

1. Visit [Tavily Official Website](https://tavily.com/) to register an account
   访问 [Tavily 官网](https://tavily.com/) 注册账号

2. Create **API Keys** on the dashboard
   在主页创建 **API Keys**

3. Copy the generated API key for later use
   复制生成的 API 密钥备用

### Step 2: Install Plugin | 第二步：安装插件

In LobeChat, follow these steps | 在 LobeChat 中操作：

1. Click **Plugin Store** -> **Custom Plugin** -> **Edit Installation File**

   点击 **插件商店** -> **自定义插件** -> **编辑安装文件**

3. Add `https://lobe-plugin.composere.com/manifest.json` to **Description File URL**

   在**描述文件 URL** 添加 `https://lobe-plugin.composere.com/manifest.json`

5. Click **Install Plugin**

   点击**安装插件**

Note: `https://lobe-plugin.composere.com/manifest.json` is deployed on Vercel. For private deployment, refer to the guide below.

注意：`https://lobe-plugin.composere.com/manifest.json` 部署在 Vercel 上，如果你想私有化部署，参考下面教程。

## ⚙️ Private Deployment | 私有化部署

If you're concerned about API key security with public API endpoints, you can deploy your own instance:

如果你担心部署的公共 API 接口会泄露你的 API key，你可以 fork 本项目后自行部署，参考以下步骤：

1. Fork this project and deploy to Vercel with one click

   fork 本项目后，Vercel 一键部署

3. Modify the `url` field in `manifest.json` from `https://lobe-plugin.composere.com` to your deployed domain

   修改 `manifest.json` 文件中的 `url` 字段中的 `https://lobe-plugin.composere.com` 为你的自部署域名

5. For custom gateway configuration, refer to `manifest-dev.json` and update the `gateway` field from `http://localhost:3000` to your domain

   目前走的是官方网关，如果你想自定义网关，参考 `manifest-dev.json` 配置文件，需要修改 `gateway` 字段中的 `http://localhost:3000` 为你的自部署域名

## 🙏 Acknowledgments | 致谢

- LobeChat - The amazing AI chat platform | 出色的AI对话平台
- Tavily AI - For providing the powerful search API | 提供强大的搜索 API


## 📝 Notes | 注意事项

- This plugin requires a valid Tavily API key to function
  插件需要有效的 Tavily API 密钥才能运行

- Make sure to keep your API key secure and never commit it to version control
  确保 API 密钥安全，切勿提交到版本控制系统中

- For production use, configure your environment variables properly
  生产环境使用时，请正确配置环境变量

<p align="center">Made with ❤️ for the LobeChat community</p>
<p align="center">为 LobeChat 社区用 ❤️ 制作</p>
