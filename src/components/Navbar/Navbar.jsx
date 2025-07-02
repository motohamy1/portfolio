import React from 'react'
import './Navbar.css'
// import logo from '../../assets/cover.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        {/* <img src={logo}  alt="" className='logo' /> */}

        <ul className='nav-items'>
          <li><a href="#hero">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#resume">CV</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        {/* <div className='nav-connect'>Connect With Me</div> */}
    </div>
  )
}

export default Navbar