"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Briefcase } from "lucide-react"

// Types
interface Experience {
    company: string
    role: string
    duration: string
    location: string
    description: string
    technologies: string[]
}

interface WorkExperienceTimelineProps {
    experiences: Experience[]
}

export default function WorkExperienceTimeline({ experiences }: WorkExperienceTimelineProps) {
    return (
        <div className="max-w-5xl mx-auto py-12 px-4">
            <div className="flex flex-col justify-center items-center my-12 gap-5">
                <motion.h2
                    className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                >
                    Work Experiences
                </motion.h2>
                <motion.p
                    className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                >
                    Crafting scalable, maintainable and reusable code
                </motion.p>
            </div>

            <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-400 via-purple-500 to-blue-500 rounded-full"></div>

                {experiences.map((experience, index) => (
                    <motion.div
                        key={index}
                        className={`mb-16 flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                        {/* Timeline dot */}
                        <motion.div
                            className="absolute left-0 md:left-[48.9%] transform md:-translate-x-1/2 w-6 h-6 
                            rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 border-4 border-background shadow-lg z-10"
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                        />

                        {/* Card Content */}
                        <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-12 md:pr-6" : "md:pr-12 md:pl-6"}`}>
                            <Card
                                className={`overflow-hidden shadow-lg border-none ${index % 2 === 0
                                    ? "bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20"
                                    : "bg-gradient-to-br from-pink-50 to-yellow-50 dark:from-pink-900/20 dark:to-yellow-900/20"
                                    }`}
                            >
                                <CardContent className="p-6">
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: index * 0.2 + 0.3 }}
                                    >
                                        <h3 className="text-xl font-bold text-primary mb-1">{experience.role}</h3>
                                        <div className="flex items-center mb-2 text-pink-600 dark:text-pink-400">
                                            <Briefcase className="w-4 h-4 mr-2" />
                                            <span className="font-medium">{experience.company}</span>
                                        </div>

                                        <div className="flex flex-col sm:flex-row sm:items-center text-sm text-muted-foreground gap-y-1 sm:gap-x-6">
                                            <div className="flex items-center">
                                                <Calendar className="w-4 h-4 mr-1" />
                                                <span>{experience.duration}</span>
                                            </div>
                                            <div className="flex items-center">
                                                <MapPin className="w-4 h-4 mr-1" />
                                                <span>{experience.location}</span>
                                            </div>
                                        </div>

                                        <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">{experience.description}</p>

                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {experience.technologies.map((tech, techIndex) => {
                                                const colors = [
                                                    "bg-pink-500",
                                                    "bg-blue-500",
                                                    "bg-green-500",
                                                    "bg-yellow-500",
                                                    "bg-purple-500",
                                                    "bg-red-500",
                                                    "bg-teal-500",
                                                    "bg-orange-500",
                                                    "bg-indigo-500",
                                                    "bg-rose-500"
                                                ];

                                                const color = colors[techIndex % colors.length];

                                                return (
                                                    <motion.div
                                                        key={techIndex}
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ delay: index * 0.2 + 0.5 + techIndex * 0.05 }}
                                                    >
                                                        <Badge
                                                            className={`${color} text-white shadow-sm hover:scale-105 transition-transform duration-200`}
                                                        >
                                                            {tech}
                                                        </Badge>
                                                    </motion.div>
                                                );
                                            })}
                                        </div>

                                    </motion.div>
                                </CardContent>
                            </Card>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
