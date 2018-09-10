import React from 'react'

import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import MenuRoutes from './MenuRoutes'

const App = props => {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/' component={MenuRoutes} />
      </div>
    </Router>
  )
}
export default App
