import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  HTML5, CSS3, JavaScript, React as ReactIcon, NextJs, TypeScript, GitHubLight,
  GitLab, Git, Figma, NodeJs, Hashnode, ExpressJsDark, MongoDB, Jira,
  VisualStudioCode, Appwrite, TailwindCSS, Bootstrap5, ReactQuery, Redux,
  MaterialUI, Linux, Notion, GraphQL,
  Postman, GitHubDark, ExpressJsLight
} from "developer-icons";
import { useTheme } from 'next-themes';


const categories = ["All", "Frontend", "Backend", "Tools", "Design"];

export default function Skills() {

  const { theme } = useTheme()
  const [selectedCategory, setSelectedCategory] = useState("All");

  console.log(theme, "++66")

  const skills = [
    { name: "HTML5", icon: <HTML5 size={30} />, color: "orange", category: "Frontend" },
    { name: "CSS3", icon: <CSS3 size={30} />, color: "blue", category: "Frontend" },
    { name: "JavaScript", icon: <JavaScript size={30} />, color: "yellow", category: "Frontend" },
    { name: "React", icon: <ReactIcon size={30} />, color: "cyan", category: "Frontend" },
    { name: "Next.js", icon: <NextJs size={30} />, color: "slate", category: "Frontend" },
    { name: "TypeScript", icon: <TypeScript size={30} />, color: "blue", category: "Frontend" },
    {
      name: "GitHub",
      icon: theme === "dark" ? <GitHubLight size={30} /> : <GitHubDark size={30} />,
      color: "slate",
      category: "Tools"
    },
    {
      name: "Express JS",
      icon: theme === "dark" ? <ExpressJsLight size={30} /> : <ExpressJsDark size={30} />,
      color: "slate", 
      category: "Backend"
    },
    { name: "GitLab", icon: <GitLab size={30} />, color: "orange", category: "Tools" },
    { name: "Git", icon: <Git size={30} />, color: "red", category: "Tools" },
    { name: "Figma", icon: <Figma size={30} />, color: "purple", category: "Design" },
    { name: "Node.js", icon: <NodeJs size={30} />, color: "green", category: "Backend" },
    { name: "Hashnode", icon: <Hashnode size={30} />, color: "blue", category: "Tools" },
    { name: "MongoDB", icon: <MongoDB size={30} />, color: "green", category: "Backend" },
    { name: "Jira", icon: <Jira size={30} />, color: "blue", category: "Tools" },
    { name: "VS Code", icon: <VisualStudioCode size={30} />, color: "blue", category: "Tools" },
    { name: "Appwrite", icon: <Appwrite size={30} />, color: "pink", category: "Backend" },
    { name: "Tailwind CSS", icon: <TailwindCSS size={30} />, color: "cyan", category: "Design" },
    { name: "Bootstrap 5", icon: <Bootstrap5 size={30} />, color: "purple", category: "Design" },
    { name: "React Query", icon: <ReactQuery size={30} />, color: "red", category: "Frontend" },
    { name: "Redux", icon: <Redux size={30} />, color: "purple", category: "Frontend" },
    { name: "Material UI", icon: <MaterialUI size={30} />, color: "blue", category: "Design" },
    { name: "Linux", icon: <Linux size={30} />, color: "yellow", category: "Tools" },
    { name: "Notion", icon: <Notion size={30} />, color: "slate", category: "Tools" },
    { name: "GraphQL", icon: <GraphQL size={30} />, color: "pink", category: "Frontend" },
    { name: "Postman", icon: <Postman size={30} />, color: "orange", category: "Tools" },
  ];

  const filteredSkills = skills.filter(skill =>
    selectedCategory === "All" ? true : skill.category === selectedCategory
  );

  return (
    <motion.section
      id="skills"
      className="container py-12 md:py-30 lg:py-32"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <motion.h2
          className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          Skills & Technologies
        </motion.h2>
        <motion.p
          className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          Expertise in modern web technologies and tools
        </motion.p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className="rounded-full"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      <motion.div
        className="mx-auto grid gap-6 grid-cols-2 md:max-w-[64rem] md:grid-cols-3 lg:grid-cols-5 mt-12"
        layout
      >
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              whileHover={{
                scale: 1.02,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 10
                }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Card className="group overflow-hidden relative bg-gradient-to-br from-white to-slate-50 dark:from-slate-950 dark:to-slate-900 border border-slate-200 dark:border-slate-800">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent group-hover:via-primary/10 transition-all duration-500 translate-x-[-100%] group-hover:translate-x-[100%]" />
                <CardHeader className="p-4">
                  <div className="flex items-center gap-4">
                    <motion.div
                      className={`w-12 h-12 rounded-xl bg-${skill.color}-50 dark:bg-${skill.color}-500/10 
                        flex items-center justify-center relative`}
                      whileHover={{
                        rotate: 360,
                        transition: { duration: 0.8, ease: "easeInOut" }
                      }}
                    >
                      <motion.span
                        className={`text-${skill.color}-500 dark:text-${skill.color}-400`}
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {skill.icon}
                      </motion.span>
                    </motion.div>
                    <div className="flex-1">
                      <motion.h3
                        className="text-sm font-medium mb-1"
                      >
                        {skill.name}
                      </motion.h3>
                      <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary/40 to-primary transition-all duration-300 rounded-full" />
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.section>
  );
}