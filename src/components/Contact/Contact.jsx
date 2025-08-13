import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    
    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      setStatus('Error sending message.');
    }
  };

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
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Your Name</label>
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name" 
            required 
          />
          <label>Your Email</label>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email" 
            required 
          />
          <label>Write your message here</label>
          <textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message" 
            rows={5}
            required
          ></textarea>
          <button type="submit" className="contact-submit">Submit now</button>
          {status && <p className="status-message">{status}</p>}
        </form>
      </div>
    </div>
  )
}

export default Contact