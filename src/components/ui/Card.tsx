import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  delay?: number
}

const Card = ({ children, className = '', hover = true, delay = 0 }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -8, transition: { duration: 0.2 } } : {}}
      className={`bg-white rounded-xl shadow-md overflow-hidden ${hover ? 'hover:shadow-xl transition-shadow' : ''} ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default Card

