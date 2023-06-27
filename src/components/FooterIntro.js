import React from 'react'
import TopIntro from './TopIntro'
import { Link } from 'react-router-dom'

const FooterIntro = () => {
  return (
    <div className='footer-intro-section'>
        <TopIntro/>
        <div className='footer-intro-text'>
            <h2>Let's Work</h2>
            <h2>Together</h2>
        </div>
        <div className='footer-message-button'>
            <Link to='/contact'><button>Want to send a message?</button></Link>
            <i className='bx bx-right-arrow-alt bx-sm'></i>
        </div>
    </div>
  )
}

export default FooterIntro