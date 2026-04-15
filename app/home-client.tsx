"use client"

import { ResumeNavigation } from "@/components/resume-navigation"
import { ResumeHeroSection } from "@/components/resume-hero-section"
import { ResumeAboutSection } from "@/components/resume-about-section"
import { ResumeExperienceSection } from "@/components/resume-experience-section"
import { ResumeProjectsSection } from "@/components/resume-projects-section"
import { ResumeContactSection } from "@/components/resume-contact-section"
import { ResumeFooter } from "@/components/resume-footer"

export default function HomeClient() {
  return (
    <main className="min-h-screen bg-background">
      <ResumeNavigation />
      <ResumeHeroSection />
      <ResumeAboutSection />
      <ResumeExperienceSection />
      <ResumeProjectsSection />
      <ResumeContactSection />
      <ResumeFooter />
    </main>
  )
}
