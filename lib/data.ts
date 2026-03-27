export interface Site {
  id: string
  name: string
  description: string
  url: string
  icon: string
  tags: string[]
  featured?: boolean
}

export interface Category {
  id: string
  name: string
  count: number
}

export const categories: Category[] = [
  { id: "frontend", name: "前端", count: 28 },
  { id: "ai", name: "AI", count: 44 },
  { id: "tools", name: "工具", count: 65 },
  { id: "design", name: "设计", count: 13 },
  { id: "backend", name: "后端", count: 22 },
  { id: "database", name: "数据库", count: 12 },
  { id: "cloud", name: "云平台", count: 18 },
  { id: "devops", name: "DevOps", count: 15 },
  { id: "mobile", name: "移动端", count: 10 },
  { id: "security", name: "安全", count: 8 },
  { id: "learning", name: "学习", count: 20 },
  { id: "community", name: "社区", count: 16 },
]

export const sites: Site[] = [
  {
    id: "1",
    name: "Vue.js",
    description: "渐进式 JavaScript 框架，易学易用，性能出色，适用场景丰富",
    url: "https://vuejs.org",
    icon: "https://vuejs.org/logo.svg",
    tags: ["前端", "框架"],
    featured: true
  },
  {
    id: "2",
    name: "React",
    description: "用于构建 Web 和原生用户界面的库",
    url: "https://react.dev",
    icon: "https://react.dev/favicon.ico",
    tags: ["前端", "框架"],
    featured: true
  },
  {
    id: "3",
    name: "GitHub",
    description: "全球最大的代码托管平台和开发者社区",
    url: "https://github.com",
    icon: "https://github.githubassets.com/favicons/favicon.svg",
    tags: ["工具", "社区"],
    featured: true
  },
  {
    id: "4",
    name: "掘金",
    description: "一个帮助开发者成长的社区，可以看看大佬的各种文章",
    url: "https://juejin.cn",
    icon: "https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/static/favicons/favicon-32x32.png",
    tags: ["社区", "学习"],
    featured: true
  },
  {
    id: "5",
    name: "DeepSeek",
    description: "深度求索，国产大模型的优秀代表",
    url: "https://deepseek.com",
    icon: "https://www.deepseek.com/favicon.ico",
    tags: ["AI", "工具"],
    featured: true
  },
  {
    id: "6",
    name: "通义千问",
    description: "阿里达摩院推出的大模型，拥有千亿参数，可用于智能问答、知识检索",
    url: "https://tongyi.aliyun.com",
    icon: "https://img.alicdn.com/imgextra/i3/O1CN01sffRIx1nb3dXCKHsz_!!6000000005107-2-tps-32-32.png",
    tags: ["AI", "工具"],
    featured: true
  },
  {
    id: "7",
    name: "v0",
    description: "基于人工智能的 UI 生成工具，快速构建界面",
    url: "https://v0.dev",
    icon: "https://v0.dev/favicon.ico",
    tags: ["AI", "设计"],
  },
  {
    id: "8",
    name: "Vercel",
    description: "前端部署平台，支持自动化部署和全球 CDN",
    url: "https://vercel.com",
    icon: "https://vercel.com/favicon.ico",
    tags: ["云平台", "工具"],
  },
  {
    id: "9",
    name: "Next.js",
    description: "React 全栈框架，支持 SSR、SSG 等多种渲染模式",
    url: "https://nextjs.org",
    icon: "https://nextjs.org/favicon.ico",
    tags: ["前端", "框架"],
  },
  {
    id: "10",
    name: "Tailwind CSS",
    description: "实用优先的 CSS 框架，快速构建现代化界面",
    url: "https://tailwindcss.com",
    icon: "https://tailwindcss.com/favicons/favicon-32x32.png",
    tags: ["前端", "设计"],
  },
  {
    id: "11",
    name: "Figma",
    description: "协作式界面设计工具，支持团队实时协作",
    url: "https://figma.com",
    icon: "https://www.figma.com/favicon.ico",
    tags: ["设计", "工具"],
  },
  {
    id: "12",
    name: "Linear",
    description: "现代化的项目管理工具，流畅的用户体验",
    url: "https://linear.app",
    icon: "https://linear.app/favicon.ico",
    tags: ["工具", "DevOps"],
  },
  {
    id: "13",
    name: "Supabase",
    description: "开源的 Firebase 替代品，提供数据库、认证等服务",
    url: "https://supabase.com",
    icon: "https://supabase.com/favicon.ico",
    tags: ["数据库", "后端"],
  },
  {
    id: "14",
    name: "Prisma",
    description: "下一代 Node.js 和 TypeScript ORM",
    url: "https://prisma.io",
    icon: "https://www.prisma.io/favicon.ico",
    tags: ["数据库", "后端"],
  },
  {
    id: "15",
    name: "MDN Web Docs",
    description: "Mozilla 开发者网络，Web 技术权威文档",
    url: "https://developer.mozilla.org",
    icon: "https://developer.mozilla.org/favicon.ico",
    tags: ["学习", "前端"],
  },
  {
    id: "16",
    name: "Stack Overflow",
    description: "全球最大的程序员问答社区",
    url: "https://stackoverflow.com",
    icon: "https://cdn.sstatic.net/Sites/stackoverflow/Img/favicon.ico",
    tags: ["社区", "学习"],
  },
  {
    id: "17",
    name: "ChatGPT",
    description: "OpenAI 的对话式 AI 助手",
    url: "https://chat.openai.com",
    icon: "https://chat.openai.com/favicon.ico",
    tags: ["AI", "工具"],
  },
  {
    id: "18",
    name: "Claude",
    description: "Anthropic 的 AI 助手，擅长长文本和代码",
    url: "https://claude.ai",
    icon: "https://claude.ai/favicon.ico",
    tags: ["AI", "工具"],
  },
]

export const stats = {
  totalSites: 367,
  totalCategories: 26,
  totalVisits: 1184,
  runningDays: 130,
}
