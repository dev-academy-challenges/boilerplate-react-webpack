import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Galleries from './Galleries'

const MenuRoutes = () => {
  return (
    <Router>
      <div>
        <div className="galleries"><Route path='/galleries' component={Galleries} /><button>Galleries</button></div>
      </div>
    </Router>
  )
}

export default MenuRoutes
