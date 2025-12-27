import { motion } from 'framer-motion'
import { Search, Calendar, CreditCard, CheckCircle } from 'lucide-react'
import Section from '../ui/Section'

const steps = [
  {
    number: '01',
    title: 'Browse & Search',
    description: 'Explore our curated list of professional service providers',
    icon: Search,
  },
  {
    number: '02',
    title: 'Select Date & Time',
    description: 'Choose the perfect date and time slot for your event',
    icon: Calendar,
  },
  {
    number: '03',
    title: 'Secure Booking',
    description: 'Complete your booking with our secure payment system',
    icon: CreditCard,
  },
  {
    number: '04',
    title: 'Enjoy Your Event',
    description: 'Relax and enjoy your special day with confidence',
    icon: CheckCircle,
  },
]

const HowItWorks = () => {
  return (
    <Section
      id="how-it-works"
      title="How Xypher Studio Works"
      subtitle="Booking your perfect event professional is simple and straightforward"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => {
          const Icon = step.icon
          return (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connection Line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary-200 to-transparent z-0" />
              )}
              
              <div className="relative z-10 text-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Icon className="w-10 h-10 text-white" />
                </motion.div>
                <div className="text-6xl font-display font-bold text-primary-100 mb-2">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}

export default HowItWorks

