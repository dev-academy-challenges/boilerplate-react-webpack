import React from 'react'
import { Route, Link } from 'react-router-dom'

import Portfolio from './Portfolio'
import Blog from './Blog'
import Contact from './Contact'

function Nav() {
  return (
    <div>
      <nav className='nav'>
        <ul className='nav-list'>
          <li className='nav-item'>
            <a href="http://localhost:3000/#/">Home</a>
            <Route exact path='/' className='pure-button'></Route>
          </li>
          <li className='nav-item'>
            <a href="http://localhost:3000/portfolio">Portfolio</a>
            <Route exact path='/portfolio' className='pure-button' component={Portfolio}>Portfolio</Route>
          </li>
          <li className='nav-item'>
            <a href="http://localhost:3000/blog">Blog</a>
            <Route path='/blog' className='pure-button' component={Blog}>Blog</Route>
          </li>
          <li className='nav-item'>
            <a href="http://localhost:3000/contact">Contact</a>
            <Route path='/contact' className='pure-button' component={Contact}>Contact</Route>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav