import React from 'react'
import {HashRouter as Router} from 'react-router-dom'
import Nav from './Nav'
import Rules from './Rules'

const App = () => {
  return (
    <Router>
      <div className='container'>
        <Nav />

        <div className='frame'>
          <div className='content'>

            <Route path='/rules' component={Rules} />
          </div>
        </div>

      </div>
    </Router>
  )
}

export default App
