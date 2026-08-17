import type { Metadata } from 'next'
import CategoryClient from './category-client'
import { CollectionPageJsonLd, BreadcrumbJsonLd } from '@/components/seo-jsonld'

export const metadata: Metadata = {
  title: '资源导航',
  description: '精选优质资源导航——前端开发、AI工具、设计资源、学习平台、云服务、实用工具、开源项目等分类整理，一站式发现好资源。',
  keywords: ['资源导航', '前端资源', 'AI工具', '设计资源', '学习平台', '实用工具', '开源项目'],
  alternates: {
    canonical: '/category',
  },
  openGraph: {
    type: 'website',
    url: '/category',
    title: '资源导航',
    description: '精选优质资源导航——前端开发、AI工具、设计资源、学习平台等分类整理。',
  },
  twitter: {
    title: '资源导航',
    description: '精选优质资源导航——前端开发、AI工具、设计资源、学习平台等分类整理。',
  },
}

export default function CategoryPage() {
  return (
    <>
      <CollectionPageJsonLd
        title="资源导航"
        description="精选优质资源导航——前端开发、AI工具、设计资源、学习平台等分类整理。"
        url="/category"
      />
      <BreadcrumbJsonLd
        items={[
          { name: '首页', url: '/' },
          { name: '资源导航' },
        ]}
      />
      <CategoryClient />
    </>
  )
}
