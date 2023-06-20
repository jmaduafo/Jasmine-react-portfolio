import React from 'react'
import { Link } from 'react-router-dom'
import "../component-style/footer.css"

const Footer = () => {
  return (
    <footer>
      <div className='footer-section'>
        <div className='footer-links'>
          <ul>
            <li><Link to="">Github</Link></li>
            <li><Link to="">Instagram</Link></li>
            <li><Link to="">LinkedIn</Link></li>
          </ul>
        </div>
        <div className='footer-copyright'>
          <p>Designed and Coded by Jasmine Maduafokwa &copy; Portfolio 2023 </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer