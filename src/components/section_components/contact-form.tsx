import type React from "react"
import { Button } from "../ui/button"
import { Mail, Phone, MapPin, GitlabIcon as GitHub, Linkedin, Twitter } from "lucide-react"

const ContactForm: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-blue-600 p-8 text-white">
          <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
          <p className="mb-8">Feel free to reach out to me any time. I'll get back to you as soon as possible.</p>
          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="w-6 h-6 mr-4" />
              <span>crisjustineoracion22@gmail.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-6 h-6 mr-4" />
              <span>+1 234 567 890</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-6 h-6 mr-4" />
              <span>Tanjay City, Philippines</span>
            </div>
          </div>
          <div className="flex gap-4 mt-8">
            <a href="#" className="text-white hover:text-blue-200 transition-colors">
              <GitHub className="w-6 h-6" />
            </a>
            <a href="#" className="text-white hover:text-blue-200 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-white hover:text-blue-200 transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
        <form className="p-8 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="Your email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
              placeholder="Your message"
            ></textarea>
          </div>
          <Button className="w-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">Send Message</Button>
        </form>
      </div>
    </div>
  )
}

export default ContactForm

