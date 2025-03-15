import type React from "react"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Testimonial {
  name: string
  role: string
  company: string
  image: string
  content: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "Tech Solutions Inc.",
    image: "/images/testimonial1.jpg",
    content:
      "Working with CJ was an absolute pleasure. His attention to detail and creative approach brought our vision to life perfectly.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "CEO",
    company: "StartUp Hub",
    image: "/images/testimonial2.jpg",
    content:
      "Exceptional work quality and professional attitude. CJ delivered beyond our expectations and within the timeline.",
    rating: 5,
  },
  {
    name: "Emma Davis",
    role: "Product Manager",
    company: "Innovation Labs",
    image: "/images/testimonial3.jpg",
    content:
      "The designs CJ created for our product launch were outstanding. He truly understands modern design trends.",
    rating: 5,
  },
]

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-medium mb-2 inline-block">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">What Clients Say</h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <p className="text-blue-600 text-sm">{testimonial.company}</p>
                </div>
              </div>

              <div className="mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 inline-block" fill="currentColor" />
                ))}
              </div>

              <blockquote className="text-gray-600 leading-relaxed">"{testimonial.content}"</blockquote>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 bg-gray-50 px-6 py-3 rounded-full shadow-md">
            <span className="text-gray-600">Want to share your experience?</span>
            <Button className="bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">Leave a Review</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection

