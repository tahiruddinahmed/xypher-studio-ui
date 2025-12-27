import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, Star, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import Card from '../components/ui/Card'
import Section from '../components/ui/Section'

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
    category: 'Photographers',
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
    category: 'Videographers',
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
    category: 'Makeup Artists',
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
    category: 'DJs',
  },
  {
    id: 5,
    name: 'Lisa Anderson',
    service: 'Event Decorator',
    rating: 4.9,
    reviews: 98,
    location: 'San Francisco, CA',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
    price: '$1,200',
    category: 'Decorators',
  },
  {
    id: 6,
    name: 'James Wilson',
    service: 'Photographer',
    rating: 4.6,
    reviews: 76,
    location: 'Austin, TX',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    price: '$2,100',
    category: 'Photographers',
  },
]

const ProvidersListing = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const categories = ['All', 'Photographers', 'Makeup Artists', 'Decorators', 'DJs', 'Videographers']

  const filteredProviders = providers.filter((provider) => {
    const matchesSearch = provider.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      provider.service.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || provider.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="pt-20">
      <Section className="bg-gradient-to-br from-primary-50 to-accent-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Find Your Perfect Professional
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse our curated selection of top-rated event service providers
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by name or service..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2"
            >
              <Filter className="w-5 h-5" />
              <span>Filters</span>
            </button>
          </div>

          {/* Category Filter */}
          <motion.div
            initial={false}
            animate={{ height: isFilterOpen ? 'auto' : 0, opacity: isFilterOpen ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="flex flex-wrap gap-2 pt-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Results Count */}
        <p className="text-gray-600 mb-6">
          Showing {filteredProviders.length} {filteredProviders.length === 1 ? 'provider' : 'providers'}
        </p>

        {/* Providers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProviders.map((provider, index) => (
            <Link key={provider.id} to={`/providers/${provider.id}`}>
              <Card hover delay={index * 0.05}>
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

        {filteredProviders.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No providers found matching your criteria.</p>
          </div>
        )}
      </Section>
    </div>
  )
}

export default ProvidersListing

