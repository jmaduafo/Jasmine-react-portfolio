import React, { useRef, useEffect } from 'react';
import "./About";
import TopIntro from "../components/TopIntro";
import FooterIntro from '../components/FooterIntro';
import "../pages/About/about.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { motion } from 'framer-motion';
import { useScroll, useTransform } from 'framer-motion';
import { ScrollTrigger, gsap, Power4 } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

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

  const homeTarget = useRef(null);
  const aboutTarget = useRef(null);

  

  const { scrollYProgress } = useScroll({
    target: homeTarget, aboutTarget,
    offset: ["start end", "end start"]
  })

  const transitionEase = {duration: 1, ease: [0.43, .13, .23, 0.96]}

  const fade = useTransform(scrollYProgress, [0.6, 1], [1, .2]);
  const change = useTransform(scrollYProgress, [0.6, 1], [0, -100]);

  const imageShow = useTransform(scrollYProgress, [0.5, 1], [0, 1]);
  const imageScale = useTransform(scrollYProgress, [0.5, 1], [1, 1.2]);

  const aboutDesc = useRef(null);

  // Image Gallery refs
  const imageGallery1 = useRef(null);
  const imageGallery2 = useRef(null);
  const imageGallery3 = useRef(null);

  const musicDesc = useRef(null);
  const animeDesc = useRef(null);
  const moviesDesc = useRef(null);

  // About Me refs
  const aboutMeImage = useRef(null);
  const aboutMeSection = useRef(null);

  useEffect(function() {
    const desc = aboutDesc.current;

    const imageGal1 = imageGallery1.current;
    const imageGal2 = imageGallery2.current;
    const imageGal3 = imageGallery3.current;

    const musicImage = musicDesc.current;
    const animeImage = animeDesc.current;
    const moviesImage = moviesDesc.current;

    // About me current refs
    const aboutMeSect = aboutMeSection.current;
    const aboutMeImg = aboutMeImage.current;

    gsap.fromTo(desc, {
      y: 0
    }, 
    {
      duration: 12,
      scrollTrigger: {
        trigger: desc,
        start: 'top 30%',
        scrub: true,
        pin: true
      }
    })

    gsap.fromTo(musicImage, {
      opacity: 0,
      scale: 1,
      translateY: 10
    }, 
    {
      opacity: 1,
      scale: 1.2,
      translateY: 0,
      ease: Power4,
      duration: 1.2,
      scrollTrigger: {
        trigger: imageGal1,
        start: 'top 40%',
        end: 'top 10%',
        scrub: true,
      }
    })

    gsap.fromTo(animeImage, {
      opacity: 0,
      scale: 1,
      translateY: 30
    }, 
    {
      opacity: 1,
      translateY: 0,
      scale: 1.2,
      duration: 1.2,
      ease: Power4,
      delay: 2,
      scrollTrigger: {
        trigger: imageGal2,
        start: 'top 40%',
        end: 'top 10%',
        scrub: true,
      }
    })

    gsap.fromTo(moviesImage, {
      opacity: 0,
      scale: 1,
      translateY: 20
    }, 
    {
      opacity: 1,
      scale: 1.2,
      translateY: 0,
      duration: 1.2,
      ease: Power4,
      delay: 4,
      scrollTrigger: {
        trigger: imageGal3,
        start: 'top 40%',
        end: 'top 10%',
        scrub: true,
      }
    })

    gsap.fromTo(aboutMeImg, {
      translateY: 100
    }, 
    {
      translateY: -150,
      duration: 3,
      ease: Power4,
      delay: 4,
      scrollTrigger: {
        trigger: aboutMeSect,
        start: 'top 80%',
        scrub: true,
      }
    })

  }, [])

  return (
    <>
    <section>
      <motion.div className="home-hero" ref={homeTarget} style={{opacity: fade, translateY: change}}>
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
      </motion.div>
    </section>
    <section>
      <div className='about-description' ref={aboutTarget}>
        <div className='about-desc-text' ref={aboutDesc}>
          <h2>When I’m not busy coding, I also enjoy listening to <span>music</span>, watching <span>anime</span>, and searching for the next show or movie on <span>Netflix</span> to binge while lazing on my bed.</h2>
        </div>
        <div className='about-images music-image' ref={ imageGallery1 }>
          <motion.img ref={musicDesc} src='../../images/music-image.jpg' alt='spotify playing on blanket next to beverage'/>
        </div>
        <div className='about-images anime-image' ref={ imageGallery2 }>
          <motion.img ref={animeDesc} src='../../images/suzume.jpg' alt='suzume anime movie'/>
        </div>
        <div className='about-images movies-image' ref={ imageGallery3 }>
          <motion.img ref={moviesDesc} src='../../images/netflix-image.jpg' alt='netflix playing in a car'/>
        </div>
      </div>
    </section>
    <section>
      <div className='about-me-section' ref={aboutMeSection}>
        <div className='about-me-text'>
          <h4>As a recent college graduate, I sought to expand my knowledge and skill in coding, using my design instincts to create aesthetically-pleasing, interactive websites, not just by practicing hours on end independently but also by working in teams, study groups, and learning from other people from various walks of life.</h4>
        </div>
        <div className='about-me-image' ref={aboutMeImage}>
          <img src='../../images/about-portrait.jpg' alt='' />
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