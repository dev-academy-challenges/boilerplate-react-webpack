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
            <Link to='/posts/new' className='pure-button'>Add Post</Link>
          </li>
        </ul>
      </nav>
  )
}

export default Nav