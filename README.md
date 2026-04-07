<p align="center">
  <br>
  <img src="https://github.com/ConsoleLZ/GrowthGO/blob/main/src/assets/images/logo.png?raw=true" width="90"/>
</p>

<h1 align="center">GrowthGO 2.0</h1>
<h3 align="center">个人导航网站 + 个人笔记系统</h3>

<p align="center">
  <a href="#特性">特性</a> • 
  <a href="#快速开始">快速开始</a> • 
  <a href="#部署">部署</a> • 
  <a href="#项目结构">项目结构</a> • 
  <a href="#贡献">贡献</a> • 
  <a href="#许可证">许可证</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14.0-black?style=for-the-badge&logo=next.js" alt="Next.js">
  <img src="https://img.shields.io/badge/React-18.2-blue?style=for-the-badge&logo=react" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-5.7-blue?style=for-the-badge&logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind-4.2-38bdf8?style=for-the-badge&logo=tailwindcss" alt="Tailwind CSS">
</p>

## 🌟 特性

### 📚 个人笔记系统
- **Markdown支持**：完整的Markdown语法支持，包括代码高亮
- **数学公式渲染**：集成KaTeX，支持LaTeX数学公式
- **文章分类**：基于标签的文章分类和筛选
- **搜索功能**：全文搜索，支持标题、描述和标签
- **字数统计**：准确的中英文混合字数统计
- **阅读时间**：智能计算文章阅读时间
- **响应式设计**：完美适配移动端和桌面端

### 🔗 个人导航网站
- **资源管理**：分类管理个人收藏的网站和资源
- **标签系统**：灵活的标签分类和筛选
- **搜索功能**：快速搜索导航卡片内容
- **懒加载**：无限滚动加载，优化性能
- **图标支持**：自动加载网站favicon
- **暗色模式**：支持系统主题切换

### 🛠️ 技术特性
- **现代化技术栈**：Next.js 14 + React 18 + TypeScript
- **优雅的UI**：基于Radix UI和Tailwind CSS的现代化设计
- **SEO优化**：服务端渲染，更好的搜索引擎优化
- **性能优化**：代码分割、图片懒加载、缓存策略
- **开发体验**：热重载、TypeScript类型检查、ESLint

## 🚀 快速开始

### 环境要求
- Node.js 18+ 
- npm 或 pnpm

### 安装步骤

1. **克隆项目**
```bash
git clone https://github.com/ConsoleLZ/GrowthGO-2.0.git
cd GrowthGO-2.0
```

2. **安装依赖**
```bash
npm install
# 或使用 pnpm
pnpm install
```

3. **添加内容**

在 `content/posts/` 目录下添加你的Markdown笔记：

```markdown
---
title: "文章标题"
description: "文章描述"
date: "2024-01-01"
tags: ["标签1", "标签2"]
---

# 文章内容

你的Markdown内容...
```

在 `lib/data.ts` 中添加你的导航资源：

```typescript
export const sites = [
  {
    name: "网站名称",
    url: "https://example.com",
    description: "网站描述",
    ico: "https://example.com/favicon.ico",
    tags: ["前端", "工具"]
  }
]
```

4. **启动开发服务器**
```bash
npm run dev
# 或使用 pnpm
pnpm dev
```

访问 http://localhost:3000 查看效果。

## 🌐 部署

### Vercel（推荐）

1. Fork 本项目
2. 在 [Vercel](https://vercel.com) 上导入项目
3. 配置环境变量（如果需要）
4. 点击部署

### 其他平台

项目也支持部署到：
- Netlify
- Railway
- 任何支持Node.js的云平台

## 📁 项目结构

```
GrowthGO-2.0/
├── app/                    # Next.js App Router
│   ├── blog/              # 博客相关页面
│   ├── category/          # 分类页面
│   └── stats/            # 统计页面
├── components/            # React组件
│   ├── blog/             # 博客相关组件
│   ├── ui/               # UI基础组件
│   └── shared/           # 共享组件
├── content/              # 内容文件
│   └── posts/           # Markdown文章
├── lib/                  # 工具函数和数据
├── public/               # 静态资源
└── hooks/               # 自定义React Hooks
```

## 🤝 贡献

欢迎贡献代码！请遵循以下步骤：

1. Fork 本项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开Pull Request

### 开发规范
- 使用TypeScript编写代码
- 遵循ESLint规则
- 提交信息使用约定式提交格式
- 新功能请添加相应的文档

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

感谢以下开源项目的支持：
- [Next.js](https://nextjs.org/) - React框架
- [Tailwind CSS](https://tailwindcss.com/) - CSS框架
- [Radix UI](https://www.radix-ui.com/) - 无障碍UI组件
- [Lucide](https://lucide.dev/) - 图标库
- [KaTeX](https://katex.org/) - 数学公式渲染

## 📞 联系

- 项目主页：https://github.com/ConsoleLZ/GrowthGO-2.0
- 问题反馈：https://github.com/ConsoleLZ/GrowthGO-2.0/issues

---

<p align="center">
  如果这个项目对你有帮助，请给个 ⭐️ 支持一下！
</p>