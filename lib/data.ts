export interface Site {
  name: string
  ico: string
  url: string
  description: string
  tags: string[]
  recommend?: boolean
  quickAccess?: boolean
}

// 所有的标签
export const tags = {
  // 开发技术
  web: "前端",
  development: "开发",
  component: "组件库",
  template: "模板",
  lowCode: "低代码",
  microFrontend: "微前端",
  dataViz: "数据可视化",

  // 工具资源
  tools: "工具",
  design: "设计",
  resources: "资源",
  projectManagement: "项目管理",
  animation: "动画",
  physics: "物理引擎",
  editor: "代码编辑器",

  // 技术领域
  ai: "AI",
  hardware: "硬件",
  game: "游戏",
  security: "安全",
  modeling: "3D建模",

  // 平台社区
  community: "社区",
  cloud: "云平台",
  learning: "学习",
  openSource: "开源",

  // 其他分类
  icon: "图标",
  plugin: "插件",
  amusement: "娱乐",
  other: "其他"
};

// recommend: true
export const sites: Site[] = [
  {
    name: "豆包",
    ico: "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/chat/favicon.png",
    url: "https://www.doubao.com/",
    description: "一个基于人工智能的聊天机器人，可以帮助用户解决问题。",
    tags: [tags.ai],
    quickAccess: true
  },
  {
    name: "Typora",
    ico: "https://typora.io/img/favicon-32.png",
    url: "https://typora.io/",
    description: "一个极简的Markdown编辑器和阅读器，主题丰富",
    tags: [tags.tools],
    recommend: true
  },
  {
    name: "Stitch",
    ico: "https://www.gstatic.com/labs-code/favicon-32x32.png",
    url: "https://stitch.withgoogle.com/",
    description: "基于人工智能的 UI 生成工具",
    tags: [tags.ai, tags.design],
    recommend: true
  },
  {
    name: "V0",
    ico: "https://v0.app/assets/icon.svg",
    url: "https://v0.app/",
    description: "基于人工智能的 UI 生成工具",
    tags: [tags.ai, tags.design],
    recommend: true
  },
  {
    name: "OpenClaw",
    ico: "https://openclaw.ai/favicon.svg",
    url: "https://openclaw.ai/",
    description: "真正行动的人工智能",
    tags: [tags.ai],
    recommend: true
  },
  {
    name: "memstechtips / Winhance",
    ico: "/imgNull.png",
    url: "https://github.com/memstechtips/Winhance",
    description: "旨在优化、定制和提升您的Windows体验的应用程序",
    tags: [tags.tools]
  },
  {
    name: "animejs",
    ico: "https://animejs.com/assets/images/favicon.png",
    url: "https://animejs.com/",
    description: "一个轻量级、功能强大的 JavaScript 动画库，用于为网页元素（包括 CSS 属性、SVG、DOM 属性、JavaScript 对象等）创建高性能的动画效果",
    tags: [tags.animation, tags.web],
    recommend: true
  },
  {
    name: "sickn33 / antigravity-awesome-skills",
    ico: "/imgNull.png",
    url: "https://github.com/sickn33/antigravity-awesome-skills",
    description: "skills库",
    tags: [tags.ai, tags.resources]
  },
  {
    name: "anthropics / skills",
    ico: "/imgNull.png",
    url: "https://github.com/anthropics/skills",
    description: "skills库",
    tags: [tags.ai, tags.resources]
  },
  {
    name: "trae",
    ico: "https://lf-cdn.trae.com.cn/obj/trae-com-cn/trae_website_prod_cn/favicon.png",
    url: "https://www.trae.cn/",
    description: "TRAE ，一个能理解需求、调动工具、独立完成各类开发任务的超级 AI 开发工程师，助你高效推进项目每一步。",
    tags: [tags.tools, tags.editor, tags.ai]
  },
  {
    name: "docsify",
    ico: "https://docsify.js.org/_media/favicon.ico",
    url: "https://docsify.js.org/#/zh-cn/",
    description: "一个神奇的文档网站生成器。",
    tags: [tags.web, tags.development]
  },
  {
    name: "古文岛",
    ico: "https://www.gushiwen.cn/favicon.ico",
    url: "https://www.gushiwen.cn/",
    description: "古文岛作为传承经典的网站专注于古诗服务，致力于让古诗爱好者更便捷地发表及获取古诗相关资料。",
    tags: [tags.learning]
  },
  {
    name: "ChatUI",
    ico: "https://gw.alicdn.com/tfs/TB17TaySSzqK1RjSZFHXXb3CpXa-80-80.svg",
    url: "https://chatui.io/",
    description: "助力设计开发者搭建「对话式交互」，让科技更有温度，对话美而简单～",
    tags: [tags.web, tags.component]
  },
  {
    name: "Predidit / Kazumi",
    ico: "/imgNull.png",
    url: "https://github.com/Predidit/Kazumi",
    description: "基于自定义规则的番剧采集APP，支持流媒体在线观看，支持弹幕，支持实时超分辨率。",
    tags: [tags.amusement]
  },
  {
    name: "VS code",
    ico: "https://code.visualstudio.com/assets/favicon.ico",
    url: "https://code.visualstudio.com/",
    description: "一款生态丰富的代码编辑器，有很多好用、好玩的插件",
    tags: [tags.tools, tags.editor],
    recommend: true
  },
  {
    name: "Zed",
    ico: "https://zed.dev/favicon_black_32.png",
    url: "https://zed.dev/",
    description:
      "Zed 是一款极简代码编辑器，专为速度和与人类及人工智能的协作而设计。",
    tags: [tags.tools, tags.editor]
  },
  {
    name: "originalankur / maptoposter",
    ico: "/imgNull.png",
    url: "https://github.com/originalankur/maptoposter",
    description:
      "将你喜爱的城市转变为美丽、极简的设计。MapToPoster 允许你用代码创建并导出视觉冲击力强的地图海报。",
    tags: [tags.other, tags.openSource]
  },
  {
    name: "vladelaina / Catime",
    ico: "https://vladelaina.github.io/Catime/assets/catime.webp",
    url: "https://github.com/vladelaina/Catime",
    description:
      "一个小巧（803KB）但强大的纯C计时器。支持时钟、倒计时、秒表、番茄钟，以及完全可自定义的托盘动画（GIF、CPU/内存%） 💘",
    tags: [tags.tools]
  },
  {
    name: "Genymobile / scrcpy",
    ico: "/imgNull.png",
    url: "https://github.com/Genymobile/scrcpy",
    description:
      "用于使计算机用户能通过android ADB或通过USB数据线控制其Android设备，实现手机投屏",
    tags: [tags.tools]
  },
  {
    name: "scqilin / phone-ui-vue",
    ico: "/imgNull.png",
    url: "https://github.com/scqilin/phone-ui-vue",
    description:
      "一个专为 Vue 3 设计的手机外观组件库，使用 TypeScript 开发，支持多机型预设和完全自定义外观。",
    tags: [tags.web, tags.development]
  },
  {
    name: "shadcn/ui-vue",
    ico: "https://www.shadcn-vue.com/favicon-16x16.png",
    url: "https://www.shadcn-vue.com/",
    description: "shadcn/ui的vue版本",
    tags: [tags.web, tags.component]
  },
  {
    name: "shadcn/ui",
    ico: "https://ui.shadcn.com/favicon.ico",
    url: "https://ui.shadcn.com/",
    description:
      "一组设计精美的组件，你可以自定义、扩展和扩展。从这里开始，然后打造属于你自己的风格。",
    tags: [tags.web, tags.component]
  },
  {
    name: "像素实验室",
    ico: "https://pixlab24.com/wp-content/uploads/2024/01/icon.png",
    url: "https://pixlab24.com/",
    description:
      "pixlab24像素实验室是一个专门为独立游戏爱好者提供免费游戏素材的下载网站,免费各种类型的2D像素素材和3D游戏资产，包括像素人物，物品，像素游戏背景，地图，人物动画，游戏界面UI等游戏素材！为你的像素或2D游戏开发提供素材！",
    tags: [tags.resources]
  },
  {
    name: "Alpine.js",
    ico: "https://alpinejs.dev/favicon.png",
    url: "https://alpinejs.dev/",
    description:
      "这是一个轻量级、极简的 JavaScript 框架，专为前端交互设计，提供类似 Vue 的声明式语法，但无需构建工具，可直接在 HTML 中使用。适用于为静态页面增强交互体验，如表单处理、模态框、手风琴菜单等，既解决了 jQuery 繁琐的 DOM 操作，又避免了 Vue/React 等框架的复杂性和性能开销，非常适合前后端分离的轻量级项目或仅需少量动态行为的页面。",
    tags: [tags.web, tags.development]
  },
  {
    name: "菜鸟教程",
    ico: "https://caijiao.org/favicon.ico",
    url: "https://caijiao.org/",
    description:
      "菜鸟教程官网是面向初学者的编程学习平台，覆盖 HTML、CSS、JS、Python、数据库等主流技术",
    tags: [tags.learning]
  },
  {
    name: "Wails",
    ico: "https://wails.io/zh-Hans/img/favicon.ico",
    url: "https://wails.io/zh-Hans/",
    description: "使用 Go 构建漂亮的跨平台应用程序",
    tags: [tags.development, tags.openSource]
  },
  {
    name: "Smoothie Charts",
    ico: "http://smoothiecharts.org/favicon.ico",
    url: "http://smoothiecharts.org/",
    description: "用于流数据的JavaScript图表库，做示波器效果很好",
    tags: [tags.development, tags.web, tags.openSource]
  },
  {
    name: "TDesign",
    ico: "https://static.tdesign.tencent.com/favicon.ico",
    url: "https://tdesign.tencent.com/",
    description:
      "腾讯开源的企业级设计体系，提供了统一价值观，一致的设计语言和视觉风格，和开箱即用的 UI 组件库。致力于为设计师 & 开发者，打造工作美学",
    tags: [tags.component, tags.web, tags.openSource],
    recommend: true
  },
  {
    name: "NativeScript",
    ico: "https://nativescript.org/favicon-32x32.png",
    url: "https://nativescript.org/",
    description: "渲染原生平台界面，直接访问由TypeScript自动支持的原生API。",
    tags: [tags.development, tags.openSource]
  },
  {
    name: "XMSLEEP",
    ico: "/imgNull.png",
    url: "https://github.com/Tosencen/XMSLEEP",
    description:
      "这是一个专注于白噪音播放的 Android 应用，提供雨声、篝火、雷声、猫咪呼噜、鸟鸣、夜虫等多种自然声音，帮助你放松、冥想和入睡。",
    tags: [tags.openSource, tags.other]
  },
  {
    name: "LeaferJS",
    ico: "https://www.leaferjs.com/favicon.svg",
    url: "https://www.leaferjs.com/",
    description: "好用的 Canvas 引擎",
    tags: [tags.web, tags.development]
  },
  {
    name: "mui",
    ico: "https://mui.com/static/favicon.ico",
    url: "https://mui.com/",
    description:
      "MUI offers a comprehensive suite of free UI tools to help you ship new features faster. Start with Material UI, our fully-loaded component library, or bring your own design system to our production-ready components.",
    tags: [tags.component]
  },
  {
    name: "Cloudflare",
    ico: "https://www.cloudflare-cn.com/favicon.ico",
    url: "https://www.cloudflare-cn.com/",
    description: "随时随地连接、保护和构建",
    tags: [tags.cloud],
    recommend: true
  },
  {
    name: "Tauri",
    ico: "https://tauri.app/favicon.svg",
    url: "https://tauri.app/zh-cn/",
    description: "创建小型、快速、安全、跨平台的应用程序",
    tags: [tags.web, tags.development],
    recommend: true
  },
  {
    name: "无水印下载鸭",
    ico: "https://download.linglan01.cn/favicon.ico",
    url: "https://download.linglan01.cn/",
    description:
      "支持抖音、B站、小红书、微信公众号等平台视频图片无水印下载，免费快速去水印。",
    tags: [tags.tools],
    recommend: true
  },
  {
    name: "Buefy",
    ico: "https://buefy.org/static/img/icons/favicon.ico",
    url: "https://buefy.org/",
    description:
      "基于轻量级 CSS 框架 Bulma 构建，因此非常轻量，没有 JavaScript 依赖（除了 Vue 本身）。组件风格简约、清新，易于定制",
    tags: [tags.component]
  },
  {
    name: "Vuetify",
    ico: "https://vuetifyjs.com/favicon.ico",
    url: "https://vuetifyjs.com/zh-Hans/",
    description:
      "遵循 Google 的 Material Design 设计规范，组件极其丰富，功能强大。它提供了大量的预设样式和布局工具，可以快速构建出具有 Material Design 风格的应用",
    tags: [tags.component]
  },
  {
    name: "Gridsome",
    ico:
      "https://gridsome.org/assets/static/favicon.ac8d93a.c6d52b979318cc0b0524324281174df2.png",
    url: "https://gridsome.org/",
    description: "使用Vue.js, 使开发人员可以轻松构建静态生成的网站和应用程序",
    tags: [tags.development]
  },
  {
    name: "Pixelium Design",
    ico: "https://shika-works.github.io/pixelium-design/logo.png",
    url: "https://shika-works.github.io/pixelium-design/zh/",
    description: "怀旧像素美学、可树摇组件、深浅主题，开箱即用，类型安全",
    tags: [tags.component]
  },
  {
    name: "eythaann / Seelen-UI",
    ico:
      "https://github.com/eythaann/Seelen-UI/raw/master/documentation/images/logo.svg",
    url: "https://github.com/eythaann/Seelen-UI",
    description: "适用于 Windows 10/11 的完全可定制的桌面环境。",
    tags: [tags.tools]
  },
  {
    name: "Happy Hues",
    ico:
      "https://cdn.prod.website-files.com/5dd40aa8049df8748c72d0ee/5dd9b94105da589ba59c4907_happy-hues-fav.png",
    url: "https://www.happyhues.co/",
    description:
      "Happy Hues 是一个调色板灵感网站，可作为如何在您的设计项目中使用颜色的真实示例",
    tags: [tags.design]
  },
  {
    name: "即时设计",
    ico: "https://img.js.design/assets/webImg/favicon.ico",
    url: "https://js.design/home",
    description: "同时创造，即时设计",
    tags: [tags.design, tags.tools]
  },
  {
    name: "PinMe",
    ico: "https://pinme.eth.limo/favicon.ico",
    url: "https://pinme.eth.limo/",
    description: "快速部署静态站点",
    tags: [tags.cloud]
  },
  {
    name: "Figma",
    ico: "https://static.figma.com/app/icon/1/favicon.ico",
    url: "https://www.figma.com/downloads/",
    description:
      "Figma helps design and development teams build great products, together.",
    tags: [tags.design, tags.tools]
  },
  {
    name: "UXBAIKE",
    ico: "https://www.uxbaike.com/logo.png",
    url: "https://www.uxbaike.com/",
    description: "UI设计学习平台",
    tags: [tags.design, tags.learning]
  },
  {
    name: "AFFiNE",
    ico: "https://affine.pro/favicon-96.png",
    url: "https://affine.pro/",
    description:
      "AFFiNE 是一个包含完全合并的文档、白板和数据库的工作区。完成更多的事情，你的创造力不是单调的。",
    tags: [tags.tools, tags.development],
    recommend: true
  },
  {
    name: "ImgTools",
    ico: "https://imgtools.info/favicon.ico",
    url: "https://imgtools.info/zh",
    description: "简单免费的图片处理工具",
    tags: [tags.tools]
  },
  {
    name: "Shadertoy",
    ico: "https://www.shadertoy.com/img/favicon.ico",
    url: "https://www.shadertoy.com/",
    description: "构建和分享世界上你最喜欢的着色器并受启发",
    tags: [tags.learning, tags.community, tags.development]
  },
  {
    name: "Model Context Protocol",
    ico:
      "https://mintcdn.com/mcp/nMRF3-ucbVB_YX-J/_generated/favicon/favicon-32x32.png?maxW=32&n=nMRF3-ucbVB_YX-J&s=0744b0f56c6ad5b29603cfb37f240495",
    url: "https://modelcontextprotocol.io/docs/getting-started/intro",
    description: "MCP文档",
    tags: [tags.ai, tags.development]
  },
  {
    name: "fuck-u-code",
    ico: "/imgNull.png",
    url: "https://github.com/Done-0/fuck-u-code",
    description:
      '一个专为挖掘项目"屎坑"设计的代码质量分析工具，能无情揭露代码的丑陋真相，并用毫不留情的幽默语言告诉你：你的代码到底有多烂。',
    tags: [tags.tools, tags.openSource]
  },
  {
    name: "通义灵码",
    ico:
      "https://img.alicdn.com/imgextra/i1/O1CN01BN6Jtc1lCfJNviV7H_!!6000000004783-2-tps-134-133.png",
    url: "https://lingma.aliyun.com/",
    description: "灵动指间，快码加编，你的智能编码助手，支持MCP",
    tags: [tags.tools, tags.ai]
  },
  {
    name: "Cherry Studio",
    ico: "https://www.cherry-ai.com/assets/favicon-BmbgeFTf.png",
    url: "https://www.cherry-ai.com/",
    description: "支持多服务商集成的 AI 对话客户端，并且支持MCP服务",
    tags: [tags.tools, tags.ai]
  },
  {
    name: "ollama",
    ico: "https://ollama.com/public/icon-32x32.png",
    url: "https://ollama.com/",
    description:
      "本地大模型推理平台，支持用户通过命令行、HTTP API 和 OpenAI 客户端进行多样化的模型调用",
    tags: [tags.tools, tags.ai]
  },
  {
    name: "modelcontextprotocol / servers",
    ico: "/imgNull.png",
    url: "https://github.com/modelcontextprotocol/servers",
    description: "模型上下文协议服务器",
    tags: [tags.ai, tags.development]
  },
  {
    name: "MCP Servers",
    ico: "https://mcpservers.org/icon.png",
    url: "https://mcpservers.org/",
    description: "模型上下文协议的服务器集合",
    tags: [tags.ai]
  },
  {
    name: "魔搭社区",
    ico:
      "https://gw.alicdn.com/imgextra/i4/O1CN01PRJFWt1PU8nZDGIKZ_!!6000000001843-0-tps-128-128.jpg",
    url: "https://modelscope.cn/",
    description: "共享 · 共创 · 共进，构建持续创新的 AI 开源生态",
    tags: [tags.ai, tags.community]
  },
  {
    name: "Pixso",
    ico: "https://cms.pixso.cn/images/favicon.ico",
    url: "https://pixso.cn/",
    description:
      "Pixso，一站式完成原型、设计、交互与交付，为数字化团队协作提效",
    tags: [tags.design, tags.tools]
  },
  {
    name: "PromptPilot",
    ico:
      "https://lf3-static.bytdnsdoc.com/obj/eden-cn/lm_sth/ljhwZthlaukjlkulzlp/autope/logo/prompt-pilot.png",
    url: "https://promptpilot.volcengine.com/home",
    description:
      "专为大模型开发，PromptPilot为你提供更精准，专业，可持续迭代提示词！",
    tags: [tags.ai]
  },
  {
    name: "PDFgear",
    ico: "https://www.pdfgear.com/img/icon.png",
    url: "https://www.pdfgear.com/zh/",
    description: "完全免费的PDF软件",
    tags: [tags.tools]
  },
  {
    name: "ExcelJS",
    ico: "/imgNull.png",
    url: "https://github.com/exceljs/exceljs",
    description: "读取，操作并写入电子表格数据和样式到 XLSX 和 JSON 文件。",
    tags: [tags.development, tags.openSource]
  },
  {
    name: "CLion",
    ico: "https://pic1.imgdb.cn/item/6893023d58cb8da5c8095dcd.png",
    url: "https://www.jetbrains.com/clion/",
    description: "用于 C 和 C++ 的跨平台 IDE",
    tags: [tags.tools, tags.editor]
  },
  {
    name: "Remix Icon",
    ico: "https://remixicon.com/favicon.ico",
    url: "https://remixicon.com/",
    description:
      "为设计师和开发人员精心制作的开源中性风格系统符号。所有图标均免费用于个人和商业用途。",
    tags: [tags.icon, tags.resources]
  },
  {
    name: "IconGo",
    ico: "https://icongo.github.io/favicon.svg",
    url: "https://icongo.github.io/#/",
    description: "免费图标",
    tags: [tags.icon, tags.resources]
  },
  {
    name: "IconPark",
    ico: "https://lf1-cdn2-tos.bytegoofy.com/bydesign/iconparksite/logo.svg",
    url: "https://iconpark.oceanengine.com/home",
    description: "丰富多彩的资源库免费使用",
    tags: [tags.icon, tags.resources]
  },
  {
    name: "driver.js",
    ico: "https://driverjs.com/favicon.svg",
    url: "https://driverjs.com/",
    description:
      "轻量级 JavaScript 库，用于产品导览、亮点和上下文帮助，以引导用户浏览您的产品。",
    tags: [tags.web, tags.development]
  },
  {
    name: "Monokai Pro",
    ico:
      "https://monokai.gallerycdn.vsassets.io/extensions/monokai/theme-monokai-pro-vscode/2.0.7/1749042712341/Microsoft.VisualStudio.Services.Icons.Default",
    url:
      "https://marketplace.visualstudio.com/items?itemName=monokai.theme-monokai-pro-vscode",
    description: "专业的深浅主题+图标包，来自原始Monokai配色方案的作者",
    tags: [tags.plugin]
  },
  {
    name: "BB八字取名网",
    ico: "https://bbname.cc/favicon.ico",
    url: "https://bbname.cc/zh-CN/",
    description: "专业的八字命理分析，为宝宝打造独特而富有寓意的名字",
    tags: [tags.other]
  },
  {
    name: "游侠网",
    ico: "https://www.ali213.net/favicon.ico",
    url: "https://www.ali213.net/",
    description:
      "游侠网为单机游戏玩家提供最新单机游戏业界动态、国内外单机游戏下载、单机游戏补丁、单机游戏攻略秘籍、单机游戏专题等内容。坚守单机阵地，弘扬单机文化！",
    tags: [tags.game, tags.community]
  },
  {
    name: "3DM GAME",
    ico: "https://www.3dmgame.com/favicon.ico",
    url: "https://www.3dmgame.com/",
    description:
      "3DM游戏网为玩家提供最新的游戏新闻、攻略、单机游戏资源、汉化资源、游戏补丁、游戏论坛等，经过多年努力已成为游戏玩家首要选择的游戏资讯、游戏资源网站。",
    tags: [tags.game, tags.community]
  },
  {
    name: "<%= EJS %>",
    ico: "",
    url: "https://ejs.bootcss.com/",
    description: "高效的嵌入式 JavaScript 模板引擎。",
    tags: [tags.web, tags.development]
  },
  {
    name: "D3",
    ico: "https://d3.nodejs.cn/logo.png",
    url: "https://d3.nodejs.cn/",
    description:
      "用于定制数据可视化的JavaScript库，它基于Web标准构建的底层方法为创作动态数据驱动的图形提供了无与伦比的灵活性",
    tags: [tags.web, tags.development, tags.dataViz]
  },
  {
    name: "98.css",
    ico: "https://jdan.github.io/98.css/icon.png",
    url: "https://jdan.github.io/98.css/",
    description: "一个用于构建旧 UI 的忠实再现的组件库",
    tags: [tags.component, tags.web]
  },
  {
    name: "AsPoem | 现代化诗词学习网站",
    ico: "https://aspoem.com/favicon.ico",
    url: "https://aspoem.com/zh-Hans",
    description:
      "现代化的诗词学习网站，提供全站搜索，提供便捷的全站搜索功能，让您更快地查询律诗、绝句和各位诗人的作品。我们还优化了拼音标注、注释和白话文等的展示方式，使诗词更加易于阅读。",
    tags: [tags.learning]
  },
  {
    name: "优秀的开源项目",
    ico: "https://chencoding.top:8090/public/_media/logo.png",
    url: "https://chencoding.top:8090/#/",
    description: "不定期收集 Github、Gitee优秀的开源项目，并进行归类整理。",
    tags: [tags.openSource, tags.learning]
  },
  {
    name: "TresJS",
    ico: "https://tresjs.org/favicon.svg",
    url: "https://tresjs.org/",
    description: "使用Vue创建出色的3D体验",
    tags: [tags.web, tags.development, tags.modeling]
  },
  {
    name: "DFRobot",
    ico: "https://wiki.dfrobot.com.cn/favicon.ico",
    url: "https://wiki.dfrobot.com.cn/",
    description:
      "一个学习单片机的社区,有各种平台的项目和学习资料，比如arduino，没事可以逛一逛",
    tags: [tags.learning, tags.community, tags.hardware]
  },
  {
    name: "Snapdrop",
    ico: "https://drop.ioiox.com/images/favicon-96x96.png",
    url: "https://drop.ioiox.com/",
    description: "局域网文件传输",
    tags: [tags.tools],
    quickAccess: true
  },
  {
    name: "GrabCAD",
    ico: "https://d1pspl52z5rk07.cloudfront.net/static/favicon.ico",
    url: "https://grabcad.com/library",
    description:
      "这是一个非常受欢迎的平台，拥有大量的机械类3D模型，包括SolidWorks文件格式。用户需要注册才能下载模型",
    tags: [tags.resources, tags.hardware]
  },
  {
    name: "3DSOURCE 零件库",
    ico: "https://www.3dsource.cn/favicon.ico",
    url: "https://www.3dsource.cn/",
    description:
      "3DSOURCE零件库是国内领先的、用户规模庞大的3D零部件资源库，包含标准件、通用件和厂商件CAD模型，汇聚国内外众多品牌生产厂商；集产品展示、产品选型、模型下载、采购询盘为一体的3D零部件资源一站式互联平台",
    tags: [tags.resources, tags.hardware]
  },
  {
    name: "Raphael AI  艾斐尔",
    ico: "https://raphael.app/favicon.ico",
    url: "https://raphael.app/zh",
    description:
      "在几秒钟内创建令人惊叹的 AI 生成图像, 世界上第一个无限免费的 AI 图像生成器",
    tags: [tags.ai]
  },
  {
    name: "SeedHub",
    ico: "https://ps.aside.top/static/img/favicon.ico",
    url: "https://www.seedhub.cc/",
    description:
      "每天为您分享优质的电影、电视剧和动漫资讯。免费分享，无需注册，更新及时，我们致力打造最好的影视资讯分享站！",
    tags: [tags.amusement]
  },
  {
    name: "MAX动漫",
    ico: "https://cdn.jsdelivr.net/gh/zkk7/jsku@master/mxico.png",
    url: "https://www.mxdm6.com/",
    description:
      "MX动漫提供最新最快的在线观看动漫番剧资源，在线观看完全免费、无须注册、高速播放、更新及时的专业在线动漫网站，是樱花动漫外最好打的备用动漫网站。",
    tags: [tags.amusement]
  },
  {
    name: "BongoCat",
    ico:
      "https://camo.githubusercontent.com/14900c915862bb398116ca708a8402244ef6bba6fa99b84ae5bac1a84b2fd84e/68747470733a2f2f736f6369616c6966792e6769742e63692f6179616e677765622f426f6e676f4361742f696d6167653f637573746f6d5f6465736372697074696f6e3d266465736372697074696f6e3d3126666f6e743d536f757263652b436f64652b50726f26666f726b733d31266973737565733d31266c6f676f3d68747470732533412532462532466769746875622e636f6d2532466179616e67776562253246426f6e676f436174253246626c6f622532466d61737465722532467372632d74617572692532466173736574732532466c6f676f2d6d61632e706e6725334672617725334474727565266e616d653d31266f776e65723d31267061747465726e3d466c6f6174696e672b436f67732670756c6c733d31267374617267617a65723d31267468656d653d4175746f",
    url: "https://github.com/ayangweb/BongoCat",
    description: "跨平台桌宠",
    tags: [tags.other]
  },
  {
    name: "8bitcn-ui",
    ico: "https://www.8bitcn.com/favicon.ico?favicon.2f7bc62f.ico",
    url: "https://www.8bitcn.com/",
    description: "像素复古风格 UI 组件库",
    tags: [tags.component, tags.web]
  },
  {
    name: "沉浸式翻译",
    ico:
      "https://store-images.s-microsoft.com/image/apps.56263.d49a3368-918f-446f-8d8b-4dadb0f08e8e.cdbc41ed-1d7d-4505-afe8-a6a5e9625173.cee8f208-68bb-4658-8c00-42a1875c9156?mode=scale&h=100&q=90&w=100",
    url:
      "https://microsoftedge.microsoft.com/addons/detail/%E6%B2%89%E6%B5%B8%E5%BC%8F%E7%BF%BB%E8%AF%91-%E7%BD%91%E9%A1%B5%E7%BF%BB%E8%AF%91%E6%8F%92%E4%BB%B6-pdf%E7%BF%BB%E8%AF%91-/amkbmndfnliijdhojkpoglbnaaahippg",
    description:
      "【沉浸式翻译】免费的（原文/译文）双语对照网页翻译插件，支持PDF翻译（保留排版），视频双语字幕翻译（Youtube, Netflix），EPUB电子书翻译；支持人工智能AI翻译大模型（OpenAI (ChatGPT)、DeepL、Gemini(Bard) 等）",
    tags: [tags.plugin]
  },
  {
    name: "ttsmaker",
    ico:
      "https://ttsmaker.cn/static/v3_theme_01_asset/logo/favicon-32x32.png?version=2",
    url: "https://ttsmaker.cn/",
    description: "在线AI配音工具, 文本转音频",
    tags: [tags.tools, tags.ai]
  },
  {
    name: "tensorflow",
    ico:
      "https://www.gstatic.com/devrel-devsite/prod/v8d1d0686aef3ca9671e026a6ce14af5c61b805aabef7c385b0e34494acbfc654/tensorflow/images/favicon.png",
    url: "https://www.tensorflow.org/",
    description: "端到端机器学习平台",
    tags: [tags.ai, tags.development]
  },
  {
    name: "LM Studio",
    ico:
      "https://lmstudio.ai/_next/static/media/android-chrome-192x192.3a60873f.png",
    url: "https://lmstudio.ai/",
    description: "本地部署AI大模型",
    tags: [tags.ai, tags.tools]
  },
  {
    name: "小小API",
    ico: "https://xxapi.cn/favicon.ico",
    url: "https://xxapi.cn/",
    description: "免费API|快速稳定的免费API调用平台",
    tags: [tags.cloud]
  },
  {
    name: "WhyApi",
    ico: "",
    url: "https://apis.whyta.cn/",
    description: "一个免费的api调用平台，接口持续更新中...",
    tags: [tags.cloud]
  },
  {
    name: "BULMA",
    ico: "https://bulma.io/favicons/favicon.ico",
    url: "https://bulma.io/",
    description: "一个纯html,css,js打造的组件库",
    tags: [tags.component, tags.web]
  },
  {
    name: "electron",
    ico: "https://electron.nodejs.cn/assets/img/favicon.ico",
    url: "https://electron.nodejs.cn/",
    description: "使用 JavaScript、HTML 和 CSS 构建跨平台桌面应用",
    tags: [tags.development],
    recommend: true
  },
  {
    name: "Node SerialPort",
    ico: "https://serialport.io/img/serialport-logo.png",
    url: "https://serialport.io/",
    description: "使用 JavaScript 与您的串行设备通信",
    tags: [tags.hardware, tags.development],
    recommend: true
  },
  {
    name: "iLovePDF",
    ico: "https://www.ilovepdf.com/img/favicons-pdf/favicon-32x32.png",
    url: "https://www.ilovepdf.com/zh-cn",
    description:
      "完全免费、易于使用、丰富的PDF处理工具，包括：合并、拆分、压缩、转换、旋转和解锁PDF文件，以及给PDF文件添加水印的工具等。仅需几秒钟即可完成。",
    tags: [tags.tools]
  },
  {
    name: "PlatformIO IDE",
    ico:
      "https://platformio.gallerycdn.vsassets.io/extensions/platformio/platformio-ide/3.3.4/1736607344047/Microsoft.VisualStudio.Services.Icons.Default",
    url:
      "https://marketplace.visualstudio.com/items?itemName=platformio.platformio-ide",
    description:
      "卓越嵌入式软件开发的门户: CMSIS、esp-idf、FreeRTOS、libOpenCM3、mbed OS、SPL、STM32Cube、Zephyr RTOS、Arduino、ARM、AVR、Espressif (ESP8266/ESP32) 、FPGA、MCS-51 (8051) 、MSP430、Nordic (nRF51/nRF52) 、PIC32、risc-v、树莓派 (RP2040) 、意法半导体 (STM8/STM32)",
    tags: [tags.plugin, tags.hardware]
  },
  {
    name: "uCharts",
    ico: "https://www.ucharts.cn/v2/static/favicon.ico",
    url: "https://www.ucharts.cn/v2/#/",
    description: "uCharts跨平台图表库，全端全平台支持的图表库，开箱即用",
    tags: [tags.component, tags.dataViz]
  },
  {
    name: "反斗限免",
    ico: "https://free.apprcn.com/favicon.ico",
    url: "https://free.apprcn.com/",
    description: "各类限免信息网站",
    tags: [tags.resources, tags.tools, tags.game]
  },
  {
    name: "WinUI",
    ico: "https://learn.microsoft.com/zh-cn/windows/apps/images/logo-winui.png",
    url: "https://learn.microsoft.com/zh-cn/windows/apps/winui/",
    description:
      "WinUI 是适用于 Windows 桌面应用和 UWP 应用的本机用户体验 (UX) 框架。",
    tags: [tags.development]
  },
  {
    name: "鸠摩搜索",
    ico: "https://www.jiumodiary.com/images/favicon.png",
    url: "https://www.jiumodiary.com/",
    description: "书籍查找和下载",
    tags: [tags.learning, tags.resources]
  },
  {
    name: "MakerWorld",
    ico: "https://makerworld.com.cn/favicon_new.png",
    url: "https://makerworld.com.cn/zh",
    description:
      "行业领先的 3D 打印模型社区，为 3D 打印爱好者和设计师提供服务。免费提供海量 3D 模型和 STL 模型下载，是您寻找彩色 3D 模型的首选平台",
    tags: [tags.hardware, tags.resources]
  },
  {
    name: "芯查查",
    ico: "https://www.xcc.com/favicon.ico",
    url: "https://www.xcc.com/",
    description: "更全、更快的芯片数据查询",
    tags: [tags.hardware, tags.resources]
  },
  {
    name: "立创开源硬件平台",
    ico: "https://oshwhub.com/favicon.ico",
    url: "https://oshwhub.com/",
    description:
      "基于嘉立创EDA进行电路设计的硬件开源设计大本营,集嵌入式、电子模块、DIY设计、物联网、智能硬件、电子应用、电工电子等多种电路设计模块为一体的开源硬件平台",
    tags: [tags.hardware, tags.community],
    recommend: true
  },
  {
    name: "帽子云",
    ico: "https://www.maoziyun.com/favicon/favicon.png",
    url: "https://www.maoziyun.com/",
    description:
      "帽子云是一款集成化的静态网站部署平台，作为 Github Pages / Cloudflare Pages 的替代方案。它不仅提供更快的访问速度，还支持快速构建、扩展和部署前端服务。",
    tags: [tags.cloud]
  },
  {
    name: "AI工具集",
    ico: "https://ai-bot.cn/wp-content/uploads/2023/07/ai-bot-favicon.png",
    url: "https://ai-bot.cn/",
    description:
      "AI工具集官网收录了国内外数百个AI工具，该导航网站包括AI写作工具、AI图像生成和背景移除、AI视频制作、AI音频转录、AI辅助编程、AI音乐生成、AI绘画设计、AI对话聊天等AI工具集合大全，以及AI学习开发的常用网站、框架和模型，帮助你加入人工智能浪潮，自动化高效完成任务！",
    tags: [tags.ai, tags.tools]
  },
  {
    name: "即梦AI",
    ico:
      "https://lf3-lv-buz.vlabstatic.com/obj/image-lvweb-buz/common/images/dreamina-v1.ico",
    url: "https://jimeng.jianying.com/",
    description:
      "即梦AI一站式智能创作平台，即刻造梦。提供AI绘画和AIGC视频创作体验，拥有激发无限创作灵感的社区。让即梦AI开启您的智能创作之旅，探索梦境实现的无限可能！",
    tags: [tags.ai]
  },
  {
    name: "腾讯混元3D",
    ico:
      "https://cdn-3d-prod.hunyuan.tencent.com/public/static/logo/favicon.png",
    url: "https://3d.hunyuan.tencent.com/",
    description: "AI生成3D模型",
    tags: [tags.ai, tags.modeling]
  },
  {
    name: "Template0",
    ico: "https://template0.com/favicon.ico",
    url: "https://template0.com/",
    description:
      "产品、业务、登录页面、博客、投资组合、电子商务和管理仪表板所需的所有免费 Web 模板。",
    tags: [tags.template]
  },
  {
    name: "立创商城",
    ico: "https://static.szlcsc.com/ecp/assets/web/static/images/favicon.ico",
    url: "https://www.szlcsc.com/",
    description:
      "立创商城(SZLCSC.COM) 一站式电子元器件采购自营商城，拥有13万+平米智能化仓储，现货SKU品类超60万种，正品保证，支持一键BOM配单，最快4小时发货，为用户提供一站式电子元器件线上采购服务。",
    tags: [tags.hardware, tags.resources]
  },
  {
    name: "嘉立创",
    ico: "https://www.jlc.com/portal/favicon.ico",
    url: "https://www.jlc.com/",
    description:
      "嘉立创,电子及机械产业一站式基础设施服务提供商,提供pcb打样和批量生产服务,每天PCB打样出货超过20000款,最快12小时出货,在广东省内的珠海、惠州、韶关和江西吉安、江苏淮安等地建立了智能生产基地，专业生产PCB线路板(PCB打样,线路板,PCB,电路板,PCB线路板加工,PCB快板)的PCB厂家。提供一流、快速、专业的线路板、电路板、pcb打样服务。",
    tags: [tags.hardware, tags.resources]
  },
  {
    name: "Z-library",
    ico: "https://z-lib.gs/favicon.svg",
    url: "https://z-lib.gs/",
    description: "您通往知识和文化的门户。每个人都可以访问",
    tags: [tags.learning, tags.resources]
  },
  {
    name: "readest / readest",
    ico: "https://readest.com/icons/favicon.ico",
    url: "https://github.com/readest/readest",
    description:
      "Readest 是一款现代、功能丰富的电子书阅读器，专为狂热的读者设计，提供无缝的跨平台访问、强大的工具和直观的界面，以提升您的阅读体验。",
    tags: [tags.tools]
  },
  {
    name: "Electron⚡️Vite",
    ico: "https://vite.electron.js.cn/electron-vite.svg",
    url: "https://vite.electron.js.cn/",
    description: "将 Vite 应用轻松转换为 Electron 应用的最简单方法",
    tags: [tags.development]
  },
  {
    name: "78 / xiaozhi-esp32",
    ico: "/imgNull.png",
    url: "https://github.com/78/xiaozhi-esp32",
    description: "打造自己的 AI 好友",
    tags: [tags.ai, tags.hardware],
    recommend: true
  },
  {
    name: "努力上班，绝不摸鱼！",
    ico:
      "https://gw.alicdn.com/imgextra/i4/O1CN01rqtbDA1oTYo6vqI3E_!!6000000005226-73-tps-16-16.ico",
    url: "http://sbmy.fun/",
    description: "快速查看各大平台的的今日热榜话题",
    tags: [tags.other]
  },
  {
    name: "tensorflow / tfjs",
    ico: "/imgNull.png",
    url: "https://github.com/tensorflow/tfjs",
    description: "一个 WebGL 加速 JavaScript 库，用于训练和部署 ML 模型。",
    tags: [tags.development, tags.ai]
  },
  {
    name: "fabricjs / fabric.js",
    ico: "/imgNull.png",
    url: "https://github.com/fabricjs/fabric.js",
    description:
      "Javascript Canvas Library, SVG-to-Canvas (& canvas-to-SVG) Parser",
    tags: [tags.development]
  },
  {
    name: "cursor",
    ico: `https://www.cursor.com/favicon.ico`,
    url: "https://www.cursor.com/",
    description: "Cursor 旨在让您非常高效，是使用 AI 进行编码的最佳方式",
    tags: [tags.tools, tags.editor]
  },
  {
    name: "typicode / json-server",
    ico: "/imgNull.png",
    url: "https://github.com/typicode/json-server",
    description: "在不到 30 秒的时间内获得一个零编码的完整假 REST API",
    tags: [tags.development, tags.tools]
  },
  {
    name: "Cline (prev. Claude Dev)",
    ico:
      "https://saoudrizwan.gallerycdn.vsassets.io/extensions/saoudrizwan/claude-dev/3.1.5/1736472371825/Microsoft.VisualStudio.Services.Icons.Default",
    url:
      "https://marketplace.visualstudio.com/items?itemName=saoudrizwan.claude-dev",
    description:
      "IDE 中的自主编码代理，能够在您的许可下创建/编辑文件、运行命令、使用浏览器等。",
    tags: [tags.ai, tags.plugin]
  },
  {
    name: "deepseek",
    ico: "https://www.deepseek.com/favicon.ico",
    url: "https://www.deepseek.com/",
    description: "全新体验，无限可能",
    tags: [tags.ai],
    quickAccess: true
  },
  {
    name: "excalidraw / excalidraw",
    ico: "/imgNull.png",
    url: "https://github.com/excalidraw/excalidraw",
    description: "用于绘制手绘图表的虚拟白板，画图工具",
    tags: [tags.tools]
  },
  {
    name: "termux / termux-app",
    ico: "/imgNull.png",
    url: "https://github.com/termux/termux-app",
    description:
      "Termux - 适用于 Android 操作系统的终端仿真器应用程序，可通过各种软件包进行扩展。",
    tags: [tags.tools],
    recommend: true
  },
  {
    name: "robinmoisson / staticrypt",
    ico: "/imgNull.png",
    url: "https://github.com/robinmoisson/staticrypt",
    description:
      "密码保护静态 HTML 页面，在浏览器中以 JS 解密，无依赖项。无需服务器逻辑。",
    tags: [tags.web, tags.development]
  },
  {
    name: "unmagic / wechat-im",
    ico: "/imgNull.png",
    url: "https://github.com/unmagic/wechat-im",
    description: "微信小程序即时通讯模板，使用WebSocket通信",
    tags: [tags.web, tags.template]
  },
  {
    name: "idootop / MagicMirror",
    ico: "/imgNull.png",
    url: "https://github.com/idootop/MagicMirror",
    description: "一键 AI 换脸、发型、穿搭，发现更美的自己 ✨",
    tags: [tags.openSource, tags.ai]
  },
  {
    name: "HelloGithub",
    ico: "https://hellogithub.com/favicon/favicon-32x32.png",
    url: "https://hellogithub.com/",
    description:
      "HelloGitHub 开源社区，专注于发现和分享有趣、入门级的开源项目。在这里，探索开源技术解决方案，体验开源的乐趣，自荐或推荐开源项目，开启你的开源之旅。",
    tags: [tags.openSource, tags.learning, tags.community],
    quickAccess: true
  },
  {
    name: "google在线字体",
    ico:
      "https://www.gstatic.com/images/icons/material/apps/fonts/1x/catalog/v5/favicon.svg",
    url: "https://fonts.google.com/",
    description:
      "引入链接格式：http://fonts.googleapis.com/css?family=Titan One",
    tags: [tags.resources, tags.development]
  },
  {
    name: "matter.js",
    ico: "https://www.brm.io/img/icon/favicon-32x32.png",
    url: "https://www.brm.io/matter-js/",
    description: "是一个用于 Web 的 2D 物理引擎",
    tags: [tags.development, tags.web, tags.physics]
  },
  {
    name: "unity开发文档",
    ico:
      "https://docs.unity.cn/cn/current/StaticFiles/images/favicons/favicon.png",
    url: "https://docs.unity.cn/",
    description: "unity开发文档",
    tags: [tags.learning, tags.development]
  },
  {
    name: "dcloud开发者中心",
    ico: "https://ask.dcloud.net.cn/static/css/classblack/img/favicon.png",
    url: "https://dev.dcloud.net.cn/",
    description: "dcloud开发者中心",
    tags: [tags.cloud, tags.development]
  },
  {
    name: "BrainJS / brain.js",
    ico: "/imgNull.png",
    url: "https://github.com/BrainJS/brain.js",
    description: "🤖 GPU 加速 JavaScript 中的神经网络，适用于浏览器和 Node.js",
    tags: [tags.development, tags.ai]
  },
  {
    name: "public-apis / public-apis",
    ico: "/imgNull.png",
    url: "https://github.com/public-apis/public-apis",
    description: "免费 API 的集合列表",
    tags: [tags.development, tags.resources]
  },
  {
    name: "nilaoda / BBDown",
    ico: "/imgNull.png",
    url: "https://github.com/nilaoda/BBDown",
    description: "Bilibili Downloader. 一个命令行式哔哩哔哩下载器.",
    tags: [tags.tools]
  },
  {
    name: "matomo-org / matomo",
    ico: "/imgNull.png",
    url: "https://github.com/matomo-org/matomo",
    description: "网站数据统计",
    tags: [tags.tools, tags.development]
  },
  {
    name: "MarkMindCkm / obsidian-markmind",
    ico: "/imgNull.png",
    url: "https://github.com/MarkMindCkm/obsidian-markmind",
    description: "一个使用markdown为文件的思维导图软件",
    tags: [tags.tools]
  },
  {
    name: "yakGPT / yakGPT",
    ico: "/imgNull.png",
    url: "https://github.com/yakGPT/yakGPT",
    description: "本地运行chatGPT",
    tags: [tags.ai]
  },
  {
    name: "FirstUI（unix）组件库",
    ico: "https://unix.firstui.cn/favicon.ico",
    url: "https://unix.firstui.cn/",
    description:
      "FirstUI（unix）组件库，一款适配 uni-app x 的轻量、简洁、高效、全面的移动端组件库。（options Api 版）",
    tags: [tags.component, tags.development]
  },
  {
    name: "开源中国",
    ico: "https://static.oschina.net/new-osc/img/favicon.ico",
    url: "https://www.oschina.net/",
    description:
      "OSCHINA.NET 是目前领先的中文开源技术社区。我们传播开源的理念，推广开源项目，为 IT 开发者提供了一个发现、使用、并交流开源技术的平台",
    tags: [tags.community, tags.learning]
  },
  {
    name: "Reqable",
    ico: "https://reqable.com/zh-CN/img/favicon.ico",
    url: "https://reqable.com/zh-CN/",
    description:
      "代理调试 + 请求测试一站式解决方案。Reqable = Fiddler + Charles + Postman, 让API调试更快 🚀 更简单 👌",
    tags: [tags.tools]
  },
  {
    name: "高德开放平台（经纬度获取）",
    ico: "https://a.amap.com/pc/static/favicon.ico",
    url: "https://lbs.amap.com/tools/picker",
    description: "根据地区名，获取经纬度信息",
    tags: [tags.tools, tags.development]
  },
  {
    name: "blender",
    ico:
      "https://www.blender.org/wp-content/themes/bthree/assets/icons/favicon.svg",
    url: "https://www.blender.org/",
    description: "3D建模工具",
    tags: [tags.modeling, tags.tools],
    recommend: true
  },
  {
    name: "Spline 3D",
    ico: "https://spline.design/images/icon_favicon32x32.png",
    url: "https://spline.design/",
    description: "3D建模工具",
    tags: [tags.modeling, tags.tools]
  },
  {
    name: "阿里矢量图标库",
    ico:
      "https://img.alicdn.com/imgextra/i4/O1CN01Z5paLz1O0zuCC7osS_!!6000000001644-55-tps-83-82.svg",
    url: "https://www.iconfont.cn/home/index",
    description: "找找好看的图标吧",
    tags: [tags.icon, tags.resources]
  },
  {
    name: "animate",
    ico: "https://animate.style/img/favicon.ico",
    url: "https://animate.style/",
    description: "css的动画集合",
    tags: [tags.animation, tags.web]
  },
  {
    name: "swiper",
    ico: "https://www.swiper.com.cn/favicon.ico",
    url: "https://www.swiper.com.cn/",
    description: "开源，免费，强大的触摸滑动插件",
    tags: [tags.development, tags.web]
  },
  {
    name: "Can I use",
    ico: "https://caniuse.com/img/favicon-128.png",
    url: "https://caniuse.com/",
    description: "前端兼容性问题查询",
    tags: [tags.web, tags.development]
  },
  {
    name: "BetterScroll",
    ico: "https://better-scroll.github.io/docs/assets/bs.ico",
    url: "https://better-scroll.github.io/docs/zh-CN/",
    description: "优化页面滚动",
    tags: [tags.development, tags.web]
  },
  {
    name: "canvasJS",
    ico:
      "https://canvasjs.com/wp-content/uploads/images/favicon/canvasjs-favicon-32x32.png?v=1.1",
    url: "https://canvasjs.com/",
    description: "响应式HTML5图表库",
    tags: [tags.development, tags.web, tags.dataViz]
  },
  {
    name: "Chart.js",
    ico: "https://chartjs.bootcss.com/favicon.ico",
    url: "https://chartjs.bootcss.com/",
    description: "为设计和开发人员准备的简单、灵活的 JavaScript 图表工具",
    tags: [tags.development, tags.web, tags.dataViz]
  },
  {
    name: "Apache ECharts",
    ico: "https://echarts.apache.org/zh/images/favicon.png?_v_=20240226",
    url: "https://echarts.apache.org/",
    description: "一个基于 JavaScript 的开源可视化图表库",
    tags: [tags.development, tags.web, tags.dataViz]
  },
  {
    name: "uiverse",
    ico: "https://uiverse.io/favicon-32x32.png",
    url: "https://uiverse.io/",
    description: "适用于任何项目的开源 UI 元素",
    tags: [tags.development, tags.web]
  },
  {
    name: "Vue3 One Piece",
    ico: "https://static.vue-js.com/6280b990-ff19-11ea-85f6-6fac77c0c9b3.png",
    url: "https://vue3js.cn/",
    description: "vue的生态",
    tags: [tags.learning, tags.web]
  },
  {
    name: "92ui",
    ico: "https://92ui.net/wp-content/uploads/2022/02/UIlogo.png",
    url: "https://92ui.net/",
    description: "各类前端UI设计和源码分享，各种前端框架和工具导航",
    tags: [tags.development, tags.template, tags.web]
  },
  {
    name: "ICONS8",
    ico:
      "https://maxst.icons8.com/vue-static/landings/primary-landings/favs/icons8_fav_32%C3%9732.png",
    url: "https://icons8.com/",
    description: "拥有各种图标",
    tags: [tags.icon, tags.resources]
  },
  {
    name: "GSAP",
    ico: "https://gsap.com/favicon-32x32.png",
    url: "https://gsap.com/",
    description: "使用js实现的一个非常强大和专业的动画库",
    tags: [tags.animation, tags.web],
    recommend: true
  },
  {
    name: "mockaroo",
    ico: "https://mockaroo.com/favicon.ico",
    url: "https://mockaroo.com/",
    description:
      "允许您以 CSV、JSON、SQL 和 Excel 格式生成多达 1,000 行的真实测试数据",
    tags: [tags.tools]
  },
  {
    name: "Nav Nav+",
    ico: "https://navnav.co/favicon.ico",
    url: "https://navnav.co/",
    description: "UI元素",
    tags: [tags.web, tags.design]
  },
  {
    name: "Variant Form",
    ico: "http://vform666.cn/favicon.ico",
    url: "http://vform666.cn/",
    description: "一款高效的低代码表单",
    tags: [tags.development, tags.web, tags.lowCode]
  },
  {
    name: "npm仓库",
    ico:
      "https://static-production.npmjs.com/b0f1a8318363185cc2ea6a40ac23eeb2.png",
    url: "https://www.npmjs.com/",
    description: "建造令人惊奇的东西",
    tags: [tags.development, tags.projectManagement]
  },
  {
    name: "Mock.js",
    ico: "http://mockjs.com/assets/img/logo-2.svg",
    url: "http://mockjs.com/",
    description: "生成随机数据，拦截 Ajax 请求",
    tags: [tags.development]
  },
  {
    name: "HUGO",
    ico: "https://gohugo.io/favicon-32x32.png",
    url: "https://gohugo.io/",
    description: "世界上最快的网站构建框架",
    tags: [tags.development, tags.template]
  },
  {
    name: "JavaScript Rising Stars",
    ico: "https://risingstars.js.org/favicon.ico",
    url: "https://risingstars.js.org/",
    description: "了解每年JS生态系统的趋势",
    tags: [tags.learning, tags.web]
  },
  {
    name: "HTMLrev",
    ico: "https://htmlrev.com/images/favicon.png",
    url: "https://htmlrev.com/",
    description: "网站模板",
    tags: [tags.template]
  },
  {
    name: "threejs-journey",
    ico: "https://threejs-journey.com/assets/favicons/favicon.ico",
    url: "https://threejs-journey.com/",
    description: "可以学习three.js或者找找有关threeJS的作品",
    tags: [tags.learning, tags.web, tags.modeling]
  },
  {
    name: "cannon.js",
    ico: "",
    url: "https://schteppe.github.io/cannon.js/",
    description: "一个轻量级和简单的 Web 3D 物理引擎",
    tags: [tags.development, tags.web, tags.physics]
  },
  {
    name: "Day.js",
    ico: "https://dayjs.fenxianglu.cn/assets/favicon.png",
    url: "https://dayjs.fenxianglu.cn/",
    description: "可以为现代浏览器解析、验证、操作和显示日期和时间",
    tags: [tags.development, tags.web]
  },
  {
    name: "Bootstrap模板",
    ico: "https://www.bootstrapmb.com/favicon.ico",
    url: "https://www.bootstrapmb.com/",
    description: "高端HTML模板,学会偷懒,事半功倍",
    tags: [tags.template]
  },
  {
    name: "tailwindcss",
    ico: "https://tailwindcss.com/favicons/favicon.ico?v=3",
    url: "https://tailwindcss.com/",
    description: "快速构建现代网站，无需离开 HTML",
    tags: [tags.development, tags.web]
  },
  {
    name: "ScrollReveal",
    ico: "https://scrollrevealjs.org/favicon.ico",
    url: "https://scrollrevealjs.org/",
    description: "当元素滚动到视图中时，为元素添加动画效果",
    tags: [tags.development, tags.web, tags.animation]
  },
  {
    name: "Emoji中文网",
    ico: "https://www.emojiall.com/favicon.ico",
    url: "https://www.emojiall.com/zh-hans",
    description:
      "我们专注于Unicode表情符号，提供清晰的含义、使用示例、一键复制、高清/矢量素材以及高级搜索功能。借助AI和大数据，您将获得排行榜、趋势图、情感分析和语言学研究，助您深入探索表情符号的世界。",
    tags: [tags.icon, tags.resources]
  },
  {
    name: "cordova",
    ico: "https://cordova.apache.org/favicon.ico",
    url: "https://cordova.apache.ac.cn/",
    description:
      "使用HTML、CSS 和JS 构建移动应用,使用一个代码库 针对多个平台,免费且开源",
    tags: [tags.development, tags.web]
  },
  {
    name: "Lottie",
    ico: "https://airbnb.io/favicon.ico",
    url: "https://airbnb.io/lottie/#/",
    description:
      "ottie 是一个适用于 Android、iOS、Web 和 Windows 的库，它使用 Bodymovin 解析导出为 JSON 的 Adobe After Effects 动画，并在移动设备和 Web 上本地呈现它们！",
    tags: [tags.development, tags.animation]
  },
  {
    name: "vue",
    ico: "https://cn.vuejs.org/logo.svg",
    url: "https://cn.vuejs.org/",
    description: "易学易用，性能出色，适用场景丰富的 Web 前端框架.",
    tags: [tags.development, tags.learning, tags.web],
    recommend: true
  },
  {
    name: "react",
    ico: "https://react.docschina.org/favicon.ico",
    url: "https://react.docschina.org/",
    description: "用于构建 Web 和原生交互界面的库",
    tags: [tags.development, tags.learning, tags.web],
    recommend: true
  },
  {
    name: "vitepress",
    ico: "https://vitepress.dev/vitepress-logo-mini.svg",
    url: "https://vitepress.dev/",
    description: "Vite & Vue 驱动的静态站点生成器",
    tags: [tags.development, tags.web]
  },
  {
    name: "nuxt",
    ico: "https://nuxt.com.cn/icon.png",
    url: "https://nuxt.com.cn/",
    description: "创建高性能和生产级别的全栈Web应用和网站",
    tags: [tags.development, tags.web]
  },
  {
    name: "webpack",
    ico: "https://www.webpackjs.com/icon_144x144.png",
    url: "https://www.webpackjs.com/",
    description: "静态模块打包工具",
    tags: [tags.development, tags.web]
  },
  {
    name: "Vite",
    ico: "https://cn.vitejs.dev/logo.svg",
    url: "https://cn.vitejs.dev/",
    description: "下一代的前端工具链",
    tags: [tags.development, tags.web]
  },
  {
    name: "Mozilla",
    ico: "https://developer.mozilla.org/favicon-48x48.cbbd161b.png",
    url: "https://developer.mozilla.org/zh-CN/",
    description: "自 2005 年以来记录 Web 技术，包括 CSS、HTML 和 JavaScript",
    tags: [tags.learning, tags.web]
  },
  {
    name: "Component party",
    ico: "https://component-party.dev/favicon.png",
    url: "https://component-party.dev/",
    description: "站长极力推荐的一个各大框架对比学习的网站",
    tags: [tags.learning, tags.web],
    recommend: true
  },
  {
    name: "React Native",
    ico: "https://reactnative.cn/img/favicon.ico",
    url: "https://reactnative.cn/",
    description: "使用React来创建 Android 和 iOS 的原生应用",
    tags: [tags.development, tags.web],
    recommend: true
  },
  {
    name: "uni-app",
    ico:
      "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/icon.png?v=1556263038788",
    url: "https://uniapp.dcloud.net.cn/",
    description: "使用Vue进行跨端开发",
    tags: [tags.development, tags.web],
    recommend: true
  },
  {
    name: "threeJS",
    ico: "https://threejs.org/files/favicon.ico",
    url: "https://threejs.org/",
    description: "开发你的3d网站吧",
    tags: [tags.development, tags.web, tags.modeling],
    recommend: true
  },
  {
    name: "高德开放平台",
    ico: "https://a.amap.com/pc/static/favicon.ico",
    url: "https://lbs.amap.com/",
    description: "开发地图神器",
    tags: [tags.development, tags.web]
  },
  {
    name: "GitHub文档",
    ico: "https://docs.kkgithub.com/assets/cb-345/images/site/favicon.png",
    url: "https://docs.kkgithub.com/zh",
    description: "在 GitHub 旅程中随时为你提供帮助",
    tags: [tags.development, tags.learning]
  },
  {
    name: "javascript.info",
    ico: "https://zh.javascript.info/img/favicon/favicon.png",
    url: "https://zh.javascript.info/",
    description:
      "以最新的 JavaScript 标准为基准。通过简单但足够详细的内容，为你讲解从基础到高阶的 JavaScript 相关知识。",
    tags: [tags.learning, tags.web]
  },
  {
    name: "Three.js中文网",
    ico: "http://webgl3d.cn/img/favicon.ico",
    url: "http://webgl3d.cn/",
    description: "创作你的3d网站",
    tags: [tags.development, tags.web, tags.modeling]
  },
  {
    name: "pixiJS",
    ico: "https://pixijs.com/images/favicon.png",
    url: "https://pixijs.com/",
    description: "使用最快、最灵活的 2D WebGL 渲染器创建精美的数字内容。",
    tags: [tags.development, tags.web]
  },
  {
    name: "w3school",
    ico: "https://www.w3school.com.cn/ui2019/logo-32-red.png",
    url: "https://www.w3school.com.cn/",
    description: "领先的 Web 技术教程 - 全部免费",
    tags: [tags.learning, tags.web]
  },
  {
    name: "phaser",
    ico: "https://phaser.io/favicon.ico",
    url: "https://phaser.io/",
    description: "Javascript 游戏框架",
    tags: [tags.development, tags.web, tags.game]
  },
  {
    name: "rollup.js",
    ico: "https://rollupjs.org/favicon.png",
    url: "https://rollupjs.org/",
    description: "打包工具",
    tags: [tags.development, tags.web]
  },
  {
    name: "pinia",
    ico: "https://pinia.vuejs.org/logo.svg",
    url: "https://pinia.vuejs.org/zh/",
    description: "符合直觉的 Vue.js 状态管理库",
    tags: [tags.development, tags.web]
  },
  {
    name: "uv-ui",
    ico: "https://www.uvui.cn/favicon.ico",
    url: "https://www.uvui.cn/",
    description:
      "兼容vue3+2、nvue、app、h5、小程序等多端基于uni-app和uView2.x的生态框架",
    tags: [tags.development, tags.component, tags.web]
  },
  {
    name: "Semantic UI",
    ico: "https://semantic-ui.com/favicon.ico",
    url: "https://semantic-ui.com/",
    description: "使用人性化的 HTML 创建美观、响应迅速的布局",
    tags: [tags.development, tags.component, tags.web]
  },
  {
    name: "Ant Design Vue",
    ico: "https://aliyuncdn.antdv.com/favicon.ico",
    url: "https://www.antdv.com/",
    description: "一款优美的UI框架",
    tags: [tags.development, tags.component, tags.web]
  },
  {
    name: "Element Plus",
    ico: "https://element-plus.org/images/element-plus-logo-small.svg",
    url: "https://element-plus.org/zh-CN/",
    description: "基于Vue3，面向设计师和开发者的组件库",
    tags: [tags.development, tags.component, tags.web]
  },
  {
    name: "Vant",
    ico: "https://fastly.jsdelivr.net/npm/@vant/assets/logo.png",
    url: "https://vant-ui.github.io/vant/#/zh-CN",
    description: "轻量、可定制的移动端 Vue 组件库",
    tags: [tags.development, tags.component, tags.web]
  },
  {
    name: "daisyUI",
    ico: "https://img.daisyui.com/images/daisyui-logo/daisyui-logomark.svg",
    url: "https://daisyui.com/",
    description: "最流行的组件库为Tailwind CSS",
    tags: [tags.development, tags.component, tags.web]
  },
  {
    name: "Ant Design",
    ico: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
    url: "https://ant.design/index-cn",
    description: "react组件库",
    tags: [tags.development, tags.component, tags.web]
  },
  {
    name: "Geist",
    ico: "https://geist-ui.dev/favicon.ico",
    url: "https://geist-ui.dev/zh-cn",
    description: "react组件库",
    tags: [tags.development, tags.component, tags.web]
  },
  {
    name: "Vant Weapp",
    ico: "https://img01.yzcdn.cn/vant/logo.png",
    url: "https://vant.pro/vant-weapp/#/home",
    description: "轻量、可靠的小程序 UI 组件库",
    tags: [tags.development, tags.component, tags.web]
  },
  {
    name: "Naive UI",
    ico: "https://www.naiveui.com/assets/naivelogo-BdDVTUmz.svg",
    url: "https://www.naiveui.com/zh-CN/os-theme",
    description:
      "一个 Vue 3 组件库,比较完整，主题可调，使用 TypeScript，快,有点意思",
    tags: [tags.development, tags.component, tags.web]
  },
  {
    name: "Poly Haven",
    ico: "https://polyhaven.com/favicon.ico",
    url: "https://polyhaven.com/zh",
    description: "公共3D资源库, 可以下载three3D的天空盒素材图片",
    tags: [tags.resources, tags.modeling]
  },
  {
    name: "threedscans",
    ico:
      "https://threedscans.com/wp-content/uploads/2022/04/cropped-siteicon-32x32.jpg",
    url: "https://threedscans.com/",
    description: "3D素材，主要为雕塑",
    tags: [tags.resources, tags.modeling]
  },
  {
    name: "Z-Library",
    ico: "https://zh.z-lib.gs/favicon.svg",
    url: "https://zh.z-lib.gs/",
    description: "可以浏览和下载各种书籍",
    tags: [tags.resources, tags.learning]
  },
  {
    name: "DOTOWN",
    ico:
      "https://dotown.maeda-design-room.net/wp-content/uploads/2022/01/favicon.png",
    url: "https://dotown.maeda-design-room.net/",
    description: "一些超好看的像素素材",
    tags: [tags.resources, tags.design]
  },
  {
    name: "kenney",
    ico: "https://kenney.nl/favicon.ico",
    url: "https://kenney.nl/",
    description: "数以千计的完全免费的游戏资产供您使用。",
    tags: [tags.resources, tags.game]
  },
  {
    name: "CraftPix.Net",
    ico: "https://craftpix.net/favicon/favicon.ico",
    url: "https://craftpix.net/",
    description: "2D游戏资产商店&免费",
    tags: [tags.resources, tags.game]
  },
  {
    name: "ambientCG",
    ico:
      "https://acg-media.struffelproductions.com/file/ambientCG-Web/media/icon/favicon.ico",
    url: "https://ambientcg.com/",
    description: "有很多纹理素材",
    tags: [tags.resources, tags.design]
  },
  {
    name: "AssetStore",
    ico: "https://assetstore.unity.com/favicon.ico",
    url: "https://assetstore.unity.com/zh-CN",
    description: "Unity的素材商店市场",
    tags: [tags.resources, tags.game]
  },
  {
    name: "vectorCraftr",
    ico: "https://vectorcraftr.com/images/icons/favicon.ico",
    url: "https://vectorcraftr.com/",
    description: "一些好看的插画",
    tags: [tags.resources, tags.design]
  },
  {
    name: "爱给网",
    ico: "https://cdn-sqn.aigei.com/assets/site/img/icon/favicon.ico",
    url: "https://www.aigei.com/",
    description:
      "音效,配乐,3d模型,游戏素材,影视后期,视频素材,免费下载,音乐,特效,模版",
    tags: [tags.resources]
  },
  {
    name: "Color Hunt",
    ico: "https://colorhunt.co/img/colorhunt-favicon.svg?2",
    url: "https://colorhunt.co/",
    description: "设计师和艺术家的调色板",
    tags: [tags.tools, tags.design]
  },
  {
    name: "站酷",
    ico:
      "https://static.zcool.cn/git_z/z/site/favicon.ico?version=1618914637608",
    url: "https://www.zcool.com.cn/",
    description: "上面或许有你需要的ui作品",
    tags: [tags.design, tags.community]
  },
  {
    name: "clip-path生成器",
    ico: "https://www.jiangweishan.com/tool/clippy/pics/favicon.png",
    url: "https://www.jiangweishan.com/tool/clippy/",
    description: "可以生成各种clip-path路径",
    tags: [tags.tools, tags.web]
  },
  {
    name: "佐糖",
    ico:
      "https://qncdn.aoscdn.com/astro/picwish/_astro/favicon@30w.61721eae.png",
    url: "https://picwish.cn/",
    description: "用AI让图像处理",
    tags: [tags.tools, tags.ai]
  },
  {
    name: "标小智",
    ico: "https://www.logosc.cn/img/logo-icons/favicon.png?v=1",
    url: "https://www.logosc.cn/",
    description: "智能LOGO设计生成器",
    tags: [tags.tools, tags.ai]
  },
  {
    name: "易转换",
    ico: "https://www.easeconvert.com/favicon.ico",
    url: "https://www.easeconvert.com/",
    description: "免费好用的文件转换工具",
    tags: [tags.tools]
  },
  {
    name: "写作猫",
    ico:
      "https://uranus-static.oss-accelerate.aliyuncs.com/xiezuocat/favicon.ico",
    url: "https://xiezuocat.com/",
    description: "把写作交给ai",
    tags: [tags.ai]
  },
  {
    name: "ico51",
    ico: "https://www.ico51.cn/favicon.ico",
    url: "https://www.ico51.cn/",
    description: "图片格式转换(ico)",
    tags: [tags.tools]
  },
  {
    name: "CloudConvert",
    ico: "https://cloudconvert.com/images/logo_flat_32.png",
    url: "https://cloudconvert.com/",
    description: "在线文件转换器",
    tags: [tags.tools]
  },
  {
    name: "帮小忙",
    ico: "https://tool.browser.qq.com/favicon.ico",
    url: "https://tool.browser.qq.com/",
    description: "在线工具箱",
    tags: [tags.tools]
  },
  {
    name: "uTools",
    ico: "https://res.u-tools.cn/website5/assets/favicon.png",
    url: "https://www.u.tools/",
    description: "新一代效率工具平台",
    tags: [tags.tools]
  },
  {
    name: "lingdaima",
    ico: "https://lingdaima.com/static/img/bolang.png",
    url: "https://lingdaima.com/",
    description: "零代码工具箱 - 专为前端打造",
    tags: [tags.tools, tags.lowCode]
  },
  {
    name: "Android Asset Studio",
    ico: "https://romannurik.github.io/AndroidAssetStudio/favicon.ico",
    url: "https://romannurik.github.io/AndroidAssetStudio/",
    description: "App应用图标生成",
    tags: [tags.development, tags.tools]
  },
  {
    name: "ezgifcom",
    ico: "https://ezgif.com/favicon.ico",
    url: "https://ezgif.com/",
    description: "在线GIF制作器和图像编辑器",
    tags: [tags.tools]
  },
  {
    name: "开发者客栈",
    ico: "https://static.developers.pub/8a71a71bc1ae403cbeb5b8e6230cb016.ico",
    url: "https://www.developers.pub/resume",
    description: "简历制作",
    tags: [tags.tools]
  },
  {
    name: "江下科技",
    ico: "https://www.onlinedo.cn/favicon.ico",
    url: "https://www.onlinedo.cn/video-gif",
    description: "视频转gif文件",
    tags: [tags.tools]
  },
  {
    name: "HDRI-to-CubeMap",
    ico: "",
    url: "https://matheowis.github.io/HDRI-to-CubeMap/",
    description: "用来分割在Poly Haven找到的HDRI素材",
    tags: [tags.tools, tags.modeling]
  },
  {
    name: "影刀",
    ico: "https://winrobot-pub-a-oss.winrobot360.com/static/home/favicon.ico",
    url: "https://www.yingdao.com/",
    description: "我们创造软件机器人，让人不需要像机器一样工作",
    tags: [tags.tools, tags.ai]
  },
  {
    name: "91化简",
    ico: "https://91huajian.cn/favicon.ico",
    url: "https://91huajian.cn/",
    description: "一款开源的，免费的简历设计制作神器",
    tags: [tags.tools]
  },
  {
    name: "云搭",
    ico: "https://www.sunmao-design.top/sunmao/admin/assets/logo.896aa176.png",
    url: "https://www.sunmao-design.top/sunmao/admin/#/dooring/home",
    description: "零代码搭建小程序、H5、问卷、图文",
    tags: [tags.tools, tags.cloud, tags.lowCode]
  },
  {
    name: "JSON CRACK",
    ico: "https://jsoncrack.com/favicon.ico",
    url: "https://jsoncrack.com/",
    description: "将 JSON 可视化为交互式图形",
    tags: [tags.tools, tags.dataViz]
  },
  {
    name: "GIF中文网",
    ico: "https://www.gif.cn/favicon.ico",
    url: "https://www.gif.cn/",
    description: "GIF图片制作，视频转GIF，GIF图片素材",
    tags: [tags.tools]
  },
  {
    name: "CodeGeeX",
    ico: "https://codegeex.cn/assets/images/only_logo_dark.png",
    url: "https://codegeex.cn/",
    description: "智能编程助手",
    tags: [tags.ai]
  },
  {
    name: "OpenAI",
    ico: "https://openai.com/favicon.ico",
    url: "https://openai.com/",
    description: "拥有最强的chatGPT",
    tags: [tags.ai]
  },
  {
    name: "豆包",
    ico:
      "https://p9-flow-imagex-sign.byteimg.com/ocean-cloud-tos/FileBizType.BIZ_BOT_ICON/4180773176086868_1709203591079450233_5Y6fJgvsfc.jpeg~tplv-a9rns2rl98-icon-tiny.jpeg?rk3s=9956f44f&x-expires=1719224007&x-signature=9IuG%2Bqi7IY2zIKhKL8%2FmdgUc9tI%3D",
    url: "https://www.doubao.com/",
    description: "豆包 - 抖音旗下 AI 智能助手",
    tags: [tags.ai]
  },
  {
    name: "通义千问",
    ico: "https://acd-assets.alicdn.com/acd_work/tongyi-portal/assets/logo.svg",
    url: "https://www.tongyi.com/",
    description:
      "阿里达摩院推出的大模型，拥有千亿参数，可用于智能问答、知识检索、文案创作等场景",
    tags: [tags.ai],
    quickAccess: true
  },
  {
    name: "星火大模型",
    ico: "https://xinghuo.xfyun.cn/spark-icon.ico",
    url: "https://xinghuo.xfyun.cn/",
    description:
      "科大讯飞推出的AI大模型，支持对话、写作、编程等功能，还能提供语音交互方式",
    tags: [tags.ai]
  },
  {
    name: "AI Filter",
    ico: "https://aifilter.net/static/images/common/favicon.ico",
    url: "https://aifilter.net/",
    description:
      "使用 AI 滤镜将您的照片转换为动漫、粘土、3D、像素、表情符号、PS2、贴纸和更多样式。非常适合初学者和专业人士，只需点击几下即可。",
    tags: [tags.ai]
  },
  {
    name: "chatnio",
    ico: "https://chatnio.net/favicon.ico",
    url: "https://chatnio.net/",
    description: "一个各种ai模型集合的网站",
    tags: [tags.ai]
  },
  {
    name: "TRIPO",
    ico: "https://www.tripo3d.ai/v1/favicon.png",
    url: "https://www.tripo3d.ai/",
    description: "ai生成3D模型",
    tags: [tags.ai, tags.modeling]
  },
  {
    name: "aifacefy",
    ico: "https://aifacefy.com/icon.svg?d4bc701fa93cbc90",
    url: "https://aifacefy.com/",
    description: "免费 AI 换脸",
    tags: [tags.ai]
  },
  {
    name: "GoEnance",
    ico:
      "https://cdn.goenhance.ai/images/static/sites/goenhance-logo-drak-200.png",
    url: "https://www.goenhance.ai/",
    description: "在几分钟内创建 AI 动画短片",
    tags: [tags.ai, tags.animation]
  },
  {
    name: "LeanCloud",
    ico: "https://www.leancloud.cn/favicon.ico",
    url: "https://www.leancloud.cn/",
    description: "可以存储数据，用户信息的云平台",
    tags: [tags.cloud],
    recommend: true
  },
  {
    name: "vercel",
    ico:
      "https://assets.vercel.com/image/upload/front/favicon/vercel/favicon.ico",
    url: "https://vercel.com/",
    description: "自动化部署项目",
    tags: [tags.development, tags.cloud],
    recommend: true
  },
  {
    name: "Uploadcare",
    ico: "https://ucarecdn.com/27856246-9e5a-41a4-8098-f4cf1d006ef1/",
    url: "https://uploadcare.com/",
    description: "上传、存储、转换、优化图像、视频和文档",
    tags: [tags.cloud]
  },
  {
    name: "多吉云",
    ico: "https://www.dogecloud.com/favicon.png",
    url: "https://www.dogecloud.com/",
    description: "云存储，网站加速",
    tags: [tags.cloud]
  },
  {
    name: "Lightly",
    ico: "https://lightly.teamcode.com/favicon.svg",
    url: "https://lightly.teamcode.com/",
    description: "让写代码变得更简单",
    tags: [tags.cloud, tags.development]
  },
  {
    name: "Github",
    ico: "https://github.githubassets.com/favicons/favicon.png",
    url: "https://github.com/",
    description: "全球领先的人工智能开发者平台",
    tags: [tags.cloud, tags.community, tags.projectManagement],
    recommend: true,
    quickAccess: true
  },
  {
    name: "Gitee",
    ico: "https://gitee.com/favicon.ico",
    url: "https://gitee.com/",
    description: "DevOps一站式研发效能平台",
    tags: [tags.cloud, tags.community, tags.projectManagement],
    recommend: true
  },
  {
    name: "路过图传",
    ico:
      "https://imgse.com/content/images/system/favicon_1587118523486_91617a.png",
    url: "https://imgse.com/",
    description: "免费图片上传",
    tags: [tags.cloud]
  },
  {
    name: "聚合图床",
    ico: "https://www.superbed.cn/favicon.ico",
    url: "https://www.superbed.cn/",
    description: "免费图片上传",
    tags: [tags.cloud]
  },
  {
    name: "jsdelivr",
    ico: "https://www.jsdelivr.com/favicon.ico",
    url: "https://www.jsdelivr.com/",
    description: "开源项目的免费 CDN",
    tags: [tags.cloud]
  },
  {
    name: "cdnjs",
    ico: "https://cdnjs.com/favicon.png",
    url: "https://cdnjs.com/",
    description: "免费的开源 CDN 服务",
    tags: [tags.cloud]
  },
  {
    name: "Gitlab",
    ico:
      "https://gitlab.com/assets/favicon-72a2cad5025aa931d6ea56c3201d1f18e68a8cd39788c7c80d5b2b82aa5143ef.png",
    url: "https://gitlab.com/",
    description: "项目存储与版本管理",
    tags: [tags.cloud]
  },
  {
    name: "codepen",
    ico:
      "https://cpwebassets.codepen.io/assets/favicon/favicon-aec34940fbc1a6e787974dcd360f2c6b63348d4b1f4e06c77743096d55480f33.ico",
    url: "https://codepen.io/",
    description:
      "CodePen 是面向前端设计人员和开发人员的社交开发环境。构建和部署网站，展示您的作品，构建测试用例以学习和调试，并寻找灵感。",
    tags: [tags.cloud, tags.community]
  },
  {
    name: "GitCode",
    ico: "https://cdn-static.gitcode.com/static/images/logo-favicon.png",
    url: "https://gitcode.com/",
    description: "代码仓库",
    tags: [tags.cloud]
  },
  {
    name: "Biofy",
    ico: "https://biofy.cn/favicon.ico",
    url: "https://biofy.cn/",
    description: "拼接、聚合你的多元化世界",
    tags: [tags.cloud]
  },
  {
    name: "BUUCTF",
    ico: "https://buuoj.cn/themes/buu_core/static/img/favicon.ico",
    url: "https://buuoj.cn/",
    description: "ctf我不会",
    tags: [tags.security]
  },
  {
    name: "WgpSec CTF",
    ico:
      "https://ctf.wgpsec.org/files/4aecfc78e9fe458cbd934aacc69ffd94/favicon.ico",
    url: "https://ctf.wgpsec.org/",
    description: "打CTF怎么能没有电竞椅呢!",
    tags: [tags.security]
  },
  {
    name: "稀土掘金",
    ico:
      "https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/static/favicons/favicon-32x32.png",
    url: "https://juejin.cn/",
    description: "一个很好的开发者社区，可以看看大佬的各种文章",
    tags: [tags.learning, tags.community],
    recommend: true,
    quickAccess: true
  },
  {
    name: "CSDN",
    ico: "https://g.csdnimg.cn/static/logo/favicon32.ico",
    url: "https://www.csdn.net/",
    description: "各种技术文章都在这里",
    tags: [tags.learning, tags.community],
    recommend: true
  },
  {
    name: "bilibili",
    ico:
      "https://th.bing.com/th?id=ODLS.e42d2c4d-ad65-4c7a-b0fd-817a1c3bed01&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2",
    url: "https://www.bilibili.com/",
    description: "视频教学网站，学习各种知识",
    tags: [tags.learning, tags.community]
  },
  {
    name: "中国独立开发者项目",
    ico: "https://developer.hubing.online/favicon.png",
    url: "https://developer.hubing.online",
    description: "各种大佬的项目",
    tags: [tags.learning]
  },
  {
    name: "roadmap",
    ico: "https://roadmap.sh/manifest/favicon.ico",
    url: "https://roadmap.sh/",
    description:
      "roadmap.sh 是社区努力的结果 创建路线图、指南和其他教育内容以帮助指导开发人员 在选择一条道路并指导他们的学习。",
    tags: [tags.learning]
  },
  {
    name: "ProjectHunt",
    ico: "https://projecthunt.me/favicon.ico",
    url: "https://projecthunt.me/",
    description: "发现和分享出色的项目",
    tags: [tags.learning]
  },
  {
    name: "思否",
    ico: "https://static.segmentfault.com/main_site_next/dc3490f3/favicon.ico",
    url: "https://segmentfault.com/",
    description: "技术分享",
    tags: [tags.learning, tags.community],
    recommend: true
  },
  {
    name: "flysheep",
    ico:
      "https://images.weserv.nl/?url=https://r534.com/flysheep/i/2023/02/25/5fgq.jpg",
    url: "https://www.flysheep6.com/",
    description: "看看有没有你喜欢的游戏吧",
    tags: [tags.game]
  },
  {
    name: "悟空神辅",
    ico: "http://www.5kfz.com/favicon.ico",
    url: "http://www.5kfz.com/",
    description: "洛克们，开启你的辅助之旅吧",
    tags: [tags.game]
  },
  {
    name: "多邻国",
    ico: "https://d35aaqx5ub95lt.cloudfront.net/favicon.ico",
    url: "https://www.duolingo.cn/",
    description: "学习英语神器",
    tags: [tags.learning]
  },
  {
    name: "力扣",
    ico: "https://leetcode.cn/favicon.ico",
    url: "https://leetcode.cn/",
    description: "算法题就靠它了",
    tags: [tags.learning, tags.community],
    recommend: true
  },
  {
    name: "Shields.io",
    ico: "https://shields.io/img/favicon.ico",
    url: "https://shields.io/",
    description: "简洁、一致且易读的徽章",
    tags: [tags.development]
  },
  {
    name: "wallspic",
    ico: "https://wallspic.com/static/images/favicon/favicon-32x32.png",
    url: "https://wallspic.com/",
    description: "看看有没有好看的壁纸吧!",
    tags: [tags.other]
  },
  {
    name: "Qwerty Learner",
    ico: "https://qwerty.kaiyi.cool/favicon.ico",
    url: "https://qwerty.kaiyi.cool/",
    description: "不想记单词",
    tags: [tags.learning]
  },
  {
    name: "Vue.js挑战",
    ico: "https://cn-vuejs-challenges.netlify.app/favicon.ico",
    url: "https://cn-vuejs-challenges.netlify.app/",
    description: "一个Vue.js在线挑战平台",
    tags: [tags.learning]
  },
  {
    name: "SVG Filters",
    ico: "https://yoksel.github.io/favicon.ico",
    url: "https://yoksel.github.io/svg-filters/#/",
    description: "各种svg的滤镜效果",
    tags: [tags.development]
  },
  {
    name: "Quick Reference",
    ico:
      "data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%221em%22%20width%3D%221em%22%3E%20%3Cpath%20d%3D%22m21.66%2010.44-.98%204.18c-.84%203.61-2.5%205.07-5.62%204.77-.5-.04-1.04-.13-1.62-.27l-1.68-.4c-4.17-.99-5.46-3.05-4.48-7.23l.98-4.19c.2-.85.44-1.59.74-2.2%201.17-2.42%203.16-3.07%206.5-2.28l1.67.39c4.19.98%205.47%203.05%204.49%207.23Z%22%20fill%3D%22%23c9d1d9%22%2F%3E%20%3Cpath%20d%3D%22M15.06%2019.39c-.62.42-1.4.77-2.35%201.08l-1.58.52c-3.97%201.28-6.06.21-7.35-3.76L2.5%2013.28c-1.28-3.97-.22-6.07%203.75-7.35l1.58-.52c.41-.13.8-.24%201.17-.31-.3.61-.54%201.35-.74%202.2l-.98%204.19c-.98%204.18.31%206.24%204.48%207.23l1.68.4c.58.14%201.12.23%201.62.27Zm2.43-8.88c-.06%200-.12-.01-.19-.02l-4.85-1.23a.75.75%200%200%201%20.37-1.45l4.85%201.23a.748.748%200%200%201-.18%201.47Z%22%20fill%3D%22%23228e6c%22%20%2F%3E%20%3Cpath%20d%3D%22M14.56%2013.89c-.06%200-.12-.01-.19-.02l-2.91-.74a.75.75%200%200%201%20.37-1.45l2.91.74c.4.1.64.51.54.91-.08.34-.38.56-.72.56Z%22%20fill%3D%22%23228e6c%22%20%2F%3E%20%3C%2Fsvg%3E",
    url: "https://quickref.cn/",
    description: "为开发人员分享快速参考备忘清单",
    tags: [tags.learning]
  },
  {
    name: "UomgAPI",
    ico: "https://api.uomg.com/assets/favicon.ico",
    url: "https://api.uomg.com/",
    description: "稳定、快速、免费的 API 接口服务",
    tags: [tags.cloud]
  },
  {
    name: "堆友",
    ico:
      "https://static-ddesign.oss-cn-beijing.aliyuncs.com/2024/01/10/c501f10f7dd4b2b3?OSSAccessKeyId=STS.NUDkViXJ8tpLZJDNXHQnazvBQ&Expires=1715786273&Signature=E4Oi7JjYrWiCJlMMddRoLkC5BmM%3D&response-content-disposition=attachment%3B%20filename%3D%221678341712313_47242a3527a615cb4fd8f42745d48fef.png%22&security-token=CAIS3QJ1q6Ft5B2yfSjIr5bxIOzdtZUZw7KnWGz1qlgdXeFNlbPpszz2IHhMdHdoBOgfsf8wmG1Q7Pgelqp6U4cdoPYY41QpvPpt6gqET9froq7ctM4A6vCMHWyUFGS0vqv7aPn4S9XwY%2Bqkb0u%2B%2BAZ43br9c0fFPTmiKobbppN7Sd4VUwKkF2gkYu1bPQx%2FssQXGGLMPPK2SH7Qj3HXEVBjt3gK6xd24r%2FtxdaHuFiMzg%2Fh1uYJpo%2B0LpSpdMhjOtA9ca%2FshbcpJ%2Fqbjn4LtkQarfkstsEep2eb5OP6KkJK%2FhCLP9DT9tBSNwJjbsA4YfUc9KiizaAg47OIyNiqk0wTYfs6XyjSX4Gvxtsu5H8tjWHTH1ySGQMusrjnXvGd22uv4ecJv6JVUJOnpivFg%2FiAnq0%2BhovmmTaEK07oIIPu25otuqEetH7z9rGRTDviLfjnl0hRVPAyB5dZZYhItQSJGoABjt6Pr2F7wcwrJXrvVdCtJqubR%2BKPZ5pcYv%2Baby8qR%2FTy%2BZIofJgjqjhaPxXXxJiSa8sneCw%2BEO7MIe3clS45HPYCuUV88%2FpkSDOfN9txJ0HrwGQwnb0qgxV%2BZ%2F9XPYEXsreYs9XZXwxbv90N4lerJJ2aJ4kug%2FMNKqjppmRb2sFsgAA%3D%3D",
    url: "https://d.design/",
    description:
      "多风格AI绘画神器免费生成；3D素材在线渲染，免费商用；各类创意设计大赛，等你来战！",
    tags: [tags.ai, tags.resources]
  },
  {
    name: "EMOJIALL",
    ico: "",
    url: "https://www.emojiall.com/",
    description: "这里有关于Emoji、Emoji含义、Emoji图片等的所有信息。",
    tags: [tags.resources]
  },
  {
    name: "萌国ICP备案",
    ico: "https://icp.gov.moe/favicon.ico",
    url: "https://icp.gov.moe/",
    description: "萌友网站联萌，快来申请萌萌的ICP备案号吧!",
    tags: [tags.community]
  },
  {
    name: "不蒜子",
    ico: "//busuanzi.ibruce.info/images/garlic.png",
    url: "https://busuanzi.ibruce.info/",
    description: "快速添加网站访问量、人数",
    tags: [tags.development]
  },
  {
    name: "一元机场",
    ico: "",
    url: "https://xn--4gq62f52gdss.ink/",
    description: "要科学上网哦",
    tags: [tags.other]
  },
  {
    name: "wave.video",
    ico: "https://assets.animatron.com/landings/static/wv-favicon.ico",
    url: "https://wave.video/zh/tools/audio-editing/text-to-speech",
    description: "为你的视频增加一段语音",
    tags: [tags.tools]
  },
  {
    name: "wallpapers-clan",
    ico:
      "https://wallpapers-clan.com/wp-content/uploads/2020/08/cropped-wallpapers-clan-favicon-3-32x32.png",
    url: "https://wallpapers-clan.com/",
    description: "有很多好看的壁纸，图标(移动端，桌面端)",
    tags: [tags.other]
  },
  {
    name: "面试鸭",
    ico: "https://www.mianshiya.com/favicon.ico",
    url: "https://www.mianshiya.com/",
    description: "题库质量高，完善，一个很好的刷题网站",
    tags: [tags.learning]
  },
  {
    name: "OpenStreetMap",
    ico:
      "https://www.openstreetmap.org/assets/favicon-32x32-99b88fcadeef736889823c8a886b89d8cada9d4423a49a27de29bacc0a6bebd1.png",
    url: "https://www.openstreetmap.org/",
    description: "提供城市OSM数据",
    tags: [tags.tools, tags.resources]
  },
  {
    name: "live2d",
    ico:
      "https://www.live2d.com/wp-content/themes/cubism_new/assets/img/favicon.ico",
    url: "https://www.live2d.com/zh-CHS/",
    description: "可以直接对原图进行加工，做出2D的立体表现",
    tags: [tags.development, tags.animation]
  },
  {
    name: "lucaong / minisearch",
    ico: "/imgNull.png",
    url: "https://github.com/lucaong/minisearch",
    description: "小巧而强大的 JavaScript 全文搜索引擎，适用于浏览器和 Node",
    tags: [tags.development, tags.openSource, tags.web],
    recommend: true
  },
  {
    name: "shikijs / shiki",
    ico: "/imgNull.png",
    url: "https://github.com/shikijs/shiki",
    description: "美观而强大的语法荧光笔(代码高亮)",
    tags: [tags.development, tags.openSource, tags.web]
  },
  {
    name: "baidu / amis",
    ico: "/imgNull.png",
    url: "https://github.com/baidu/amis",
    description: "前端低代码框架，通过 JSON 配置就能生成各种页面。",
    tags: [tags.development, tags.openSource, tags.web, tags.lowCode]
  },
  {
    name: "Vanessa219 / vditor",
    ico: "/imgNull.png",
    url: "https://github.com/Vanessa219/vditor",
    description:
      "♏ 一款浏览器端的 Markdown 编辑器，支持所见即所得（富文本）、即时渲染（类似 Typora）和分屏预览模式。An In-browser Markdown editor, support WYSIWYG (Rich Text), Instant Rendering (Typora-like) and Split View modes.",
    tags: [tags.development, tags.openSource, tags.web]
  },
  {
    name: "VincentGarreau / particles.js",
    ico: "/imgNull.png",
    url: "https://github.com/VincentGarreau/particles.js",
    description: "用于创建粒子的轻量级 JavaScript 库",
    tags: [tags.development, tags.openSource, tags.web, tags.animation]
  },
  {
    name: "socketio / socket.io",
    ico: "/imgNull.png",
    url: "https://github.com/socketio/socket.io",
    description: "即时通讯应用程序框架",
    tags: [tags.development, tags.openSource, tags.web]
  },
  {
    name: "LarryZhu-dev / autofit.js",
    ico: "/imgNull.png",
    url: "https://github.com/LarryZhu-dev/autofit.js",
    description: "autofit.js 迄今为止最易用的自适应工具",
    tags: [tags.development, tags.openSource, tags.web]
  },
  {
    name: "micro-zoe / micro-app",
    ico: "/imgNull.png",
    url: "https://github.com/micro-zoe/micro-app",
    description: "一款简约、高效、功能强大的微前端框架",
    tags: [tags.development, tags.openSource, tags.web, tags.microFrontend]
  },
  {
    name: "agmmnn / awesome-blender",
    ico: "/imgNull.png",
    url: "https://github.com/agmmnn/awesome-blender",
    description: "精选的 Blender 插件、工具、教程列表;以及适合所有人的 3D 资源",
    tags: [tags.plugin, tags.resources, tags.modeling]
  },
  {
    name: "wangeditor-team / wangEditor",
    ico: "/imgNull.png",
    url: "https://github.com/wangeditor-team/wangEditor",
    description: "开源 Web 富文本编辑器",
    tags: [tags.development, tags.openSource, tags.web]
  },
  {
    name: "umijs / qiankun",
    ico: "/imgNull.png",
    url: "https://github.com/umijs/qiankun",
    description: "为微前端提供快速、简单和完整的解决方案",
    tags: [tags.development, tags.openSource, tags.web, tags.microFrontend]
  },
  {
    name: "greensock / GSAP",
    ico: "/imgNull.png",
    url: "https://github.com/greensock/GSAP",
    description: "一个用于现代 Web 的 JavaScript 动画库",
    tags: [tags.development, tags.animation, tags.web]
  },
  {
    name: "Tencent / wujie",
    ico: "/imgNull.png",
    url: "https://github.com/Tencent/wujie",
    description: "极致的微前端框架",
    tags: [tags.development, tags.openSource, tags.web, tags.microFrontend]
  },
  {
    name: "jlmakes / scrollreveal",
    ico: "/imgNull.png",
    url: "https://github.com/jlmakes/scrollreveal",
    description: "当元素滚动到视图中时，为元素添加动画效果。",
    tags: [tags.development, tags.animation, tags.web]
  },
  {
    name: "kylefarris / clamscan",
    ico: "/imgNull.png",
    url: "https://github.com/kylefarris/clamscan",
    description:
      "强大的 ClamAV 病毒扫描库，支持使用本地套接字、本地/远程 TCP 和本地 Clamscan/clamdscan 二进制文件（带故障转移）扫描文件、目录和流。",
    tags: [tags.development, tags.openSource, tags.security]
  },
  {
    name: "lodash / lodash",
    ico: "/imgNull.png",
    url: "https://github.com/lodash/lodash",
    description: "一个现代化的JavaScript实用库，提供模块化、性能和额外功能。",
    tags: [tags.development, tags.openSource, tags.web]
  },
  {
    name: "mattboldt / typed.js",
    ico: "/imgNull.png",
    url: "https://github.com/mattboldt/typed.js",
    description: "JavaScript 打字动画库",
    tags: [tags.development, tags.animation, tags.web],
    recommend: true
  },
  {
    name: "saucxs / captcha-mini",
    ico: "/imgNull.png",
    url: "https://github.com/saucxs/captcha-mini",
    description:
      "captcha-mini.js是一个生成验证码的插件，使用js和canvas生成的，确保后端服务被暴力攻击，简单判断人机以及系统的安全性，体积小，功能多，支持配置",
    tags: [tags.development, tags.openSource, tags.web, tags.security]
  },
  {
    name: "megasanjay / vue3-marquee",
    ico: "/imgNull.png",
    url: "https://github.com/megasanjay/vue3-marquee",
    description: "一个简单的跑马灯组件，对 Vue 3 的依赖为零。",
    tags: [tags.development, tags.web]
  },
  {
    name: "modood / Administrative-divisions-of-China",
    ico: "/imgNull.png",
    url: "https://github.com/modood/Administrative-divisions-of-China",
    description:
      "中华人民共和国行政区划：省级（省份）、 地级（城市）、 县级（区县）、 乡级（乡镇街道）、 村级（村委会居委会） ，中国省市区镇村二级三级四级五级联动地址数据。",
    tags: [tags.development, tags.resources]
  },
  {
    name: "highlightjs / highlight.js",
    ico: "/imgNull.png",
    url: "https://github.com/highlightjs/highlight.js",
    description: "JavaScript 语法高亮显示器，具有语言自动检测和零依赖关系。",
    tags: [tags.development, tags.openSource, tags.web]
  },
  {
    name: "sindresorhus / github-markdown-css",
    ico: "/imgNull.png",
    url: "https://github.com/sindresorhus/github-markdown-css",
    description: "复制 GitHub Markdown 样式的最小 CSS 数量",
    tags: [tags.development, tags.openSource, tags.web]
  },
  {
    name: "Eikanya / Live2d-model",
    ico: "/imgNull.png",
    url: "https://github.com/Eikanya/Live2d-model",
    description: "live2d模型收集",
    tags: [tags.development, tags.resources, tags.animation]
  },
  {
    name: "imuncle / live2d",
    ico: "/imgNull.png",
    url: "https://github.com/imuncle/live2d",
    description: "live2d模型收集+展示，可直接用于静态网站",
    tags: [tags.development, tags.resources, tags.animation]
  },
  {
    name: "un-pany / v3-admin-vite",
    ico: "/imgNull.png",
    url: "https://github.com/un-pany/v3-admin-vite",
    description:
      "☀ A vue3 admin template | vue3 admin/element plus admin/vite admin/vue3 template/vue3 后台/vue3 模板/vue3 后台管理系统",
    tags: [tags.template]
  },
  {
    name: "idurar / idurar-erp-crm",
    ico: "/imgNull.png",
    url: "https://github.com/idurar/idurar-erp-crm",
    description: "开源无头ERP CRM电子商务会计软件",
    tags: [tags.template]
  },
  {
    name: "mindskip / xzs",
    ico: "/imgNull.png",
    url: "https://github.com/mindskip/xzs",
    description: "在线考试系统",
    tags: [tags.template]
  },
  {
    name: "Aras-ax / lottery",
    ico: "/imgNull.png",
    url: "https://github.com/Aras-ax/lottery",
    description:
      "🎉🌟✨🎈年会抽奖程序，基于 Express + Three.js的 3D 球体抽奖程序，奖品🧧🎁，文字，图片，抽奖规则均可配置，😜抽奖人员信息Excel一键导入😍，抽奖结果Excel导出😎，给你的抽奖活动带来全新酷炫体验🚀🚀🚀",
    tags: [tags.template]
  },
  {
    name: "PanJiaChen / vue-element-admin",
    ico: "/imgNull.png",
    url: "https://github.com/PanJiaChen/vue-element-admin",
    description:
      "🎉 一个神奇的 Vue 管理员 https://panjiachen.github.io/vue-element-admin",
    tags: [tags.template]
  },
  {
    name: "koodo-reader / koodo-reader",
    ico: "/imgNull.png",
    url: "https://github.com/koodo-reader/koodo-reader",
    description:
      "现代电子书管理器和阅读器，具有适用于 Windows、macOS、Linux 和 Web 的同步和备份功能",
    tags: [tags.template]
  },
  {
    name: "steve / gallery",
    ico: "/imgNull.png",
    url: "https://gitee.com/steve007/gallery",
    description: "数字展馆",
    tags: [tags.template, tags.web]
  },
  {
    name: "guchengwuyue / yshop-drink意象桌面扫码点餐系统",
    ico: "/imgNull.png",
    url: "https://gitee.com/guchengwuyue/yshop-drink",
    description:
      "yshop意象点餐(扫码点餐)系统，在线点餐(外卖与自取)小程序模式，支持多门店模式，SaaS多租户模式，基础技术springboot3+jdk17+vue3+uniapp(vue3) 采用当前流行技术组合的前后端分离点餐系统： SpringBoot3、Spring Security OAuth2、MybatisPlus、SpringSecurity、jwt、redis、Vue3的前后端分离的系统",
    tags: [tags.template]
  },
  {
    name: "freeCodeCamp / freeCodeCamp",
    ico: "/imgNull.png",
    url: "https://github.com/freeCodeCamp/freeCodeCamp",
    description: "freeCodeCamp.org 的开源代码库和课程。免费学习编码。",
    tags: [tags.learning]
  },
  {
    name: "GrowingGit / GitHub-Chinese-Top-Charts",
    ico: "/imgNull.png",
    url: "https://github.com/GrowingGit/GitHub-Chinese-Top-Charts",
    description:
      "GitHub中文排行榜，各语言分设「软件 | 资料」榜单，精准定位中文好项目。各取所需，高效学习。",
    tags: [tags.learning, tags.openSource]
  },
  {
    name: "krahets / hello-algo",
    ico: "/imgNull.png",
    url: "https://github.com/krahets/hello-algo",
    description:
      "《Hello 算法》：动画图解、一键运行的数据结构与算法教程。支持 Python, Java, C++, C, C#, JS, Go, Swift, Rust, Ruby, Kotlin, TS, Dart 代码。简体版和繁体版同步更新，English version ongoing",
    tags: [tags.learning]
  },
  {
    name: "ascoders / weekly",
    ico: "/imgNull.png",
    url: "https://github.com/ascoders/weekly",
    description: "前端精读周刊。帮你理解最前沿、实用的技术。",
    tags: [tags.learning, tags.web]
  },
  {
    name: "chokcoco / iCSS",
    ico: "/imgNull.png",
    url: "https://github.com/chokcoco/iCSS",
    description: "不止于 CSS",
    tags: [tags.learning, tags.web]
  },
  {
    name: "chokcoco / CSS-Inspiration",
    ico: "/imgNull.png",
    url: "https://github.com/chokcoco/CSS-Inspiration",
    description: "CSS Inspiration，在这里找到写 CSS 的灵感！",
    tags: [tags.learning, tags.web]
  },
  {
    name: "hepengwei / visualization-collection-vue",
    ico: "/imgNull.png",
    url: "https://github.com/hepengwei/visualization-collection-vue",
    description:
      "🌈 一个专注于前端视觉效果的集合应用，包含CSS动效、Canvas动画、Three.js3D、人工智能应用等上百个案例（Vue版本）",
    tags: [tags.learning, tags.web, tags.dataViz]
  },
  {
    name: "Syknapse / Contribute-To-This-Project",
    ico: "/imgNull.png",
    url: "https://github.com/Syknapse/Contribute-To-This-Project",
    description:
      "这个项目正在等待您的贡献。如果您以前从未在 GitHub 上贡献过代码，那么这个项目可以帮助您入门",
    tags: [tags.learning]
  },
  {
    name: "javascript-tutorial / zh.javascript.info",
    ico: "/imgNull.png",
    url: "https://github.com/javascript-tutorial/zh.javascript.info",
    description:
      "现代 JavaScript 教程（The Modern JavaScript Tutorial），以最新的 ECMAScript 规范为基准，通过简单但足够详细的内容，为你讲解从基础到高阶的 JavaScript 相关知识。",
    tags: [tags.learning, tags.web]
  },
  {
    name: "sechelper / kunge-cybersecurity-learning",
    ico: "/imgNull.png",
    url: "https://github.com/sechelper/kunge-cybersecurity-learning",
    description: "全网首创，坤哥网安学习法，最屌没有之一",
    tags: [tags.learning, tags.security]
  },
  {
    name: "you-dont-need / You-Dont-Need-JavaScript",
    ico: "/imgNull.png",
    url: "https://github.com/you-dont-need/You-Dont-Need-JavaScript",
    description: "CSS 很强大，你可以在没有 JS 的情况下做很多事情。",
    tags: [tags.learning, tags.web]
  },
  {
    name: "1c7 / chinese-independent-developer",
    ico: "/imgNull.png",
    url: "https://github.com/1c7/chinese-independent-developer",
    description: "👩🏿‍💻👨🏾‍💻👩🏼‍💻👨🏽‍💻👩🏻‍💻中国独立开发者项目列表 -- 分享大家都在做什么",
    tags: [tags.learning, tags.openSource]
  },
  {
    name: "phaserjs / examples",
    ico: "/imgNull.png",
    url: "https://github.com/phaserjs/examples",
    description: "Phaser 3 例子",
    tags: [tags.learning, tags.web, tags.game]
  },
  {
    name: "zhayujie / chatgpt-on-wechat",
    ico: "/imgNull.png",
    url: "https://github.com/zhayujie/chatgpt-on-wechat",
    description:
      "基于大模型搭建的聊天机器人，同时支持 微信公众号、企业微信应用、飞书、钉钉 等接入，可选择GPT3.5/GPT-4o/GPT4.0/ Claude/文心一言/讯飞星火/通义千问/ Gemini/GLM-4/Claude/Kimi/LinkAI，能处理文本、语音和图片，访问操作系统和互联网，支持基于自有知识库进行定制企业智能客服。",
    tags: [tags.ai, tags.openSource]
  },
  {
    name: "Guyungy / damaihelper",
    ico: "/imgNull.png",
    url: "https://github.com/Guyungy/damaihelper",
    description: "支持大麦网，淘票票、缤玩岛等多个平台，演唱会演出抢票脚本",
    tags: [tags.openSource, tags.tools]
  },
  {
    name: "gzldc / 12306",
    ico: "/imgNull.png",
    url: "https://github.com/gzldc/12306",
    description: "12306抢票脚本",
    tags: [tags.openSource, tags.tools]
  },
  {
    name: "Codennnn / vue-color-avatar",
    ico: "/imgNull.png",
    url: "https://github.com/Codennnn/vue-color-avatar",
    description: "一个在线头像生成器只是为了好玩 |一个纯前端实现的头像生成网站",
    tags: [tags.other]
  },
  {
    name: "zhaoolee / ChineseBQB",
    ico: "/imgNull.png",
    url: "https://github.com/zhaoolee/ChineseBQB",
    description:
      "🇨🇳 Chinese sticker pack,More joy / 表情包的博物馆, Github最有毒的仓库, 中国表情包大集合, 聚欢乐~",
    tags: [tags.resources]
  },
  {
    name: "Java-S12138 / frank",
    ico: "/imgNull.png",
    url: "https://github.com/Java-S12138/frank",
    description: "全新的英雄联盟助手软件，WeGame 的替代品",
    tags: [tags.amusement]
  },
  {
    name: "Blankj / awesome-comment",
    ico: "/imgNull.png",
    url: "https://github.com/Blankj/awesome-comment",
    description: "有趣的评论",
    tags: [tags.other]
  },
  {
    name: "alievk / avatarify-python",
    ico: "/imgNull.png",
    url: "https://github.com/alievk/avatarify-python",
    description: "适用于 Zoom、Skype 和其他视频会议应用程序的头像。",
    tags: [tags.other]
  },
  {
    name: "bb-music / flutter-app",
    ico: "/imgNull.png",
    url: "https://github.com/bb-music/flutter-app",
    description:
      "使用 flutter 编写的哔哔音乐客户端，无需登录，没有信息收集，实现你的听歌自由。",
    tags: [tags.openSource]
  },
  {
    name: "travellings-link / travellings",
    ico: "/imgNull.png",
    url: "https://github.com/travellings-link/travellings",
    description:
      '「开往 Travellings」是一个友链接力项目，旨在通过网络跳转的方式将流量引入那些鲜为人知的独立站点。 每当用户访问加入该项目的网页时，点击该网页上的"开往"按钮将随机跳转到另一个加入该项目的网页。',
    tags: [tags.other]
  },
  {
    name: "NianBroken / Firework_Simulator",
    ico: "/imgNull.png",
    url: "https://github.com/NianBroken/Firework_Simulator",
    description:
      "烟花模拟器，一个可以模拟各种烟花效果的网页|它可以展示各种绚丽多彩的烟花效果，并让人仿佛置身于真实烟花的绚丽世界之中。|模拟烟花|烟花网页|烟花绽放|烟花效果",
    tags: [tags.web, tags.animation]
  },
  {
    name: "篡改猴",
    description: "使用用户脚本自由地改变网络",
    ico:
      "https://store-images.s-microsoft.com/image/apps.20759.f7dbc670-57ef-4f66-932b-7a8786594577.1e93160d-1a0b-42ef-92b3-7f652ab8df5d.eadba2ba-e3fe-404c-bc8b-b383ebeb0d00?mode=scale&h=100&q=90&w=100",
    url:
      "https://microsoftedge.microsoft.com/addons/detail/%E7%AF%A1%E6%94%B9%E7%8C%B4/iikmkjmpaadaobahmlepeloendndfphd",
    tags: [tags.plugin, tags.tools]
  },
  {
    name: "购物党自动比价工具",
    description:
      "浏览商品页面时，自动查询180天历史价格、比较同款商品的全网最低价、提示促销和隐藏优惠券、一旦降价还能通过微信提醒你，海淘、二手房游戏平台也能比价！",
    ico:
      "https://store-images.s-microsoft.com/image/apps.41882.11a2720c-d2ed-44c8-a03f-e9de8886cb90.e08e3ddf-819d-4af4-8a38-7ff8648a9767.2c62500b-089f-476a-9754-a5723476d0a1?mode=scale&h=100&q=90&w=100",
    url:
      "https://microsoftedge.microsoft.com/addons/detail/%E8%B4%AD%E7%89%A9%E5%85%9A%E8%87%AA%E5%8A%A8%E6%AF%94%E4%BB%B7%E5%B7%A5%E5%85%B7/pngicgippofneelinabebobnkpmdiphn",
    tags: [tags.plugin, tags.tools]
  },
  {
    name: "FeHelper(前端助手)",
    description:
      "Web开发者常用工具集，包括JSON格式化、代码美化、信息编解码、二维码/解码等等；FeHelper默认已为您安装JSON格式化功能，其余功能请到插件配置页「FH应用市场」直接安装/更新！",
    ico:
      "https://store-images.s-microsoft.com/image/apps.47228.fd1a58dd-c709-4811-9013-e089199d7299.175fbc49-c6fb-46ab-9cb6-4bd6dd523f55.c46634db-15cf-462a-b539-10c0bd89d44d?mode=scale&h=100&q=90&w=100",
    url:
      "https://microsoftedge.microsoft.com/addons/detail/fehelper%E5%89%8D%E7%AB%AF%E5%8A%A9%E6%89%8B/feolnkbgcbjmamimpfcnklggdcbgakhe?hl=zh-CN",
    tags: [tags.plugin, tags.tools, tags.web]
  },
  {
    name: "domlysz / BlenderGIS",
    ico: "/imgNull.png",
    description: "使用地理数据创建3D模型",
    url: "https://github.com/domlysz/BlenderGIS",
    tags: [tags.plugin, tags.modeling]
  },
  {
    name: "Material Theme — Free",
    description: "Visual Studio Code现在最史诗般的主题",
    ico:
      "https://equinusocio.gallerycdn.vsassets.io/extensions/equinusocio/vsc-material-theme/34.7.9/1731100257256/Microsoft.VisualStudio.Services.Icons.Default",
    url:
      "https://marketplace.visualstudio.com/items?itemName=Equinusocio.vsc-material-theme",
    tags: [tags.plugin]
  },
  {
    name: "Material Icon Theme",
    description: "Visual Studio Code 的 Material Design 图标",
    ico:
      "https://pkief.gallerycdn.vsassets.io/extensions/pkief/material-icon-theme/5.14.1/1731509240649/Microsoft.VisualStudio.Services.Icons.Default",
    url:
      "https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme",
    tags: [tags.plugin]
  },
  {
    name:
      "Chinese (Simplified) (简体中文) Language Pack for Visual Studio Code",
    description: "中文语言包扩展（简体）",
    ico:
      "https://ms-ceintl.gallerycdn.vsassets.io/extensions/ms-ceintl/vscode-language-pack-zh-hans/1.96.2024112709/1732699011431/Microsoft.VisualStudio.Services.Icons.Default",
    url:
      "https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hans",
    tags: [tags.plugin]
  },
  {
    name: "Turbo Console Log",
    description: "自动执行编写有意义的日志消息的过程",
    ico:
      "https://chakrounanas.gallerycdn.vsassets.io/extensions/chakrounanas/turbo-console-log/2.10.5/1729389805758/Microsoft.VisualStudio.Services.Icons.Default",
    url:
      "https://marketplace.visualstudio.com/items?itemName=ChakrounAnas.turbo-console-log",
    tags: [tags.plugin]
  },
  {
    name: "Live Server",
    description: "启动一个具有静态和动态页面实时重新加载功能的开发本地服务器",
    ico:
      "https://ritwickdey.gallerycdn.vsassets.io/extensions/ritwickdey/liveserver/5.7.9/1661914858952/Microsoft.VisualStudio.Services.Icons.Default",
    url:
      "https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer",
    tags: [tags.plugin]
  },
  {
    name: "LeetCode",
    description: "解决 VS Code 中的 LeetCode 问题",
    ico:
      "https://leetcode.gallerycdn.vsassets.io/extensions/leetcode/vscode-leetcode/0.18.4/1726212071110/Microsoft.VisualStudio.Services.Icons.Default",
    url:
      "https://marketplace.visualstudio.com/items?itemName=LeetCode.vscode-leetcode",
    tags: [tags.plugin, tags.learning]
  },
  {
    name: "Auto Rename Tag",
    description: "自动重命名配对的 HTML/XML 标签",
    ico:
      "https://formulahendry.gallerycdn.vsassets.io/extensions/formulahendry/auto-rename-tag/0.1.10/1644319230173/Microsoft.VisualStudio.Services.Icons.Default",
    url:
      "https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag",
    tags: [tags.plugin]
  },
  {
    name: "project-tree",
    description:
      "安装插件，按 ctrl+shift+p 并输入 Project Tree 进入。 在 README.md 中生成项目的树状结构。",
    ico:
      "https://zhucy.gallerycdn.vsassets.io/extensions/zhucy/project-tree/0.3.0/1589279463795/Microsoft.VisualStudio.Services.Icons.Default",
    url:
      "https://marketplace.visualstudio.com/items?itemName=zhucy.project-tree",
    tags: [tags.plugin]
  },
  {
    name: "Color Highlight",
    description: "在编辑器中突出显示 Web 颜色",
    ico:
      "https://naumovs.gallerycdn.vsassets.io/extensions/naumovs/color-highlight/2.8.0/1710416778913/Microsoft.VisualStudio.Services.Icons.Default",
    url:
      "https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight",
    tags: [tags.plugin]
  },
  {
    name: "Batch Runner",
    description: "在 VS Code 终端中运行批处理文件",
    ico:
      "https://nilssoderman.gallerycdn.vsassets.io/extensions/nilssoderman/batch-runner/1.3.2/1723902315400/Microsoft.VisualStudio.Services.Icons.Default",
    url:
      "https://marketplace.visualstudio.com/items?itemName=NilsSoderman.batch-runner",
    tags: [tags.plugin]
  },
  {
    name: "Project Manager",
    description: "在项目之间轻松切换",
    ico:
      "https://alefragnani.gallerycdn.vsassets.io/extensions/alefragnani/project-manager/12.8.0/1711736277737/Microsoft.VisualStudio.Services.Icons.Default",
    url:
      "https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager",
    tags: [tags.plugin]
  },
  {
    name: "Prettier - Code formatter",
    description: "使用 prettier 的代码格式化程序",
    ico:
      "https://esbenp.gallerycdn.vsassets.io/extensions/esbenp/prettier-vscode/11.0.0/1723648421534/Microsoft.VisualStudio.Services.Icons.Default",
    url:
      "https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode",
    tags: [tags.plugin]
  },
  {
    name: "background",
    description: "将背景图像引入 vscode",
    ico:
      "https://shalldie.gallerycdn.vsassets.io/extensions/shalldie/background/2.0.3/1731577235340/Microsoft.VisualStudio.Services.Icons.Default",
    url:
      "https://marketplace.visualstudio.com/items?itemName=shalldie.background",
    tags: [tags.plugin]
  },
  {
    name: "jsdoc",
    description: "为函数快速创建 JSDoc 样式的注释。",
    ico:
      "https://lllllllqw.gallerycdn.vsassets.io/extensions/lllllllqw/jsdoc/1.0.9/1681753998741/Microsoft.VisualStudio.Services.Icons.Default",
    url: "https://marketplace.visualstudio.com/items?itemName=lllllllqw.jsdoc",
    tags: [tags.plugin]
  }
];


export const stats = {
  totalSites: sites.length,
  totalCategories: Object.keys(tags).length,
  runningStart: '2026-03-31 12:00',
};