import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const HomeTransition = () => {
  return (
    <div className='home-transition'>
        <div className='home-images'>
            <div className='image-container img-container1'>
                <LazyLoadImage src='../../images/react-port2.jpg' alt='white flowers'/>
            </div>
            <div className='image-container img-container2'>
                <LazyLoadImage src='../../images/react-port1.jpg' alt='floral background' effect='blur'/>
            </div>
        </div>
        <div className='home-about'>
            <div className='home-about-title'>
                <div className='title-i-am'>
                    <h3>I am a</h3>
                </div>
                <div className='specialty-titles'>
                    <span>Full Stack Developer</span>
                    <span>Creative Developer</span>
                    <span>Designer</span>
                </div>
                <div className="home-about-text">
                    <p>As a recent college graduate, I sought to expand my knowledge and skill in coding, using my design instincts to create aesthetically-pleasing, user-focused websites, not just by practicing hours on end independently but also by working in teams, study groups, and learning from other people from various walks of life.</p>
                </div>
                <div className='home-about-images-container'>
                    <div className="home-about-image">
                        <LazyLoadImage src='../../images/tan-jm.png' alt='spinning circle'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeTransition