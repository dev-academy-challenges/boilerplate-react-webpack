import React from 'react'
import {HashRouter as Route, Link} from 'react-router-dom'

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

        <Route path='/' component={Home} />
        <Route path='/menu' component={Menu} />
        <Route path='/facilities' component={Facilities} />
        <Route path='/events' component={Events} />
        <Route path='/rules' component={Rules} />

      </ul>
    </div>
  )
}
export default Nav