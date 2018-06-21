import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Nav from './Nav'
import Rules from './Rules'

const App = () => {
  return (
    <Router>
      <div>

        <div className='nav'>
          <Nav />
        </div>

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
