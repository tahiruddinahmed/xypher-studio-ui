import { motion } from 'framer-motion'
import { Camera, Sparkles, Palette, Music, Video, Users } from 'lucide-react'
import Card from '../ui/Card'
import Section from '../ui/Section'
import { Link } from 'react-router-dom'

const categories = [
  {
    name: 'Photographers',
    icon: Camera,
    description: 'Capture your special moments with professional photography',
    color: 'from-blue-500 to-blue-600',
  },
  {
    name: 'Makeup Artists',
    icon: Sparkles,
    description: 'Look your absolute best with expert makeup services',
    color: 'from-pink-500 to-rose-600',
  },
  {
    name: 'Decorators',
    icon: Palette,
    description: 'Transform your venue into a stunning space',
    color: 'from-purple-500 to-purple-600',
  },
  {
    name: 'DJs',
    icon: Music,
    description: 'Keep the party going with professional DJ services',
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    name: 'Videographers',
    icon: Video,
    description: 'Create lasting memories with cinematic video production',
    color: 'from-red-500 to-red-600',
  },
  {
    name: 'Event Planners',
    icon: Users,
    description: 'Full-service event planning and coordination',
    color: 'from-teal-500 to-teal-600',
  },
]

const ServiceCategories = () => {
  return (
    <Section
      id="services"
      title="Our Services"
      subtitle="Discover the perfect professionals for your event"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => {
          const Icon = category.icon
          return (
            <Link key={category.name} to="/providers">
              <Card hover delay={index * 0.1}>
                <div className="p-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </Card>
            </Link>
          )
        })}
      </div>
    </Section>
  )
}

export default ServiceCategories

