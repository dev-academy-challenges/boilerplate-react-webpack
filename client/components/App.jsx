import React from 'react'
import {HashRouter as Router} from 'react-router-dom'
import Nav from './Nav'

const App = () => {
  return (
    <Router>
      <div className='container'>
        <Nav />

        <div className='frame'>
          <div className='content'>
          </div>
        </div>

      </div>
    </Router>
  )
}

export default App
