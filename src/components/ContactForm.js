import React, { useRef, useEffect } from 'react'
import "../component-style/contact-form.css"
import { motion } from 'framer-motion'
import { useScroll, useTransform, useInView } from 'framer-motion'

const ContactForm = () => {
    
    const ascend = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ascend,
        offset: ['start end', 'end start']
    })

    const isInView = useInView(ascend, { once: true })

    const contactMe = useRef(null);
    const contactEmail = useRef(null);
    const contactMessage = useRef(null);

    const emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    // Email API


    function sendEmail() {

    }
   


  return (
    <div className='contact-section' ref={ascend}>
        <div className='contact-pitch'>
            <div className='pitch-text'>
                <motion.h2 initial={{ y: 200 }} animate={{ y: 0, ease: 'easeInOut', transition: { duration: 2 }}}>Let's make something amazing!</motion.h2>
            </div>
            <motion.div className='pitch-offer' initial={{ opacity: 0 }} animate={{ opacity: 1, ease: 'easeInOut', transition:{duration: 2, delay: 3}}}>
                <p>Currently available for remote work</p>
            </motion.div>
        </div>
        <motion.div className='contact-form' initial={{ opacity: 0 }} animate={{ opacity: 1, ease: 'easeInOut', transition:{duration: 2, delay: 1.2}}}>
            <form className='contact-me' ref={ contactMe } onsubmit={ sendEmail }>
                <div className='contact-enter'>
                    <input type='text' id='contact-name' placeholder='Name'/>
                    <input type='email' id='contact-email' placeholder='Email'/>
                    <textarea type='text' id='contact-message' placeholder='Write a message' rows={4}></textarea>
                </div>
                <div className='submit-form'>
                    <div className='submit-button'>
                        <button id='contact-submit'>SUBMIT</button>
                        <i className='bx bx-right-arrow-alt bx-sm'></i>
                    </div> 
                </div>
            </form>
        </motion.div>
    </div>
  )
}

export default ContactForm