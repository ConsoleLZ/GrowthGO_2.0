import type { Metadata } from 'next'
import { Inter, Inter_Tight } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { BackToTop } from '@/components/back-to-top'
import Script from 'next/script'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: 'swap',
})

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: "--font-display",
  display: 'swap',
})

export const metadata: Metadata = {
  title: '小哲的一些宝藏',
  description: '个人主页 · 前端开发 / 电子工程 / 技术笔记 / 资源导航',
  generator: 'v0.app',
  icons: '/favicon.ico'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning className={`${inter.variable} ${interTight.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <BackToTop />
        </ThemeProvider>
        <Analytics />
        <Script
          src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"
          strategy="afterInteractive"
        />
        {process.env.NODE_ENV === 'development' && (
          <Script strategy="afterInteractive">
            {`
              (function() {
                function initVConsole() {
                  if (window.VConsole) {
                    new window.VConsole();
                  } else {
                    var script = document.createElement('script');
                    script.src = 'https://unpkg.com/vconsole/dist/vconsole.min.js';
                    script.onload = function() {
                      if (window.VConsole) {
                        new window.VConsole();
                      }
                    };
                    document.head.appendChild(script);
                  }
                }
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', initVConsole);
                } else {
                  initVConsole();
                }
              })();
            `}
          </Script>
        )}
      </body>
    </html>
  )
}
