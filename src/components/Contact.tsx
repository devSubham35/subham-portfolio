"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageSquare, User } from "lucide-react"
import { WaveBackground } from "./WaveBackground"
import { toast } from "@/hooks/use-toast"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log("Form submitted:", { name, email, message })
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    })
    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <section id="contact" className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="container relative z-10">
        <div className="mx-auto max-w-[58rem] text-center mb-12">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl mb-4">Get in Touch</h2>
          <p className="text-muted-foreground sm:text-lg sm:leading-7">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>
        <div className="mx-auto max-w-[40rem]">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-background/80 backdrop-blur-sm p-8 rounded-lg shadow-lg"
          >
            <div className="flex items-center space-x-4">
              <User className="text-muted-foreground" />
              <Input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="text-muted-foreground" />
              <Input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex items-start space-x-4">
              <MessageSquare className="text-muted-foreground mt-2" />
              <Textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="min-h-[100px]"
              />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
      <WaveBackground />
    </section>
  )
}

