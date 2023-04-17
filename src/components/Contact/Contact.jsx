import React from 'react'
import './contact.css'
const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-container'>
        <div className='section-contact-title'>
          Contact me
        </div>
        <div className='project-info-container'>
          <p className='info-contact-title'>Email Address  📩</p>
          <p className='info-contact-item'>francoalvarezn97@gmail.com</p>
          <p className='info-contact-title'>Phone Number 📞</p>
          <p className='info-contact-item'>+54 341347-8824</p>
          <p className='info-contact-title'>Links</p>
          <div className='social-img-container'>
            <img className='social-img' src='../public/images/linkedin.png' alt='linkedin-img' />
            <img className='social-img' src='../public/images/github.png' alt='github-img' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
