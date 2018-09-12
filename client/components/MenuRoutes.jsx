import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import Exhibitions from './Exhibitions'
import Galleries from './Galleries'
import Artists from './Artists'

const MenuRoutes = props => {
  return (
    <Router>
      <div className='home'>
        <Route exact path='/' component={Home} />
      </div>
      <div className='menu'>
        <Route path="/exhibitions" component={Exhibitions} />
        <Route path="/galleries" component={Galleries} />
        <Route path="/artists" component={Artists} />
      </div>
    </Router>
  )
}

export default MenuRoutes
