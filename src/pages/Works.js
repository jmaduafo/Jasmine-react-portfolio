import React from 'react';
import "./Works";
import TopIntro from "../components/TopIntro";
import FooterIntro from '../components/FooterIntro';


const Works = () => {
  return (
    <>
    <section>
      <div className="home-hero">
          <TopIntro/>
          <div className='main-title works-title'>
            <h1>Works</h1>
          </div>
      </div>
    </section>
    <section>
      <FooterIntro/>
    </section>
    </>
  )
}

export default Works