"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

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
            Hi, Im{" "}
            <span className="bg-gradient-to-r from-blue-400 via-teal-500 to-green-400 text-transparent bg-clip-text">
              Subham
            </span>
          </h1>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            <span className="bg-gradient-to-r from-blue-400 via-teal-500 to-green-400 text-transparent bg-clip-text">
              <TypeWriter text="Frontend Developer" delay={100} />
            </span>
          </h2>
          <p className="mt-6 max-w-3xl text-lg sm:text-xl text-muted-foreground">
            With 1.5 years of experience, I specialize in crafting modern web experiences using React, Next.js, and
            cutting-edge technologies.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <a href="#contact">
                Contact Me <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#projects">View Projects</a>
            </Button>
          </div>
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
    </section>
  )
}

