import React from 'react'
import { Link } from 'react-router-dom'

// This might need to be turned into a stateful component (aka container)
const Header = () => (
  <div className='Header'>
    <h1>SK imports & exporting</h1>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/Find'>Find a Car</Link></li>
      <li><Link to='/Contact'>Contact Us</Link></li>
      <li><Link to='About'>About Us</Link></li>
    </ul>
  </div>
)

export default Header
