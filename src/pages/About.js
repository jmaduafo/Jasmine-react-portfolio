import React from 'react';
import "./About";
import TopIntro from "../components/TopIntro";
import FooterIntro from '../components/FooterIntro';
import "../pages/About/about.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { motion } from 'framer-motion';

const About = () => {
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
  const transitionEase = {duration: 1, ease: [0.43, .13, .23, 0.96]}
  return (
    <>
    <section>
      <div className="home-hero">
          <TopIntro/>
          <div className='main-title about-title'>
            <motion.h1 variants={spanArise} initial="start" animate="end" transition={transitionEase}>About</motion.h1>
          </div>
          <div className='about-hero-image-text'>
            <div className='about-hero-image'>
              <LazyLoadImage src='../../images/possible1.jpg' alt='blue painting'/>
            </div>
            <div className='about-hero-text'>
              <p>I’m <span className='jasmine-fancy'>Jasmine Maduafokwa</span>, a Nigerian-American specializing in both frontend and backend as well as design. My dream to become a full stack developer began during COVID, and since then, I’ve been juggling completing my bachelors in science and sneaking in coding and design practice when possible. My goal is to use my skills in coding and design to bring success to whoever I choose to work for.</p>
            </div>
          </div>
          <div className='about-description'>
            <div className='about-desc-text'>
              <h2>When I’m not busy coding, I also enjoy <span>cooking</span>, watching <span>anime</span>, and searching for the next show or movie on <span>Netflix</span> to binge while lazing on my bed.</h2>
            </div>
          </div>
      </div>
    </section>
    <section>
      <FooterIntro/>
    </section>
    </>
  )
}

export default About