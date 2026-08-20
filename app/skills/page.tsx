import type { Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import { SimpleNavigation } from "@/components/simple-navigation"
import { Button } from "@/components/ui/button"
import { FileArchive, Folder, Download, ExternalLink } from "lucide-react"
import { CollectionPageJsonLd, BreadcrumbJsonLd } from "@/components/seo-jsonld"

export const metadata: Metadata = {
  title: 'Skills',
  description: '可下载的 Agent Skills 技能集合，包含代码、文档等类别的实用技能，支持一键下载。',
  keywords: ['Skills', 'Agent Skills', 'AI技能', '技能下载', 'Claude Skills', 'Trae Skills'],
  alternates: {
    canonical: '/skills',
  },
  openGraph: {
    type: 'website',
    url: '/skills',
    title: 'Skills',
    description: '可下载的 Agent Skills 技能集合，支持一键下载。',
  },
  twitter: {
    title: 'Skills',
    description: '可下载的 Agent Skills 技能集合，支持一键下载。',
  },
}

interface Skill {
  name: string
  category: string
  description: string
  zipPath: string
  zipName: string
  size: string
  link?: string
}

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`
}

function getSkills(): Skill[] {
  const skillsRoot = path.join(process.cwd(), 'public', 'skills')
  if (!fs.existsSync(skillsRoot)) return []

  const skills: Skill[] = []
  const categories = fs.readdirSync(skillsRoot, { withFileTypes: true })
    .filter(d => d.isDirectory())

  for (const cat of categories) {
    const catPath = path.join(skillsRoot, cat.name)
    const skillFolders = fs.readdirSync(catPath, { withFileTypes: true })
      .filter(d => d.isDirectory())

    for (const skillFolder of skillFolders) {
      const skillPath = path.join(catPath, skillFolder.name)
      const files = fs.readdirSync(skillPath)

      const readmeFile = files.find(f => f.toLowerCase() === 'readme.md')
      const zipFile = files.find(f => f.endsWith('.zip'))
      const linkFile = files.find(f => f.toLowerCase() === 'link.txt')

      if (!readmeFile || !zipFile) continue

      const description = fs.readFileSync(path.join(skillPath, readmeFile), 'utf8').trim()
      const stats = fs.statSync(path.join(skillPath, zipFile))
      const link = linkFile ? fs.readFileSync(path.join(skillPath, linkFile), 'utf8').trim() : undefined

      skills.push({
        name: skillFolder.name,
        category: cat.name,
        description,
        zipPath: `/skills/${cat.name}/${skillFolder.name}/${zipFile}`,
        zipName: zipFile,
        size: formatSize(stats.size),
        link,
      })
    }
  }

  return skills.sort((a, b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name))
}

export default function SkillsPage() {
  const skills = getSkills()

  const grouped = skills.reduce<Record<string, Skill[]>>((acc, skill) => {
    (acc[skill.category] ||= []).push(skill)
    return acc
  }, {})

  return (
    <>
      <CollectionPageJsonLd
        title="Skills"
        description="可下载的 Agent Skills 技能集合，支持一键下载。"
        url="/skills"
      />
      <BreadcrumbJsonLd
        items={[
          { name: '首页', url: '/' },
          { name: 'Skills' },
        ]}
      />
      <div className="min-h-screen bg-background">
        <SimpleNavigation />
        <main className="pt-20 mx-auto max-w-4xl px-4 sm:px-6 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-serif font-semibold tracking-[-0.01em]">Skills</h1>
            <p className="mt-1.5 text-[14px] text-muted-foreground">
              可下载的 Agent Skills 集合 · 共 {skills.length} 个技能
            </p>
          </div>

          <div className="space-y-8">
            {Object.entries(grouped).map(([category, items]) => (
              <section key={category}>
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border/40">
                  <Folder className="h-4 w-4 text-muted-foreground" />
                  <h2 className="text-[11px] font-medium uppercase tracking-[0.1em] text-muted-foreground">
                    {category}/
                  </h2>
                  <span className="ml-auto text-[11px] text-muted-foreground/60">{items.length} 个文件</span>
                </div>

                <div className="border border-border bg-card overflow-hidden divide-y divide-border/30">
                  {items.map(skill => (
                    <div
                      key={`${skill.category}/${skill.name}`}
                      className="group flex items-center gap-3 p-3 md:p-4 hover:bg-secondary/30 transition-colors"
                    >
                      <FileArchive className="h-5 w-5 shrink-0 text-muted-foreground group-hover:text-accent transition-colors" />

                      <div className="min-w-0 flex-1">
                        <div className="flex items-baseline gap-2 flex-wrap">
                          <h3 className="text-[14px] font-medium leading-tight">{skill.name}</h3>
                          <span className="text-[11px] text-muted-foreground/60">{skill.zipName}</span>
                        </div>
                        <p className="mt-0.5 text-[12px] text-muted-foreground line-clamp-2">{skill.description}</p>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <span className="hidden sm:inline text-[11px] text-muted-foreground/60">{skill.size}</span>
                        {skill.link && (
                          <Button asChild size="sm" variant="ghost" className="gap-1.5">
                            <a href={skill.link} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-3.5 w-3.5" />
                              访问
                            </a>
                          </Button>
                        )}
                        <Button asChild size="sm" variant="ghost" className="gap-1.5">
                          <a href={skill.zipPath} download={skill.zipName}>
                            <Download className="h-3.5 w-3.5" />
                            下载
                          </a>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {skills.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-muted-foreground text-[14px]">暂无技能</p>
            </div>
          )}
        </main>
      </div>
    </>
  )
}
