import React from 'react'
import './Navbar.css'
// import logo from '../../assets/cover.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        {/* <img src={logo}  alt="" className='logo' /> */}

        <ul className='nav-items'>
          <li>Home</li>
          <li>Services</li>
          <li>Projects</li>
          <li>CV</li>
          <li>Contact</li>
        </ul>
        {/* <div className='nav-connect'>Connect With Me</div> */}
    </div>
  )
}

export default Navbar