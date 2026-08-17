import { Metadata } from 'next'
import { GuestbookClient } from './guestbook-client'
import { CollectionPageJsonLd, BreadcrumbJsonLd } from '@/components/seo-jsonld'

export const metadata: Metadata = {
  title: '留言板',
  description: '欢迎留言，我会尽快回复大家！分享你的想法、建议或问题，一起交流成长。',
  keywords: ['留言板', '留言', '交流', '反馈'],
  alternates: {
    canonical: '/guestbook',
  },
  openGraph: {
    type: 'website',
    url: '/guestbook',
    title: '留言板',
    description: '欢迎留言，我会尽快回复大家！一起交流成长。',
  },
  twitter: {
    title: '留言板',
    description: '欢迎留言，我会尽快回复大家！一起交流成长。',
  },
}

export default function GuestbookPage() {
  return (
    <>
      <CollectionPageJsonLd
        title="留言板"
        description="欢迎留言，我会尽快回复大家！一起交流成长。"
        url="/guestbook"
      />
      <BreadcrumbJsonLd
        items={[
          { name: '首页', url: '/' },
          { name: '留言板' },
        ]}
      />
      <GuestbookClient />
    </>
  )
}