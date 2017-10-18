import React from 'react'
import { Link } from 'react-router-dom'

// This might need to be turned into a stateful component (aka container)
const Header = () => (
  <div className='header hero is-primary is-medium'>
    <div className='navbar-brand'>
      <a className='navbar-item'><h1>SK imports & exporting</h1></a>
    </div>

    <div className="hero-head">
      <nav className="navbar">
    <div id="navbarMenuHeroA" className="navbar-menu">
      <div className="navbar-end">
        <span className="navbar-item is-active">
           <a>Buying <i className="fa fa-chevron-down" aria-hidden="true"></i> </a> 
        </span>
        <span className="navbar-item">
            <a>Finance <i className="fa fa-chevron-down" aria-hidden="true"></i> </a>
            </span>
        <span className="navbar-item">
            <a className="button is-primary is-inverted">
            <span className="icon">
              <i className="fa fa-phone"></i>
            </span>
            <span>Enquire Today</span>
          </a>
        </span>
      </div>
    </div>
    </nav>
  </div>
    <div className="header hero-body">
      <div className="container has-text-centered">
        <h1 className="title">LOGO / PIC</h1>
        <h2 className="subtitle">GOES HERE</h2>
      </div>
    </div>
          <div className="hero-foot">
            <nav className="tabs">
              <div className="container">
                <ul>
                  <li><a className='is-active'><Link to='/'>Home</Link></a></li>
                  <li><a><Link to='/Find'>Find a Car</Link></a></li>
                  <li><a><Link to='/Contact'>Contact Us</Link></a></li>
                  <li><a><Link to='About'>About Us</Link></a></li>
                </ul>
              </div>
            </nav>
          </div>       
        </div>
)

export default Header

   
