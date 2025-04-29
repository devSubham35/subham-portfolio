"use client"

import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Mail, MessageSquare, User } from "lucide-react"
import { WaveBackground } from "./WaveBackground"
import { toast } from "sonner"

interface ContactProps {
  heading?: string
  description?: string
}

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email address").required("Email is required"),
  message: yup.string().required("Message is required"),
})

type FormData = yup.InferType<typeof schema>

export default function Contact({
  heading = "Get in Touch",
  description = "Have a question or want to work together? Feel free to reach out!",
}: ContactProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  })

  const onSubmit = async () => {
    toast.success("Thanks for reaching out. I'll get back to you soon.")
    reset()
  }

  return (
    <section id="contact" className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="container relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{heading}</h2>
          <p className="text-muted-foreground mt-2 text-base md:text-lg">{description}</p>
        </div>

        <Card className="mx-auto max-w-xl bg-white/50 dark:bg-gray-950 backdrop-blur-md shadow-xl border-none rounded-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-semibold">Send a Message</CardTitle>
            <CardDescription>Fill in the form and we’ll get back to you shortly.</CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="flex items-center gap-3">
                  <User className="text-muted-foreground" size={18} />
                  <Input placeholder="Your Name" {...register("name")} />
                </label>
                {errors.name && <p className="text-sm text-red-500 mt-1 pl-7">{errors.name.message}</p>}
              </div>

              <div>
                <label className="flex items-center gap-3">
                  <Mail className="text-muted-foreground" size={18} />
                  <Input type="email" placeholder="Your Email" {...register("email")} />
                </label>
                {errors.email && <p className="text-sm text-red-500 mt-1 pl-7">{errors.email.message}</p>}
              </div>

              <div>
                <label className="flex items-start gap-3">
                  <MessageSquare className="text-muted-foreground mt-2" size={18} />
                  <Textarea placeholder="Your Message" {...register("message")} className="min-h-[120px]" />
                </label>
                {errors.message && <p className="text-sm text-red-500 mt-1 pl-7">{errors.message.message}</p>}
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      <WaveBackground />
    </section>
  )
}
