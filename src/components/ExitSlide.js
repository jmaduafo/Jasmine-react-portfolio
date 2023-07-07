import React from 'react'
import { motion } from 'framer-motion'

const ExitSlide = () => {
  return (
    <motion.div className='exit-slide' initial={{ width: 600, height: 0 }} exit={{ height: 400 }}>
    </motion.div>
  )
}

export default ExitSlide