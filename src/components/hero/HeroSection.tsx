import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import {
  Search,
  Calendar,
  MapPin,
  Camera,
  Sparkles,
  Music,
  Palette,
  Phone,
} from 'lucide-react'

const HeroSection = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('service')
  const [searchForm, setSearchForm] = useState({
    category: '',
    eventDate: '',
    location: '',
  })

  const categoryOptions = [
    { value: '', label: 'Select Service Type' },
    { value: 'photographers', label: 'Photographers', icon: Camera },
    { value: 'makeup', label: 'Makeup Artists', icon: Sparkles },
    { value: 'decorators', label: 'Decorators', icon: Palette },
    { value: 'djs', label: 'DJs', icon: Music },
    { value: 'videographers', label: 'Videographers', icon: Camera },
    { value: 'event-planners', label: 'Event Planners', icon: Calendar },
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (searchForm.category) params.append('category', searchForm.category)
    if (searchForm.eventDate) params.append('date', searchForm.eventDate)
    if (searchForm.location) params.append('location', searchForm.location)

    navigate(`/providers?${params.toString()}`)
  }

  // Filter out empty option and create floating cards from categories
  const categoryCards = categoryOptions.filter((opt) => opt.value !== '')
  
  const floatingCards = categoryCards.map((category, index) => {
    const Icon = category.icon || Camera
    const positions = [
      'top-8 -right-8',        // Top right
      'top-1/4 -left-8',       // Top left
      'top-1/2 -right-12',     // Middle right
      'bottom-1/3 -left-10',   // Bottom left
      'bottom-16 right-4',     // Bottom right
      'top-3/4 left-4',        // Lower middle left
    ]
    return {
      icon: Icon,
      text: category.label,
      position: positions[index] || 'top-10 -right-4',
      delay: 0.2 + index * 0.2,
      value: category.value,
    }
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-16 sm:pt-20">
      {/* Floating Lines Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <svg
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1920 1080"
        >
          {/* Animated horizontal floating lines */}
          {[...Array(12)].map((_, i) => (
            <motion.path
              key={`h-${i}`}
              d={`M ${50 + i * 160} ${100 + i * 80} Q ${300 + i * 120} ${80 + i * 60} ${600 + i * 100} ${100 + i * 80} T ${1200 + i * 80} ${100 + i * 80}`}
              fill="none"
              stroke="rgba(251, 146, 60, 0.4)"
              strokeWidth="2"
              strokeDasharray="8,8"
              initial={{ pathLength: 0, opacity: 0.3 }}
              animate={{
                pathLength: 1,
                opacity: [0.3, 0.6, 0.3],
                strokeDashoffset: [0, -20, 0],
              }}
              transition={{
                duration: 15 + i * 1,
                repeat: Infinity,
                ease: 'linear',
                delay: i * 0.8,
              }}
            />
          ))}
          {/* Vertical lines */}
          {[...Array(10)].map((_, i) => (
            <motion.line
              key={`v-${i}`}
              x1={100 + i * 180}
              y1="0"
              x2={100 + i * 180}
              y2="1080"
              stroke="rgba(251, 146, 60, 0.3)"
              strokeWidth="1.5"
              strokeDasharray="12,12"
              initial={{ pathLength: 0, opacity: 0.2 }}
              animate={{
                pathLength: 1,
                opacity: [0.2, 0.5, 0.2],
                strokeDashoffset: [0, -24, 0],
              }}
              transition={{
                duration: 12 + i * 0.5,
                repeat: Infinity,
                ease: 'linear',
                delay: i * 0.6,
              }}
            />
          ))}
          {/* Curved connecting lines */}
          {[...Array(8)].map((_, i) => (
            <motion.path
              key={`c-${i}`}
              d={`M ${200 + i * 220} ${150 + i * 120} Q ${500 + i * 80} ${400 + i * 80} ${800 + i * 60} ${700 + i * 100}`}
              fill="none"
              stroke="rgba(251, 146, 60, 0.35)"
              strokeWidth="1.5"
              strokeDasharray="10,10"
              initial={{ pathLength: 0, opacity: 0.25 }}
              animate={{
                pathLength: [0, 1, 0],
                opacity: [0.25, 0.55, 0.25],
                strokeDashoffset: [0, -20, 0],
              }}
              transition={{
                duration: 18 + i * 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 1.2,
              }}
            />
          ))}
          {/* Diagonal lines */}
          {[...Array(6)].map((_, i) => (
            <motion.line
              key={`d-${i}`}
              x1={0}
              y1={200 + i * 150}
              x2="1920"
              y2={300 + i * 140}
              stroke="rgba(251, 146, 60, 0.25)"
              strokeWidth="1"
              strokeDasharray="15,15"
              initial={{ pathLength: 0, opacity: 0.2 }}
              animate={{
                pathLength: 1,
                opacity: [0.2, 0.45, 0.2],
                strokeDashoffset: [0, -30, 0],
              }}
              transition={{
                duration: 20 + i * 2,
                repeat: Infinity,
                ease: 'linear',
                delay: i * 2,
              }}
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Side: Hero Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4 sm:space-y-5 lg:space-y-6"
          >
            {/* Headline */}
            <motion.div variants={itemVariants} className="space-y-1 sm:space-y-2">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-extrabold leading-[1.1] sm:leading-tight">
                <span className="text-gray-900">BOOK YOUR</span>
                <br />
                <span className="text-gray-900">DREAM</span>{' '}
                <span className="text-orange-600">EVENT!</span>
                <br />
                <span className="text-gray-900 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium">
                  THE PERFECT MOMENT
                </span>
                <br />
                <span className="text-gray-900 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium">
                  IS WAITING FOR YOU
                </span>
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base md:text-lg text-gray-500 font-normal max-w-xl leading-relaxed mt-2 sm:mt-0"
            >
              Connect with trusted event professionals for weddings, parties, and
              corporate events. Book the perfect service provider in minutes.
            </motion.p>

            {/* Booking Form */}
            <motion.div variants={itemVariants} className="mt-4 sm:mt-5 lg:mt-6">
              <form
                onSubmit={handleSearch}
                className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden w-full"
              >
                {/* Tabs */}
                <div className="flex border-b border-gray-200">
                  <button
                    type="button"
                    onClick={() => setActiveTab('service')}
                    className={`flex-1 px-2 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-medium transition-colors ${
                      activeTab === 'service'
                        ? 'text-orange-600 border-b-2 border-orange-600 bg-orange-50'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <span className="hidden sm:inline">Service Type</span>
                    <span className="sm:hidden">Service</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('venue')}
                    className={`flex-1 px-2 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-medium transition-colors ${
                      activeTab === 'venue'
                        ? 'text-orange-600 border-b-2 border-orange-600 bg-orange-50'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Venue
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('date')}
                    className={`flex-1 px-2 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-medium transition-colors ${
                      activeTab === 'date'
                        ? 'text-orange-600 border-b-2 border-orange-600 bg-orange-50'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Date
                  </button>
                </div>

                {/* Form Fields */}
                <div className="p-4 sm:p-5">
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    {/* Destination/Venue Field */}
                    <div className="relative flex-1">
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                        <input
                          type="text"
                          value={searchForm.location}
                          onChange={(e) =>
                            setSearchForm({ ...searchForm, location: e.target.value })
                          }
                          placeholder="City or Pincode"
                          className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-gray-900 placeholder-gray-400"
                        />
                      </div>
                    </div>

                    {/* Date Field */}
                    <div className="relative flex-1">
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                        <input
                          type="date"
                          value={searchForm.eventDate}
                          onChange={(e) =>
                            setSearchForm({ ...searchForm, eventDate: e.target.value })
                          }
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-gray-900"
                        />
                      </div>
                    </div>

                    {/* Search Button */}
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full sm:w-auto px-6 py-2.5 sm:py-3 bg-orange-600 text-white rounded-lg font-semibold text-sm sm:text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                    >
                      <Search className="w-4 h-4 sm:w-5 sm:h-5" />
                      Search
                    </motion.button>
                  </div>

                  {/* Service Type Dropdown (shown when Service Type tab is active) */}
                  {activeTab === 'service' && (
                    <div className="relative mt-3 sm:mt-4">
                      <div className="relative">
                        <Camera className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                        <select
                          value={searchForm.category}
                          onChange={(e) =>
                            setSearchForm({ ...searchForm, category: e.target.value })
                          }
                          className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none appearance-none bg-white text-gray-900"
                        >
                          {categoryOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  )}
                </div>
              </form>
            </motion.div>
          </motion.div>

          {/* Right Side: Hero Image with Floating Cards */}
          <motion.div
            variants={itemVariants}
            className="relative hidden lg:block h-[450px] lg:h-[500px] xl:h-[550px] 2xl:h-[600px]"
          >
            {/* Background Circular Shape with Halftone Pattern */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full max-w-[350px] max-h-[350px] lg:max-w-[400px] lg:max-h-[400px] xl:max-w-[450px] xl:max-h-[450px] 2xl:max-w-[500px] 2xl:max-h-[500px]">
                {/* Large circular background */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-400 to-orange-600"
                  style={{
                    backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)`,
                    backgroundSize: '20px 20px',
                  }}
                />

                {/* Hero Image */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="relative z-10 w-full h-full flex items-center justify-center"
                >
                  <img
                    src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&h=800&fit=crop"
                    alt="Happy event celebration"
                    className="w-full h-full object-cover rounded-full shadow-2xl"
                  />
                </motion.div>

                {/* Decorative Dashed Line */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  style={{ zIndex: 5 }}
                >
                  <motion.path
                    d="M 50 200 Q 250 100 450 200 T 450 400"
                    fill="none"
                    stroke="rgba(255, 107, 53, 0.3)"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 1 }}
                  />
                </svg>
              </div>
            </div>

            {/* Floating Feature Cards */}
            {floatingCards.map((card, index) => {
              const Icon = card.icon
              const isSelected = searchForm.category === card.value
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: card.delay }}
                  whileHover={{ scale: 1.05 }}
                  className={`absolute ${card.position} z-20 cursor-pointer`}
                  onClick={() =>
                    setSearchForm({ ...searchForm, category: card.value })
                  }
                >
                  <motion.div
                    animate={floatAnimation}
                    transition={{ delay: card.delay }}
                    className={`bg-white rounded-xl shadow-lg p-2 sm:p-3 flex items-center gap-1.5 sm:gap-2 min-w-[140px] sm:min-w-[160px] border transition-all ${
                      isSelected
                        ? 'border-orange-600 bg-orange-50'
                        : 'border-gray-100 hover:border-orange-300'
                    }`}
                  >
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        isSelected
                          ? 'bg-orange-600'
                          : 'bg-orange-100'
                      }`}
                    >
                      <Icon
                        className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${
                          isSelected ? 'text-white' : 'text-orange-600'
                        }`}
                      />
                    </div>
                    <span className="text-[10px] sm:text-xs font-medium text-gray-900 leading-tight">
                      {card.text}
                    </span>
                  </motion.div>
                </motion.div>
              )
            })}

            {/* Customer Service Badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="absolute bottom-8 sm:bottom-12 right-4 sm:right-8 z-20"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl shadow-lg p-2 sm:p-3 flex items-center gap-2 sm:gap-3 border border-gray-100"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-orange-600 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-gray-500 font-medium">Customer Service</p>
                  <p className="text-xs sm:text-sm font-semibold text-gray-900">+1 (555) 123-4567</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Mobile/Tablet: Hero Image Below Content */}
          <motion.div
            variants={itemVariants}
            className="relative lg:hidden h-[280px] sm:h-[320px] md:h-[360px] mt-6 sm:mt-8"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Circular background */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 max-w-[250px] max-h-[250px] sm:max-w-[280px] sm:max-h-[280px] md:max-w-[320px] md:max-h-[320px] mx-auto" />
              {/* Image */}
              <img
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&h=800&fit=crop"
                alt="Happy event celebration"
                className="relative z-10 w-full h-full max-w-[250px] max-h-[250px] sm:max-w-[280px] sm:max-h-[280px] md:max-w-[320px] md:max-h-[320px] object-cover rounded-full shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
