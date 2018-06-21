import React from 'react'
import {HashRouter as Route, Link} from 'react-router-dom'
import Home from './Home'
import Menu from './Menu'
import Facilities from './Facilities'
import Events from './Events'
import Rules from './Rules'

const Nav = () => {
  return (
    <div className='nav'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/menu'>Menu</Link>
        </li>
        <li>
          <Link to='/facilities'>Facilities</Link>
        </li>
        <li>
          <Link to='/events'>Events</Link>
        </li>
        <li>
          <Link to='/rules'>Rules</Link>
        </li>

        <Route path='/menu' component={Menu} />
        <Route path='/facilities' component={Facilities} />
        <Route path='/events' component={Events} />
        <Route path='/rules' component={Rules} />
        <Route path='/' component={Home} />
      </ul>
    </div>
  )
}
export default Nav
