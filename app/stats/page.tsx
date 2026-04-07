import { getStatsData } from "./page.tsx.server"
import StatsClient from "./stats-client"

export default async function StatsPage() {
  const { articleStats, articleTagStats } = await getStatsData()

  return (
    <StatsClient 
      articleStats={articleStats}
      articleTagStats={articleTagStats}
    />
  )
}