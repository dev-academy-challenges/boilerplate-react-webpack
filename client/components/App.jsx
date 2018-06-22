import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import Menu from './Menu'
import Facilities from './Facilities'
import Events from './Events'
import Rules from './Rules'

const App = () => {
  return (
    <Router>
      <div className='container'>
        <Nav />

        <div className='frame'>
          <div className='content'>

            <Route exact path='/' component={Home} />
            <Route path='/menu' component={Menu} />
            <Route path='/facilities' component={Facilities} />
            <Route path='/events' component={Events} />
            <Route path='/rules' component={Rules} />

          </div>
        </div>

      </div>
    </Router>
  )
}

export default App
