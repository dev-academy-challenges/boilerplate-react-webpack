import React from 'react'

import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'

const App = props => {
  return (
    <Router>
      <div>
        <Route path='/' component={Home} />
      </div>
    </Router>
  )
}
export default App
