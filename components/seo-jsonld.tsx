import Script from 'next/script'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://xiaozhe.me'
const siteName = '小哲来了'

interface WebsiteJsonLdProps {
  searchPath?: string
}

export function WebsiteJsonLd({ searchPath = '/blog?q={search_term_string}' }: WebsiteJsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    url: siteUrl,
    description: '小哲个人信息 / 个人简历 / 技术笔记 / 资源导航',
    inLanguage: 'zh-CN',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}${searchPath}`,
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <Script
      id="website-jsonld"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

interface PersonJsonLdProps {
  name?: string
  jobTitle?: string
  url?: string
  image?: string
}

export function PersonJsonLd({
  name = '小哲',
  jobTitle = '前端开发者 / AI爱好者',
  url = siteUrl,
  image = `${siteUrl}/avatar.png`,
}: PersonJsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    jobTitle,
    url,
    image,
    sameAs: [
      'https://github.com/',
    ],
    knowsAbout: ['前端开发', 'React', 'Next.js', 'TypeScript', 'AI工具', 'UI设计'],
  }

  return (
    <Script
      id="person-jsonld"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

interface BlogPostingJsonLdProps {
  title: string
  description: string
  datePublished: string
  dateModified?: string
  authorName?: string
  url: string
  image?: string
  tags?: string[]
  wordCount?: number
  readingTimeMinutes?: number
}

export function BlogPostingJsonLd({
  title,
  description,
  datePublished,
  dateModified,
  authorName = '小哲',
  url,
  image = `${siteUrl}/avatar.png`,
  tags = [],
  wordCount,
  readingTimeMinutes,
}: BlogPostingJsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description || title,
    image,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: authorName,
      url: siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: siteName,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/avatar.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    keywords: tags.length > 0 ? tags.join(', ') : undefined,
    articleSection: tags[0] || '技术',
    wordCount,
    timeRequired: readingTimeMinutes ? `PT${readingTimeMinutes}M` : undefined,
  }

  return (
    <Script
      id={`blogpost-${url}-jsonld`}
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

interface BreadcrumbJsonLdProps {
  items: {
    name: string
    url?: string
  }[]
}

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url ? `${siteUrl}${item.url}` : undefined,
    })),
  }

  return (
    <Script
      id={`breadcrumb-${items.map(i => i.name).join('-')}-jsonld`}
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

interface CollectionPageJsonLdProps {
  title: string
  description: string
  url: string
}

export function CollectionPageJsonLd({ title, description, url }: CollectionPageJsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: title,
    description,
    url: `${siteUrl}${url}`,
    inLanguage: 'zh-CN',
    isPartOf: {
      '@type': 'WebSite',
      name: siteName,
      url: siteUrl,
    },
  }

  return (
    <Script
      id={`collection-${url}-jsonld`}
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
