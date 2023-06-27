import React, {useRef} from 'react';
import TopIntro from '../components/TopIntro';
import HomeTransition from '../components/HomeTransition';
import PortfolioCarousel from '../components/PortfolioCarousel';
import HomeProjects from '../components/HomeProjects';
import FooterIntro from '../components/FooterIntro';
import { Link } from "react-router-dom";
import { motion, stagger, useScroll, useTransform } from 'framer-motion';

const Home = () => {
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
  const squeeze = useTransform(scrollYProgress, [0.6, 1], [1, 0.9])

  return (
    <>
    <div className='main-container'>
    <section>
      <motion.div className="home-hero" ref={homeTarget} style={{opacity: fade, translateY: change}}>
          <TopIntro/>
          <div className='main-title home-title'>
            <div className='first-name'>
              <motion.h1  variants={spanArise} initial="start" animate="end" transition={transitionEase}>{["J", "A", "S", "M", "I", "N", "E"].map((letters, index) => {
                return (<span key={index}>{letters}</span>)
              })}</motion.h1>
            </div>
            <div className='home-intro-below'>
              <motion.div className='small-words' initial={{opacity: 0}} animate={{opacity: 1, ease: "easeInOut", transition: {duration: 1, when: "beforeChildren"}}} transition={transitionEase}>
                {["Based in the U.S.", "Available for remote work"].map((words, index) => {
                  return (<motion.p key={index} initial={{y: "-100%", opacity: 0}} animate={{y: "0%", opacity: 1, ease: "easeInOut", staggerChildren: 1, transition: {duration: 1, delay: index === 0 ? 1.2 : 1.45}}} transition={transitionEase}>{words}</motion.p>)
                })}
                
              </motion.div>
              <div className='last-name'>
                <motion.p initial={{y: "100%"}} animate={{y: "0%", ease: "ease", transition: {duration: 1, delay: 1}}}>Web Developer</motion.p>
              </div>
            </div>
            
          </div>
          <div className='bottom-hero'>
            <div className='hero-text-scroll'>
              <div className='hero-text'>
                <p>I’m <span className='jasmine-fancy'>Jasmine Maduafokwa</span>, a self-taught full stack developer with a deep passion for design and learning. I'm an innovative thinker seeking to use my mathematics background and design sense to build fully-functioning, eye-catching websites created both independently and in team-based workspaces.</p>
              </div>
              <div className='hero-scroll'>
                <i className='bx bx-down-arrow-alt bx-sm'></i>
                <p>Scroll Down</p>
              </div>
            </div>
            <div className='get-in-touch'>
              <div className='in-touch-text'>
                <Link to="/contact" style={{"textDecoration": "none", "color": "#515E3D"}}><h3>Let's get in touch</h3></Link>
              </div>
              <div className='in-touch-button'>
                <i className='bx bx-arrow-back bx-lg' ></i>
              </div>
            </div>
          </div>
      </motion.div>
    </section>
    <section>
      <HomeTransition />
    </section>
    <section>
      <PortfolioCarousel />
    </section>
    <section>
      <HomeProjects />
    </section>
    <section>
      <FooterIntro/>
    </section>
    </div>
    </>
  )
}

export default Home