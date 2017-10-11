import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

import Home from './Home.jsx'

const App = () => {
  return (
    <Router>
    <div className='App'>
    <h1>SK imports & exporting</h1>
    <div className='container'>
    <Route path='/' component={Home} />
    </div>
    </div>
    </Router>
  )
}

export default App
