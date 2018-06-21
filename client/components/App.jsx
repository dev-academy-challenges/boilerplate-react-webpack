import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import Nav from './Nav'

const App = () => {
  return (
    <div>
      <div className='nav'>
        <Nav />
      </div>
      <div className='frame'>
        <div className='content'>
        Hello
        </div>
      </div>
    </div>
  )
}

export default App
