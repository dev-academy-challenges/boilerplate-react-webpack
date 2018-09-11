import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Events from './Events'
import Galleries from './Galleries'
import Artists from './Artists'

const MenuRoutes = props => {
  return (
    <Router>
      <div className='menu'>
        <Route path="/events" component={Events} />
        <Route path="/galleries" component={Galleries} />
        <Route path="/artists" component={Artists} />
      </div>
    </Router>
  )
}

export default MenuRoutes
