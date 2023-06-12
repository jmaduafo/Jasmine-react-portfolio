import React from 'react';
import TopIntro from '../components/TopIntro';

const Home = () => {
  return (
    <div className="home-hero">
        <TopIntro/>
        <div className='main-title home-title'>
          <h1>Jasmine</h1>
        </div>
        <div className='bottom-hero'>
          <div className='hero-text-scroll'>
            <div className='hero-text'>
              <p>I’m <span className='jasmine-fancy'>Jasmine Maduafokwa</span>, a self-taught full stack developer with a deep passion for design and learning. I'm an innovative thinker seeking to use my mathematics background and design sense to create fully-functioning, eye-catching websites and apps created both independently and in team-based workspaces.</p>
            </div>
            <div className='hero-scroll'>
              <i className='bx bx-down-arrow-alt bx-sm'></i>
              <p>Scroll Down</p>
            </div>
          </div>
          <div className='get-in-touch'>
            <div className='in-touch-text'>
              <h3>Let's get in touch</h3>
            </div>
            <div className='in-touch-button'>
              <i className='bx bx-arrow-back bx-lg' ></i>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home