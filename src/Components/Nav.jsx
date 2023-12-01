import React, { } from 'react'
import './Nav.css'
// import {  Link, } from 'react-router-dom';
import { Link,  } from 'react-scroll';
import logo from './Assests/Logo.jpg'

import { GiHamburgerMenu } from 'react-icons/gi';
export default function Nav() {
  // const [isOpen,setIsopen] = useState(false);
  return (
    <nav className="container">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="links">
        <ul>
          <li><Link to='/' activeClass="active"

            spy={true}
            smooth={true}
            duration={500}>Home</Link></li>
          <li><Link to='/About' activeClass="active"

            spy={true}
            smooth={true}
            duration={500}>About</Link></li>
          <li><Link to='/Events'>Events</Link></li>
          <li><Link to='/Artist'>Artist</Link></li>
          <li><Link to='/Login'>Login</Link></li>

        </ul>
      </div>
      <div className="hamburger">
        <GiHamburgerMenu />

      </div>


    </nav>
  )
}
