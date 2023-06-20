import React from 'react'
import "../component-style/contact-form.css"

const ContactForm = () => {
  return (
    <div className='contact-section'>
        <div className='contact-pitch'>
            <div className='pitch-text'>
                <h2>Let's make something amazing!</h2>
            </div>
            <div className='pitch-offer'>
                <p>Looking for remote work</p>
            </div>
        </div>
        <div className='contact-form'>
            <form className='contact-me'>
                <div className='contact-enter'>
                    <input type='text' id='contact-name' placeholder='Name'/>
                    <input type='email' id='contact-email' placeholder='Email'/>
                    <textarea type='text' id='contact-message' placeholder='Write a message' rows={4}></textarea>
                </div>
                <div className='submit-form'>
                    <div className='submit-button'>
                        <button id='contact-submit'>SUBMIT</button>
                        <i class='bx bx-right-arrow-alt bx-sm'></i>
                    </div> 
                </div>
            </form>
        </div>
    </div>
  )
}

export default ContactForm