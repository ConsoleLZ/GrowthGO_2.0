import { getAllPosts } from "@/lib/posts"
import { sites, stats } from "@/lib/data"

export async function getStatsData() {
  const posts = getAllPosts()
  
  // 文章统计
  const totalArticles = posts.length
  const totalArticleTags = new Set(posts.flatMap(post => post.tags)).size
  const totalWords = posts.reduce((sum, post) => {
    const wordCount = (post as any).content ? (post as any).content.split(/\s+/).length : 0
    return sum + wordCount
  }, 0)
  
  // 网站标签统计
  const totalSiteTags = new Set(sites.flatMap(site => site.tags)).size
  
  const articleStats = {
    totalArticles,
    totalArticleTags,
    totalSiteTags,
    totalWords,
    avgWordsPerArticle: totalArticles > 0 ? Math.round(totalWords / totalArticles) : 0
  }

  // 文章标签统计
  const articleTagCount: Record<string, number> = {}
  posts.forEach((post) => {
    post.tags.forEach((tag) => {
      articleTagCount[tag] = (articleTagCount[tag] || 0) + 1
    })
  })
  
  const articleTagStats = Object.entries(articleTagCount)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10)

  return {
    articleStats,
    articleTagStats
  }
}