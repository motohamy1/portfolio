import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <div className="contact-left">
        <h2 className="contact-title">
          <span className="gradient-text">Let's talk</span>
        </h2>
        <p className="contact-desc">
          I'm currently available to take on new projects, 
          so feel free to send me a message about anything that you want me to work on. 
          You can contact anytime.
        </p>
        <div className="contact-info">
          <div className="contact-info-item">
            <span className="contact-icon">✉️</span>
            <span>meltohamy080@gmail.com</span>
          </div>
          <div className="contact-info-item">
            <span className="contact-icon">📞</span>
            <span>01551936045</span>
          </div>
          <div className="contact-info-item">
            <span className="contact-icon">📍</span>
            <span>Egypt</span>
          </div>
        </div>
      </div>
      <div className="contact-right">
        <h1 className="contact-header">Get in touch</h1>
        <form className="contact-form">
          <label>Your Name</label>
          <input type="text" placeholder="Enter your name" />
          <label>Your Email</label>
          <input type="email" placeholder="Enter your email" />
          <label>Write your message here</label>
          <textarea placeholder="Enter your message" rows={5}></textarea>
          <button type="submit" className="contact-submit">Submit now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact