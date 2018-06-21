import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Nav from './Nav'

const App = () => {
  return (
    <Router>
      <div>

        <div className='nav'>
          <Nav />
        </div>

        <div className='frame'>
          <div className='content'>
          </div>
        </div>

      </div>
    </Router>
  )
}

export default App
