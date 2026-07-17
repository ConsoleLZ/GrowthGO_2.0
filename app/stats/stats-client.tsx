"use client";

import { SimpleNavigation } from "@/components/simple-navigation";
import { sites, stats } from "@/lib/data";
import { useMemo, useState, useEffect } from "react";

interface StatsPageProps {
  articleStats: {
    totalArticles: number;
    totalArticleTags: number;
    totalSiteTags: number;
    totalWords: number;
    avgWordsPerArticle: number;
  };
  articleTagStats: Array<{ name: string; count: number }>;
}

export default function StatsClient({ articleStats, articleTagStats }: StatsPageProps) {
  const siteTagStats = useMemo(() => {
    const tagCount: Record<string, number> = {};
    sites.forEach((site) => {
      site.tags.forEach((tag) => {
        tagCount[tag] = (tagCount[tag] || 0) + 1;
      });
    });
    return Object.entries(tagCount)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);
  }, []);

  const maxSiteTagCount = Math.max(...siteTagStats.map((t) => t.count));
  const maxArticleTagCount = Math.max(...articleTagStats.map((t) => t.count));

  const [runningDays, setRunningDays] = useState("0天0小时0分钟0秒");

  useEffect(() => {
    const startTime = new Date(stats.runningStart).getTime();
    let timer: NodeJS.Timeout | null = null;

    const updateRuntime = () => {
      const now = new Date().getTime();
      const diff = now - startTime;
      if (diff < 0) { setRunningDays("尚未开始"); return; }
      const seconds = Math.floor(diff / 1000) % 60;
      const minutes = Math.floor(diff / 60000) % 60;
      const hours = Math.floor(diff / 3600000) % 24;
      const days = Math.floor(diff / 86400000);
      setRunningDays(`${days}天${hours}小时${minutes}分钟${seconds}秒`);
    };

    updateRuntime();
    timer = setInterval(updateRuntime, 1000);
    return () => { if (timer) clearInterval(timer); };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SimpleNavigation />
      <main className="pt-20 mx-auto max-w-4xl px-6">
        <section className="py-12">
          <h1 className="text-3xl font-serif font-semibold tracking-[-0.01em]">数据统计</h1>
        </section>

        <section className="pb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
            <div className="rounded-[8px] border border-border/50 p-4 bg-card">
              <p className="text-[11px] text-muted-foreground uppercase tracking-[0.05em]">导航数量</p>
              <p className="mt-1 text-xl font-semibold">{stats.totalSites}</p>
            </div>
            <div className="rounded-[8px] border border-border/50 p-4 bg-card">
              <p className="text-[11px] text-muted-foreground uppercase tracking-[0.05em]">笔记数量</p>
              <p className="mt-1 text-xl font-semibold">{articleStats.totalArticles}</p>
            </div>
            <div className="rounded-[8px] border border-border/50 p-4 bg-card">
              <p className="text-[11px] text-muted-foreground uppercase tracking-[0.05em]">文章标签</p>
              <p className="mt-1 text-xl font-semibold">{articleStats.totalArticleTags}</p>
            </div>
            <div className="rounded-[8px] border border-border/50 p-4 bg-card">
              <p className="text-[11px] text-muted-foreground uppercase tracking-[0.05em]">网站标签</p>
              <p className="mt-1 text-xl font-semibold">{articleStats.totalSiteTags}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-[8px] border border-border/50 p-4 bg-card">
              <p className="text-[11px] text-muted-foreground uppercase tracking-[0.05em]">访问统计</p>
              <p id="busuanzi_value_site_pv" className="mt-1 text-xl font-semibold">...</p>
            </div>
            <div className="rounded-[8px] border border-border/50 p-4 bg-card">
              <p className="text-[11px] text-muted-foreground uppercase tracking-[0.05em]">运行时间</p>
              <p className="mt-1 text-[14px] font-medium">{runningDays}</p>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-12">
          <div className="rounded-[8px] border border-border/50 p-6 bg-card">
            <h3 className="text-[13px] font-semibold mb-5">文章标签分布</h3>
            <div className="space-y-3">
              {articleTagStats.map((tag) => (
                <div key={tag.name} className="flex items-center gap-3">
                  <span className="w-20 shrink-0 text-[13px] truncate">{tag.name}</span>
                  <div className="flex-1">
                    <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                      <div
                        className="h-full bg-accent rounded-full transition-all"
                        style={{ width: `${(tag.count / maxArticleTagCount) * 100}%` }}
                      />
                    </div>
                  </div>
                  <span className="w-8 text-right text-[12px] text-muted-foreground">{tag.count}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[8px] border border-border/50 p-6 bg-card">
            <h3 className="text-[13px] font-semibold mb-5">网站标签分布</h3>
            <div className="space-y-3">
              {siteTagStats.map((tag) => (
                <div key={tag.name} className="flex items-center gap-3">
                  <span className="w-20 shrink-0 text-[13px] truncate">{tag.name}</span>
                  <div className="flex-1">
                    <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                      <div
                        className="h-full bg-accent rounded-full transition-all"
                        style={{ width: `${(tag.count / maxSiteTagCount) * 100}%` }}
                      />
                    </div>
                  </div>
                  <span className="w-8 text-right text-[12px] text-muted-foreground">{tag.count}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
