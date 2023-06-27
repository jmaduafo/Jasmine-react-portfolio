import React from 'react'
import "./Contact/contact.css";
import TopIntro from "../components/TopIntro";
import ContactForm from "../components/ContactForm";
import ContactCarousel from '../components/ContactCarousel';

const Contact = () => {
    
  return (
    <>
    <section>
      <div className="home-hero">
          <TopIntro/>
          <div className='main-title contact-title'>
            <h1>Contact</h1>
          </div>
      </div>
    </section>
    <section>
      <ContactCarousel/>
    </section>
    <section>
      <ContactForm/>
    </section>
    </>
  )
}

export default Contact