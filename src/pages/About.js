import React from 'react';
import "./About";
import TopIntro from "../components/TopIntro";
import "../pages/About/about.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';


const About = () => {
    
  return (
    <>
    <section>
      <div className="home-hero">
          <TopIntro/>
          <div className='main-title about-title'>
            <h1>About</h1>
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
    </>
  )
}

export default About