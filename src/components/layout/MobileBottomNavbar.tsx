import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Home, Search, Calendar, Heart, User } from 'lucide-react'

const MobileBottomNavbar = () => {
  const location = useLocation()

  const navItems = [
    {
      label: 'Home',
      icon: Home,
      route: '/',
      priority: 'primary',
    },
    {
      label: 'Explore',
      icon: Search,
      route: '/explore',
      priority: 'primary',
    },
    {
      label: 'Bookings',
      icon: Calendar,
      route: '/bookings',
      priority: 'primary',
    },
    {
      label: 'Saved',
      icon: Heart,
      route: '/saved',
      priority: 'secondary',
    },
    {
      label: 'Profile',
      icon: User,
      route: '/profile',
      priority: 'secondary',
    },
  ]

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      style={{
        paddingBottom: 'max(env(safe-area-inset-bottom), 0.5rem)',
      }}
    >
      {/* Background blur overlay */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-lg" />
      
      {/* Navigation container */}
      <div className="relative max-w-md mx-auto px-4 py-2">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="bg-white rounded-full shadow-lg border border-gray-100 px-2 py-2"
        >
          <div className="flex items-center justify-around relative">
            {/* Active indicator background */}
            <AnimatePresence>
              {navItems.map((item, index) => {
                if (isActive(item.route)) {
                  return (
                    <motion.div
                      key={`indicator-${item.route}`}
                      layoutId="activeIndicator"
                      className="absolute top-0 bottom-0 rounded-full bg-orange-50"
                      initial={false}
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                      style={{
                        left: `${(index * 100) / navItems.length}%`,
                        width: `${100 / navItems.length}%`,
                      }}
                    />
                  )
                }
                return null
              })}
            </AnimatePresence>

            {/* Navigation items */}
            {navItems.map((item) => {
              const Icon = item.icon
              const active = isActive(item.route)

              return (
                <Link
                  key={item.route}
                  to={item.route}
                  className="relative flex-1 flex flex-col items-center justify-center py-2 px-1 min-h-[44px] touch-manipulation"
                  aria-label={item.label}
                >
                  <motion.div
                    whileTap={{ scale: 0.85 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    className="flex flex-col items-center justify-center gap-1"
                  >
                    <motion.div
                      animate={{
                        scale: active ? 1.1 : 1,
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 25,
                      }}
                      className="relative"
                    >
                      <Icon
                        size={24}
                        className={`transition-colors duration-200 ${
                          active
                            ? 'text-orange-600'
                            : 'text-gray-500'
                        }`}
                        strokeWidth={active ? 2.5 : 2}
                      />
                      {/* Active dot indicator */}
                      {active && (
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          className="absolute -top-1 -right-1 w-2 h-2 bg-orange-600 rounded-full border-2 border-white"
                        />
                      )}
                    </motion.div>
                    <motion.span
                      animate={{
                        color: active ? '#ea580c' : '#6b7280',
                        fontWeight: active ? 600 : 400,
                      }}
                      transition={{ duration: 0.2 }}
                      className="text-[10px] sm:text-xs font-medium leading-tight text-center"
                    >
                      {item.label}
                    </motion.span>
                  </motion.div>
                </Link>
              )
            })}
          </div>
        </motion.div>
      </div>
    </nav>
  )
}

export default MobileBottomNavbar

