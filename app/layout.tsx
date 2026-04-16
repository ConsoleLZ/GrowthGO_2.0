import type { Metadata } from 'next'
import { Inter, Noto_Serif_SC } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import Script from 'next/script'
import './globals.css'

// 西文字体 - 只加载拉丁字母子集
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

// 中文字体 - 思源宋体，专业稳重
const notoSerif = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ['400', '600', '700'],
  variable: "--font-noto-serif",
  display: 'swap',
});

export const metadata: Metadata = {
  title: '小哲的个人导航网站',
  description: '精选开发者资源导航',
  generator: 'v0.app',
  icons: '/favicon.ico'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning className={`${inter.variable} ${notoSerif.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
        <Script
          src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
