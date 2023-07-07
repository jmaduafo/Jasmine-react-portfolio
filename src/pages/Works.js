import React, { useRef } from 'react';
import "./Works";
import "./Works/works.css"
import TopIntro from "../components/TopIntro";
import FooterIntro from '../components/FooterIntro';
import selectedWorks from '../utils/worksData';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';


const Works = () => {
  const workContent = useRef(null);

  const { scrollYProgress} = useScroll({
    target: workContent,
    offset: ["start end", "end start"]
  })

  const imageAnimate = useTransform(scrollYProgress, [0, 1], [1, 1.2])
  const titleAnimate = useTransform(scrollYProgress, [0, 1], [300, 0])

  return (
    <>
    <section>
      <div className="home-hero about-hero">
          <TopIntro/>
          <div className='main-title works-title'>
            <h1>Works</h1>
          </div>
      </div>
    </section>
    <section>
      <div className='works-container'>
        <AnimatePresence>
        { selectedWorks.map((works, index) => {
          return (
          <motion.div className='works-content' key={ index } ref={ workContent }>
            <div className='works-top' >
              <div className='work-roles-desc'>
                <div className='works-date-roles'>
                  <div className='works-date'>
                    <p>{works.year}</p>
                  </div>
                  <div className='works-role'>
                    { works.roles.map((role, index) => {
                      return (
                        <p key={ index }>{role}</p>
                      )
                    })}
                  </div>
                </div>
                <div className='work-desc'>
                  <p>{works.projectDescription}</p>
                </div>
              </div>
              <div className='work-image'>
                <LazyLoadImage style={{ scaleY: imageAnimate }} src={works.landscapeImage} alt={works.description} />
              </div>
            </div>
            <div className='works-bottom'>
              <div className='work-count'>
                <p><span>0{works.id}</span> / 04</p>
              </div>
              <div className='work-title'>
                <motion.h2>{works.title}</motion.h2>
              </div>
            </div>
          </motion.div>
          )
        })}
        </AnimatePresence>
      </div>
    </section>
    <section>
      <FooterIntro/>
    </section>
    </>
  )
}

export default Works