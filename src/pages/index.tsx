import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
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
          <WorkExperienceTimeline
            experiences={[
              {
                company: "Webskitters Technology Solutions Pvt Ltd",
                role: "Frontend Developer",
                duration: "Sep 2024 – Present",
                location: "Kolkata, India",
                description: "Improved performance of web apps and delivered pixel-perfect UI for enterprise clients.",
                technologies: ["Next.js", "Zustand", "shadcn/ui", "TanStack Query"],
              },
              {
                company: "Freelance",
                role: "Frontend Developer",
                duration: "February 2025 – April 2025",
                location: "Remote",
                description: "Working on a bulk ultimate contact solution website",
                technologies: ["React.js", "REST Api", "MUI", "Tailwind", "Figma", "TanStack Query"],
              },
              {
                company: "Freelance",
                role: "UI & Frontend Developer",
                duration: "July 2024 – February 2025",
                location: "Remote",
                description: "Working on a Parking solution based admin and ui pannel website",
                technologies: ["Next.js", "Zustand", "shadcn/ui", "Tailwind", "Figma", "TanStack Query"],
              },
              {
                company: "Underscore Technology Pvt Ltd",
                role: "Frontend Developer",
                duration: "Nov 2023 – Sep 2024",
                location: "Kolkata, India",
                description: "Built scalable UIs and maintained frontend architecture using React and Tailwind CSS.",
                technologies: ["React", "Tailwind", "Vite", "Redux"],
              },
            ]}
          />

          <Contact />
        </main>
      </div>
    </ThemeProvider>
  )
}

