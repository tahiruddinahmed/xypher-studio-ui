import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface AnimatedTypographyProps {
  words: string[]
  typingSpeed?: number
  pauseDuration?: number
  showCursor?: boolean
}

const AnimatedTypography = ({
  words,
  typingSpeed = 100,
  pauseDuration = 2000,
  showCursor = true,
}: AnimatedTypographyProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping] = useState(true)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (words.length === 0) return
    
    const currentWord = words[currentWordIndex]
    let timeout: ReturnType<typeof setTimeout> | undefined

    if (isTyping && !isDeleting) {
      // Typing phase
      if (displayedText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1))
        }, typingSpeed)
      } else {
        // Finished typing, pause before deleting
        timeout = setTimeout(() => {
          setIsDeleting(true)
        }, pauseDuration)
      }
    } else if (isDeleting) {
      // Deleting phase
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1))
        }, typingSpeed / 2) // Delete faster than typing
      } else {
        // Finished deleting, move to next word
        setIsDeleting(false)
        setCurrentWordIndex((prev) => (prev + 1) % words.length)
      }
    }

    return () => {
      if (timeout) clearTimeout(timeout)
    }
  }, [displayedText, isTyping, isDeleting, currentWordIndex, words, typingSpeed, pauseDuration])

  return (
    <span className="inline-block min-h-[1.2em]">
      <AnimatePresence mode="wait">
        <motion.span
          key={`${currentWordIndex}-${displayedText}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="inline-block"
        >
          {displayedText.split('').map((char, index) => (
            <motion.span
              key={`${currentWordIndex}-${index}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="inline-block"
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
          {showCursor && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              className="inline-block w-0.5 h-[1em] bg-primary-600 ml-1 align-middle"
            />
          )}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export default AnimatedTypography

