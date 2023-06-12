import React from 'react'
import { Link } from "react-router-dom";
import "../component-style/navbar.css"
import styled from "styled-components";

const Navbar = () => {
    const NavStyle = styled(Link) `
        text-decoration: none;
        color: #515E3D;
    `
  return (
    <nav>
        <div className='nav-bar'>
            <div className='nav-logo'>
                <span id="jasmine-logo"><NavStyle to="/">JM</NavStyle></span>
            </div>
            <div className='nav-links'>
                <ul>
                    <li><NavStyle to="/about">about</NavStyle></li>
                    <li><NavStyle to="/works">works</NavStyle></li>
                    <li><NavStyle to="/contact">contact</NavStyle></li>
                    <button id="resume-button">Resume</button>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar