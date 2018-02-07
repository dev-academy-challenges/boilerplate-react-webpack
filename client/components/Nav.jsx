import React from 'react'
import {Link} from 'react-router-dom'

function Nav () {
  return (
      <nav className='nav'>
        <ul className='nav-list'>
          <li className='nav-item'>
            <Link to='/' className='pure-button'>Home</Link>
          </li>
          <li className='nav-item'>
            <Link to='/portfolio' className='pure-button'>PortFolio</Link>
          </li>
          <li className='nav-item'>
            <Link to='/posts/new' className='pure-button'>Blog</Link>
          </li>
          <li className='nav-item'>
            <Link to='/contact' className='pure-button'>Contact</Link>
          </li>
        </ul>
      </nav>
  )
}

export default Nav