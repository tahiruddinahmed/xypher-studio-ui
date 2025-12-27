import { motion } from 'framer-motion'
import { Star, MapPin } from 'lucide-react'
import Card from '../ui/Card'
import Section from '../ui/Section'
import { Link } from 'react-router-dom'

const providers = [
  {
    id: 1,
    name: 'Sarah Johnson',
    service: 'Photographer',
    rating: 4.9,
    reviews: 127,
    location: 'New York, NY',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    price: '$2,500',
  },
  {
    id: 2,
    name: 'Michael Chen',
    service: 'Videographer',
    rating: 4.8,
    reviews: 89,
    location: 'Los Angeles, CA',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    price: '$3,200',
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    service: 'Makeup Artist',
    rating: 5.0,
    reviews: 203,
    location: 'Miami, FL',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    price: '$450',
  },
  {
    id: 4,
    name: 'David Park',
    service: 'DJ',
    rating: 4.7,
    reviews: 156,
    location: 'Chicago, IL',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
    price: '$1,800',
  },
]

const TopProviders = () => {
  return (
    <Section
      id="top-providers"
      title="Top-Rated Professionals"
      subtitle="Trusted by thousands of satisfied customers"
      className="bg-gray-50"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {providers.map((provider, index) => (
          <Link key={provider.id} to={`/providers/${provider.id}`}>
            <Card hover delay={index * 0.1}>
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={provider.image}
                  alt={provider.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center space-x-1 shadow-lg">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-semibold">{provider.rating}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {provider.name}
                </h3>
                <p className="text-primary-600 font-medium mb-2">{provider.service}</p>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{provider.location}</span>
                  </div>
                  <span>{provider.reviews} reviews</span>
                </div>
                <div className="pt-3 border-t border-gray-200">
                  <p className="text-2xl font-bold text-gray-900">
                    {provider.price}
                    <span className="text-sm font-normal text-gray-600">/event</span>
                  </p>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-center mt-12"
      >
        <Link to="/providers">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            View All Providers
          </motion.button>
        </Link>
      </motion.div>
    </Section>
  )
}

export default TopProviders

