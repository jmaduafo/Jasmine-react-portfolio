import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const HomeTransition = () => {
  return (
    <div className='home-transition'>
        <div className='home-images'>
            <div className='image-container img-container2'>
                <LazyLoadImage src='../../images/react-port1.jpg' alt='floral background' effect='blur'/>
            </div>
            <div className='home-about-images-container'>
                <div className="home-about-image">
                    <img src='../../images/tan-jm.png' alt='spinning circle'/>
                </div>
            </div>
        </div>
        <div className='home-about'>
            <div className='home-about-title'>
                <div className='specialty-titles specialty1'>
                    <span>Frontend Developer</span>
                    <span>&#x2022;</span>
                    <span>Backend Developer</span>
                    <span>&#x2022;</span>
                    <span>Creative Developer</span>
                    <span>&#x2022;</span>
                    <span>Web Designer</span>
                </div>
                <div className='specialty-titles specialty2'>
                    <span>Frontend Developer</span>
                    <span>&#x2022;</span>
                    <span>Backend Developer</span>
                    <span>&#x2022;</span>
                    <span>Creative Developer</span>
                    <span>&#x2022;</span>
                    <span>Web Designer</span>
                </div>
                {/* <div className="home-about-text">
                    <p>As a recent college graduate, I sought to expand my knowledge and skill in coding, using my design instincts to create aesthetically-pleasing, user-focused websites, not just by practicing hours on end independently but also by working in teams, study groups, and learning from other people from various walks of life.</p>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default HomeTransition