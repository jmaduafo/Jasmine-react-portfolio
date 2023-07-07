import React, { useRef } from 'react'
import "./Contact/contact.css";
import TopIntro from "../components/TopIntro";
import ContactForm from "../components/ContactForm";
import ContactCarousel from '../components/ContactCarousel';
import { useScroll, useTransform } from 'framer-motion';
import { motion } from 'framer-motion';

const Contact = () => {
  const spanArise = {
    start: {
      y: "100%"
    },
    end: {
      y: "0%",
      staggerChildren: .6,
      ease: "easeInOut",
      transition: {
        duration: 1,
        delay: .4,
        when: "beforeChildren"
      }
    }
  }

  const homeTarget = useRef(null);

  const { scrollYProgress } = useScroll({
    target: homeTarget,
    offset: ["start end", "end start"]
  })

  const transitionEase = {duration: 1, ease: [0.43, .13, .23, 0.96]}

  const fade = useTransform(scrollYProgress, [0.6, 1], [1, .2]);
  const change = useTransform(scrollYProgress, [0.6, 1], [0, -100]);

  return (
    <>
    <section>
      <motion.div className="home-hero" ref={homeTarget} style={{opacity: fade, translateY: change}}>
          <TopIntro/>
          <div className='main-title contact-title'>
            <motion.h1 variants={spanArise} initial="start" animate="end" transition={transitionEase}>Contact</motion.h1>
          </div>
      </motion.div>
    </section>
    <section>
      <ContactCarousel/>
    </section>
    <section>
      <ContactForm/>
    </section>
    </>
  )
}

export default Contact