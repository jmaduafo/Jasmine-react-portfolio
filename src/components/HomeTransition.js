import React, { useEffect, useRef } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { motion, useScroll, useTransform } from 'framer-motion'


const HomeTransition = () => {
    const scrollSpecialties = useRef(null);

    const { scrollYProgress} = useScroll({
        target: scrollSpecialties,
        offset: ["start 170%", "end start"]
    });

    const transform1 = useTransform(scrollYProgress, [0, 1], [-100, 450])
    const transform2 = useTransform(scrollYProgress, [0, 1], [500, -100])

    const transformY1 = useTransform(scrollYProgress, [0, 1], [-40, 10])
    const transformY2 = useTransform(scrollYProgress, [0, 1], [-20, 20])

    const imgZoom = useTransform(scrollYProgress, [0, 1], [1.15, .9])
    
  return (
    <div className='home-transition'>
        <div className='home-images'>
            <div className='image-container img-container2'>
                <motion.img style={{scaleY: imgZoom}} src='../../images/react-port1.jpg' alt='floral background' effect='blur'/>
            </div>
            <div className='home-about-images-container'>
                <div className="home-about-image">
                    <LazyLoadImage src='../../images/tan-jm.png' alt='spinning circle'/>
                </div>
            </div>
        </div>
        <div className='home-about' >
            <div className='home-about-title' ref={scrollSpecialties}>
                <motion.div style={{translateX: transform1, translateY: transformY2}} transition={{duration: 8, ease: "ease"}} className='specialty-titles specialty1' >
                    <span>Frontend Developer</span>
                    <span>&#x2022;</span>
                    <span>Backend Developer</span>
                    <span>&#x2022;</span>
                    <span>Creative Developer</span>
                    <span>&#x2022;</span>
                    <span>Web Designer</span>
                </motion.div>
                <motion.div style={{translateX: transform2, translateY: transformY1}} transition={{duration: 8, ease: "ease"}} className='specialty-titles specialty2' >
                    <span>Web Designer</span>
                    <span>&#x2022;</span>
                    <span>Creative Developer</span>
                    <span>&#x2022;</span>
                    <span>Backend Developer</span>
                    <span>&#x2022;</span>
                    <span>Frontend Developer</span>
                </motion.div>
                {/* <div className="home-about-text">
                    <p>As a recent college graduate, I sought to expand my knowledge and skill in coding, using my design instincts to create aesthetically-pleasing, user-focused websites, not just by practicing hours on end independently but also by working in teams, study groups, and learning from other people from various walks of life.</p>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default HomeTransition