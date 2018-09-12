import React from 'react'

import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import Exhibitions from './Exhibitions'
import Galleries from './Galleries'
import Artists from './Artists'


const App = props => {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route path="/exhibitions" component={Exhibitions} />
        <Route path="/galleries" component={Galleries} />
        <Route path="/artists" component={Artists} />
      </div>
    </Router>
  )
}
export default App
