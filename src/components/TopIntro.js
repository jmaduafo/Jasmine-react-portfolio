import React from 'react';
import { createContext, useState } from "react";
import "../pages/Home/home.css";
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const ThemeContext = createContext(null);

const TopIntro = () => {
    const [theme, setTheme] = useState("esther");

    function toggleTheme() {
        setTheme((curr) => curr === "esther" ? "maple" : "esther")
    }
  return (
    <motion.div className='home-geometry-image' initial={{opacity: 0, scale: 0.85}} animate={{opacity: 1, scale: 1, transition: {duration: 1.2, delay: .8}}}>
      <img src="../../images/brown-geometry.png" alt="geometry logo"/>
    </motion.div>
  )
}

export default TopIntro