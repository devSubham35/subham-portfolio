"use client"

import * as yup from "yup"
import { toast } from "sonner"
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { WaveBackground } from "./WaveBackground"
import { Textarea } from "@/components/ui/textarea"
import { yupResolver } from "@hookform/resolvers/yup"
import { Mail, MapPin } from "lucide-react"


const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email address").required("Email is required"),
  message: yup.string().required("Message is required"),
})

type FormData = yup.InferType<typeof schema>

export default function Contact() {

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: yupResolver(schema),
  })

  const onSubmit = async () => {
    toast.success("Thanks for reaching out. I'll get back to you soon.")
    reset()
  }

  return (
    <section id="contact" className="relative pb-20 overflow-hidden">

     <div className="relative z-10 w-[90%] md:max-w-6xl mx-auto grid md:grid-cols-2 gap-8 rounded-2xl 
     shadow-lg backdrop-blur-lg border bg-white dark:bg-black md:bg-transparent">
        {/* Contact Info */}
        <div className="bg-slate-900 text-white p-8 pb-4 flex flex-col justify-between rounded-l-2xl">
          <div>
            <h2 className="text-2xl md:text-5xl font-semibold mb-2 md:leading-[60px]">Contact Information</h2>
            <p className="text-sm text-gray-300 mb-10">Say something to start a live chat!</p>

            <ul className="space-y-4 text-sm">
              {/* <li className="flex items-center gap-3">
                <Phone size={18} /> +91 98319 85565
              </li> */}
              <li className="flex items-center gap-3">
                <Mail size={18} /> devsubham35@gmail.com
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} /> Kolkata, West Bengal, India
              </li>
            </ul>
          </div>

          <div className="mt-8 flex gap-4">
            {/* Replace with your icons or socials */}
            <a href="#" className="text-yellow-400 hover:text-yellow-500 transition"><i className="fab fa-twitter" /></a>
            <a href="#" className="text-pink-400 hover:text-pink-500 transition"><i className="fab fa-instagram" /></a>
            <a href="#" className="text-orange-400 hover:text-orange-500 transition"><i className="fab fa-discord" /></a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="px-8 pb-8 md:p-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Contact Me</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            Any question or remarks? Just write us a message!
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <Input placeholder="Full Name" {...register("name")} />
              {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <Input type="email" placeholder="Email" {...register("email")} />
              {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <Textarea placeholder="Write your message..." rows={5} {...register("message")} />
              {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>}
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full py-6 rounded-full cursor-pointer">
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>

      <WaveBackground />
    </section>
  )
}
