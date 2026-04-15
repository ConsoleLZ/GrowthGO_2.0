import { Mail, ArrowUpRight } from "lucide-react"

const contactLinks = [
  { label: "Email", value: "hello@zhangming.dev", href: "mailto:hello@zhangming.dev" },
  { label: "GitHub", value: "@zhangming", href: "https://github.com" },
  { label: "LinkedIn", value: "/in/zhangming", href: "https://linkedin.com" },
  { label: "Twitter", value: "@zhangming_dev", href: "https://twitter.com" },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm tracking-widest uppercase text-muted-foreground">
            联系方式
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* CTA */}
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
              让我们一起创造些有意义的东西
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              无论您有项目合作的想法，或者只是想打个招呼，我都很乐意收到您的消息。
            </p>
            <a
              href="mailto:hello@zhangming.dev"
              className="inline-flex items-center gap-3 px-6 py-3 bg-foreground text-background rounded-full hover:opacity-90 transition-opacity"
            >
              <Mail size={18} />
              <span className="font-medium">发送邮件</span>
            </a>
          </div>

          {/* Contact Links */}
          <div className="space-y-6">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-4 border-b border-border hover:border-foreground/50 transition-colors"
              >
                <div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    {link.label}
                  </span>
                  <p className="text-foreground">{link.value}</p>
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-muted-foreground group-hover:text-foreground transition-colors"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
