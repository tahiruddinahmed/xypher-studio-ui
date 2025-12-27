import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Star, MapPin, Calendar, Clock, CheckCircle, ArrowLeft } from 'lucide-react'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'

const providerData = {
  1: {
    name: 'Sarah Johnson',
    service: 'Photographer',
    rating: 4.9,
    reviews: 127,
    location: 'New York, NY',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=600&fit=crop',
    price: '$2,500',
    description: 'Award-winning wedding and event photographer with over 10 years of experience. Specializing in capturing authentic moments and creating timeless memories.',
    portfolio: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop',
    ],
  },
}

const ProviderProfile = () => {
  const { id } = useParams<{ id: string }>()
  const provider = providerData[id as keyof typeof providerData]

  if (!provider) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Provider not found</h1>
          <Link to="/providers" className="text-primary-600 hover:underline">
            Back to providers
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <motion.img
          src={provider.image}
          alt={provider.name}
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-7xl mx-auto">
            <Link
              to="/providers"
              className="inline-flex items-center space-x-2 mb-4 hover:text-primary-300 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to providers</span>
            </Link>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-2">
              {provider.name}
            </h1>
            <p className="text-xl text-gray-200 mb-4">{provider.service}</p>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-1">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="text-lg font-semibold">{provider.rating}</span>
                <span className="text-gray-300">({provider.reviews} reviews)</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="w-5 h-5" />
                <span>{provider.location}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <Card>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About</h2>
                <p className="text-gray-700 leading-relaxed">{provider.description}</p>
              </div>
            </Card>

            {/* Portfolio */}
            <Card>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Portfolio</h2>
                <div className="grid grid-cols-2 gap-4">
                  {provider.portfolio.map((image, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="relative h-64 overflow-hidden rounded-lg cursor-pointer"
                    >
                      <img
                        src={image}
                        alt={`Portfolio ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Reviews */}
            <Card>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Reviews</h2>
                <div className="space-y-6">
                  {[1, 2, 3].map((review) => (
                    <div key={review} className="border-b border-gray-200 pb-6 last:border-0">
                      <div className="flex items-center space-x-4 mb-2">
                        <div className="w-12 h-12 rounded-full bg-gray-300" />
                        <div>
                          <p className="font-semibold">Customer {review}</p>
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-4 h-4 fill-yellow-400 text-yellow-400"
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700">
                        Amazing service! {provider.name} exceeded all our expectations.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar - Booking Card */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="sticky top-24"
            >
              <Card>
                <div className="p-6">
                  <div className="text-center mb-6">
                    <p className="text-4xl font-bold text-gray-900 mb-2">
                      {provider.price}
                    </p>
                    <p className="text-gray-600">per event</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-primary-600" />
                      <span className="text-gray-700">Available dates</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-primary-600" />
                      <span className="text-gray-700">Flexible timing</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary-600" />
                      <span className="text-gray-700">Instant confirmation</span>
                    </div>
                  </div>

                  <Link to={`/booking/${id}`}>
                    <Button className="w-full" size="lg">
                      Book Now
                    </Button>
                  </Link>

                  <p className="text-sm text-gray-500 text-center mt-4">
                    Free cancellation up to 48 hours before event
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProviderProfile

