import React from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header initial={{y: -100}} animate={{y: 0, ease: "easeIn", transition: {duration: 1.3}}}>
      <Navbar/>
    </motion.header>
  )
}

export default Header