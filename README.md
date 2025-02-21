# Lobe Chat Tavily Search Plugin

<p align="center">
  <img src="./public/plugin-logo.png" height="128" alt="Lobe Chat Tavily Search Plugin Logo">
</p>

**English** · [简体中文](./README.zh-CN.md) 

<h3 align="center">
  A powerful search plugin for LobeChat powered by Tavily AI Search API<br>
</h3>


## 🌟 Why Tavily

- 1,000 free searches per month without credit card requirement

- Educational accounts can apply for free trial (4,000 credits/month for 4 months)

## 🚀 Quick Start

### Step 1: Get API Key

1. Visit [Tavily Official Website](https://tavily.com/) to register an account
  

2. Create **API Keys** on the dashboard


3. Copy the generated API key for later use


### Step 2: Install Plugin 

In LobeChat, follow these steps：

1. Click **Plugin Store** -> **Custom Plugin** -> **Edit Installation File**


3. Add `https://lobe-plugin.composere.com/manifest.json` to **Description File URL**


5. Click **Install Plugin**

Note: `https://lobe-plugin.composere.com/manifest.json` is deployed on Vercel. For private deployment, refer to the guide below.


## ⚙️ Private Deployment

If you're concerned about API key security with public API endpoints, you can deploy your own instance:


1. Fork this project and deploy to Vercel with one click


2. Modify the `url` field in `manifest.json` from `https://lobe-plugin.composere.com` to your deployed domain

3. For custom gateway configuration, refer to `manifest-dev.json` and update the `gateway` field from `http://localhost:3000` to your domain


## 🙏 Acknowledgments

- LobeChat - The amazing AI chat platform
- Tavily AI - For providing the powerful search API


## 📝 Notes

- This plugin requires a valid Tavily API key to function


- Make sure to keep your API key secure and never commit it to version control

- For production use, configure your environment variables properly

<p align="center">Made with ❤️ for the LobeChat community</p>
