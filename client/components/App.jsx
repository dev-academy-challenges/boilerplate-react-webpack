import React from 'react'

import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import Events from './Events'
import Galleries from './Galleries'
import Artists from './Artists'


const App = props => {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route path="/events" component={Events} />
        <Route path="/galleries" component={Galleries} />
        <Route path="/artists" component={Artists} />
      </div>
    </Router>
  )
}
export default App
