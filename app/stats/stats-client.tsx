"use client";

import { NavHeader } from "@/components/nav-header";
import { sites, stats } from "@/lib/data";
import { useMemo, useState, useEffect } from "react";
import Script from "next/script";

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
  // 网站标签统计
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
      .slice(0, 10); // 只显示前10个标签
  }, []);

  const maxSiteTagCount = Math.max(...siteTagStats.map((t) => t.count));

  const [runningDays, setRunningDays] = useState("0天0小时0分钟0秒");

  useEffect(() => {
    const startTime = new Date(stats.runningStart).getTime();
    let timer: NodeJS.Timeout | null = null;

    const updateRuntime = () => {
      const now = new Date().getTime();
      const diff = now - startTime;

      if (diff < 0) {
        setRunningDays("尚未开始");
        return;
      }

      const seconds = Math.floor(diff / 1000) % 60;
      const minutes = Math.floor(diff / 60000) % 60;
      const hours = Math.floor(diff / 3600000) % 24;
      const days = Math.floor(diff / 86400000);

      setRunningDays(`${days}天${hours}小时${minutes}分钟${seconds}秒`);
    };

    // 立即执行一次，然后启动定时器
    updateRuntime();
    timer = setInterval(updateRuntime, 1000);

    // 清理函数：组件卸载时清除定时器
    return () => {
      if (timer) clearInterval(timer);
    };
  }, []); // 空依赖数组确保只在挂载时运行一次

  return (
    <div className="min-h-screen bg-background">
      <NavHeader />

      <main className="mx-auto max-w-4xl px-6">
        {/* Header */}
        <section className="py-12">
          <h1 className="text-3xl font-bold tracking-tight">数据统计</h1>
        </section>

        {/* 核心数据统计 */}
        <section className="pb-8">
          {/* <h3 className="text-sm mb-4">数据总览</h3> */}
          
          {/* 第一行：基础数据 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div className="rounded-lg border border-border/50 p-4">
              <p className="text-xs text-muted-foreground">导航数量</p>
              <p className="mt-1 text-xl font-bold">{stats.totalSites}</p>
            </div>
            <div className="rounded-lg border border-border/50 p-4">
              <p className="text-xs text-muted-foreground">笔记数量</p>
              <p className="mt-1 text-xl font-bold">{articleStats.totalArticles}</p>
            </div>
            <div className="rounded-lg border border-border/50 p-4">
              <p className="text-xs text-muted-foreground">文章标签</p>
              <p className="mt-1 text-xl font-bold">{articleStats.totalArticleTags}</p>
            </div>
            <div className="rounded-lg border border-border/50 p-4">
              <p className="text-xs text-muted-foreground">网站标签</p>
              <p className="mt-1 text-xl font-bold">{articleStats.totalSiteTags}</p>
            </div>
          </div>
          
          {/* 第二行：访问和运行时间 */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
            <div className="rounded-lg border border-border/50 p-4">
              <p className="text-xs text-muted-foreground">访问统计</p>
              <p id="busuanzi_value_site_pv" className="mt-1 text-xl font-bold">...</p>
            </div>
            <div className="rounded-lg border border-border/50 p-4">
              <p className="text-xs text-muted-foreground">运行时间</p>
              <p className="mt-1 text-sm font-semibold">{runningDays}</p>
            </div>
          </div>
        </section>

        {/* 详细统计 */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-12">
          {/* 文章标签分布 */}
          <div className="rounded-lg border border-border/50 p-6">
            <h3 className="text-sm font-semibold mb-4">文章标签分布</h3>
            <div className="space-y-3">
              {articleTagStats.map((tag) => (
                <div key={tag.name} className="flex items-center gap-3">
                  <span className="w-20 shrink-0 text-sm truncate">{tag.name}</span>
                  <div className="flex-1">
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <div
                        className="h-full bg-foreground/80 rounded-full transition-all"
                        style={{ width: `${(tag.count / Math.max(...articleTagStats.map(t => t.count))) * 100}%` }}
                      />
                    </div>
                  </div>
                  <span className="w-8 text-right text-sm text-muted-foreground">
                    {tag.count}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 网站标签分布 */}
          <div className="rounded-lg border border-border/50 p-6">
            <h3 className="text-sm font-semibold mb-4">网站标签分布</h3>
            <div className="space-y-3">
              {siteTagStats.map((tag) => (
                <div key={tag.name} className="flex items-center gap-3">
                  <span className="w-20 shrink-0 text-sm truncate">{tag.name}</span>
                  <div className="flex-1">
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <div
                        className="h-full bg-foreground/80 rounded-full transition-all"
                        style={{ width: `${(tag.count / maxSiteTagCount) * 100}%` }}
                      />
                    </div>
                  </div>
                  <span className="w-8 text-right text-sm text-muted-foreground">
                    {tag.count}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 文章详细信息 */}
        {/* <section className="pb-12">
          <h3 className="text-sm mb-4">文章字数统计</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-lg border border-border/50 p-4">
              <p className="text-xs text-muted-foreground">总字数</p>
              <p className="mt-1 text-lg font-semibold">{articleStats.totalWords.toLocaleString()}</p>
            </div>
            <div className="rounded-lg border border-border/50 p-4">
              <p className="text-xs text-muted-foreground">平均每篇文章</p>
              <p className="mt-1 text-lg font-semibold">{articleStats.avgWordsPerArticle.toLocaleString()} 字</p>
            </div>
          </div>
        </section> */}
      </main>

      <Script
        src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"
        strategy="lazyOnload"
      />
    </div>
  );
}