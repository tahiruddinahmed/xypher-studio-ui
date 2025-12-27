import { Star, Quote } from 'lucide-react'
import Card from '../ui/Card'
import Section from '../ui/Section'

const testimonials = [
  {
    name: 'Jennifer Martinez',
    role: 'Bride',
    rating: 5,
    text: 'Xypher Studio made our wedding planning so much easier! We found the perfect photographer and makeup artist all in one place. The booking process was seamless.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
  },
  {
    name: 'Robert Thompson',
    role: 'Corporate Event Planner',
    rating: 5,
    text: 'As an event planner, I rely on Xypher Studio for all my client needs. The quality of professionals is outstanding, and the platform is incredibly user-friendly.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
  },
  {
    name: 'Amanda Lee',
    role: 'Birthday Party Host',
    rating: 5,
    text: 'I booked a DJ for my daughter\'s 16th birthday through Xypher Studio. The DJ was professional, arrived on time, and kept everyone dancing all night!',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
  },
]

const Testimonials = () => {
  return (
    <Section
      id="testimonials"
      title="What Our Customers Say"
      subtitle="Don't just take our word for it"
      className="bg-gray-50"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={testimonial.name} hover delay={index * 0.1}>
            <div className="p-6">
              <Quote className="w-8 h-8 text-primary-200 mb-4" />
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}

export default Testimonials

