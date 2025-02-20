import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Globe } from "lucide-react"

const projects = [
  {
    title: "Aco News",
    description: "Aco News is a fast, responsive news app that lets users filter news by language, category, and search. Stay informed on the latest global stories with a seamless, user-friendly experience.",
    technologies: ["React", "Tailwind CSS","tanstack Query",],
    liveUrl: "https://aconews-881f6.web.app/",
    githubUrl: "https://github.com/devSubham35/aconews",
  },  
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform built with Next.js and GraphQL",
    technologies: ["Next.js", "GraphQL", "Tailwind CSS", "Redux"],
    liveUrl: "https://example-ecommerce.com",
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
  },
  {
    title: "Task Management App",
    description: "A Kanban-style task management application using React and TanStack Query",
    technologies: ["React", "TanStack Query", "Material-UI", "REST API"],
    liveUrl: "https://example-taskmanager.com",
    githubUrl: "https://github.com/yourusername/task-management-app",
  },
  {
    title: "Weather Dashboard",
    description: "A responsive weather dashboard with real-time updates and forecasts",
    technologies: ["React", "Redux", "Tailwind CSS", "REST API"],
    liveUrl: "https://example-weather.com",
    githubUrl: "https://github.com/yourusername/weather-dashboard",
  },
];


export default function Projects() {
  return (
    <section id="projects" className="container py-12 md:py-24 lg:py-32">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Projects</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Check out some of my recent projects:
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 mt-8">
        {projects.map((project) => (
          <Card key={project.title} className="flex flex-col">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Globe className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

