import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Header from './Header'
import Intro from './Intro'
import Login from './Login'
import Why from './Why'
import BottomNav from './BottomNav'
import Footer from './Footer'
import SignUp from './SignUp'

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Route exact path='/' component={Header} />
        <Route exact path='/' component={Intro} />
        <Route exact path='/' component={Login} />
        <Route exact path='/' component={Why} />
        <Route exact path='/' component={BottomNav} />
        <Route exact path='/' component={Footer} />
        <Route path='/usersignup' component={SignUp} />
    </div>
    </Router>
  )
}

export default App

