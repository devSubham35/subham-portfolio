"use client"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Link } from "lucide-react"

const TypeWriter = ({ text, delay }: { text: string; delay: number }) => {
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex])
        setCurrentIndex((prevIndex) => prevIndex + 1)
      }, delay)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, delay, text])

  return <span>{currentText}</span>
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32 bg-grid-pattern">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center"
        >
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Hey 👋 I`&apos;m{" "}
            <span className="bg-gradient-to-r from-blue-400 via-teal-500 to-green-400 text-transparent bg-clip-text">
              Subham
            </span>
          </h1>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            <span className="bg-gradient-to-r from-blue-400 via-teal-500 to-green-400 text-transparent bg-clip-text">
              <TypeWriter text="Frontend Developer 💻" delay={100} />
            </span>
          </h2>
          <p className="mt-6 max-w-3xl text-lg sm:text-xl text-muted-foreground">
            🚀 Crafting fast, scalable, and user-friendly web experiences with <strong>Next.js</strong> & <strong>React</strong>. 
            I`&apos;m passionate about building clean UIs that deliver ✨ delightful experiences and solve real-world problems.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <a href="#contact">
                Let`&apos;s Talk <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="bg-blue-700 text-white">
              <a href="#projects">My Work 🔨</a>
            </Button>
            <Button size="lg">
              <a href="/Subham_Betal_CV.pdf" download className="flex items-center gap-2">
                Resume <Download className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" className="bg-blue-700 text-white">
              <a href="www.linkedin.com/in/subham-betal-5b6a31266" className="flex items-center gap-2">
                Linkedin <Link className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
    </section>
  )
}
