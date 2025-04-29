import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import Image from "next/image";
import { projectsData } from "../json/projectsData"
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="projects" className="container py-12 md:py-24 lg:py-32">
      {/* Heading */}
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Projects</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Check out some of my recent projects
        </p>
      </div>

      {/* Project Cards */}
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 w-full xl:grid-cols-3 mt-8">
        {projectsData.map((project) => (
          <Card key={project.title} className="flex flex-col">
            <CardHeader>
              <Image
                src={project.previewImageUrl}
                alt={project.title}
                width={500}
                height={500}
                className="object-cover rounded-md mb-2 cursor-pointer"
                onClick={() => setSelectedImage(project.previewImageUrl)}
              />
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
              {!project?.isDisabled && (
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Globe className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Image Preview Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)} >
        <DialogContent className="p-0 w-full rounded-2xl overflow-hidden">
          {selectedImage && (
            <Image
              src={selectedImage}
              alt="Project Preview"
              width={22000}
              height={22000}
              className="w-full h-auto object-contain rounded"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
