import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
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
    <html lang="zh-CN" suppressHydrationWarning>
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
