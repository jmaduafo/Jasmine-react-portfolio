import React from 'react'
import "../component-style/sidebar.css"
import {Link} from "react-router-dom"

const SideBar = () => {
  return (
    <div className='side-nav'>
        <div className='nav-socials'>
            <div className='social-nav github-nav'>
                <p>GH</p>
                <a href="#"><i className='bx bxl-github bx-sm'></i></a>
            </div>
            <div className='dot'></div>
            <div className='social-nav instagram-nav'>
                <p>IG</p>
                <a href="#"><i className='bx bxl-instagram bx-sm'></i></a>
            </div>
            <div className='dot'></div>
            <div className='social-nav linkedin-nav'>
                <p>LI</p>
                <a href="#"><i className='bx bxl-linkedin-square bx-sm' ></i></a>
            </div>           
        </div>
        <div className='nav-color-theme'>
            <div className='nav-theme esther-color'>
                <div className='theme-text esther-text'>
                    <p>Esther</p>
                </div>
            </div>
            <div className='nav-theme maple-color'>
            <div className='theme-text maple-text'>
                    <p>Maple</p>
                </div>
            </div>
        </div>

    
        
    </div>
  )
}

export default SideBar