import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const RollingText = () => {
  const phrases = [
    'a software engineer 💻',
    'a systems debugger 🔧',
    'learning ML 🤖',
    'a curious explorer 🔍',
    'a problem solver 💡',
    'a dragon boat paddler 🐉',
    'a cat person 🐱'
  ]

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % phrases.length)
    }, 3000) // 3000: change phrase every 3 seconds

    return () => clearInterval(interval)
  }, [phrases.length])

  return (
    <div className='overflow-hidden whitespace-nowrap'>
      <motion.p
        key={index}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.75 }}
        className='py-1 font-serif text-xl font-semibold text-cyan-600 sm:text-2xl'
      >
        {phrases[index]}
      </motion.p>
    </div>
  )
}

export default RollingText
