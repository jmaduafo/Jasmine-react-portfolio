import React from 'react';
import TopIntro from '../components/TopIntro';
import HomeTransition from '../components/HomeTransition';
import PortfolioCarousel from '../components/PortfolioCarousel';
import HomeProjects from '../components/HomeProjects';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
    <div className='main-container'>
    <section>
      <div className="home-hero">
          <TopIntro/>
          <div className='main-title home-title'>
            <div className='first-name'>
              <h1>Jasmine</h1>
            </div>
            <div className='home-intro-below'>
              <div className='small-words'>
                <p>Deliberate</p>
                <p>Innovative</p>
                <p>Empathetic</p>
              </div>
              <div className='last-name'>
                <p>Web Developer</p>
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
      </div>
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
    </div>
    </>
  )
}

export default Home