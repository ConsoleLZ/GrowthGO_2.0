import type { Metadata } from 'next'
import { getStatsData } from "./page.tsx.server"
import StatsClient from "./stats-client"
import { CollectionPageJsonLd, BreadcrumbJsonLd } from '@/components/seo-jsonld'

export const metadata: Metadata = {
  title: '数据统计',
  description: '博客数据统计面板——文章总数、标签分布、字数统计、阅读时间等数据可视化展示。',
  keywords: ['数据统计', '博客统计', '文章统计', '数据分析'],
  alternates: {
    canonical: '/stats',
  },
  openGraph: {
    type: 'website',
    url: '/stats',
    title: '数据统计',
    description: '博客数据统计面板——文章总数、标签分布、字数统计等数据可视化。',
  },
  twitter: {
    title: '数据统计',
    description: '博客数据统计面板——文章总数、标签分布、字数统计等数据可视化。',
  },
}

export default async function StatsPage() {
  const { articleStats, articleTagStats } = await getStatsData()

  return (
    <>
      <CollectionPageJsonLd
        title="数据统计"
        description="博客数据统计面板——文章总数、标签分布、字数统计等数据可视化展示。"
        url="/stats"
      />
      <BreadcrumbJsonLd
        items={[
          { name: '首页', url: '/' },
          { name: '数据统计' },
        ]}
      />
      <StatsClient 
        articleStats={articleStats}
        articleTagStats={articleTagStats}
      />
    </>
  )
}