'use client'
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import { ThemeProvider } from "@/components/ThemeProvider";
import WorkExperienceTimeline from "@/components/ui/WorkExperience";

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <Hero />
          <Skills />
          <Projects />
          <WorkExperienceTimeline/>
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  )
}

