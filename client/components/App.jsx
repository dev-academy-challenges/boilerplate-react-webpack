import React from 'react'

import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import Events from './Events'
import Gallery from './Gallery'
import Artists from './Artists'

const App = props => {
  return (
    <Router>
      <div>
        <Route path='/' component={Home} />
        <Route path='/Events' component={Events} />
        <Route path='/Gallery' component={Gallery} />
        <Route path='/Artists' component={Artists} />
      </div>
    </Router>
  )
}
export default App
