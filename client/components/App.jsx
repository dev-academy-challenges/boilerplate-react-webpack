import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Header from './Header'
import Main_con from './Main_con'
// import Symbols from './Symbols'
import Feedbacks from './Feedbacks'
import Footer from './Footer'

const App = () => {
  return (
  <Router>
    <div className='app'>
    <Route exact path='/' component={Header} />
    <Route path='/' component={Main_con} />
    {/* <Route path='/' component={Symbols} /> */}
    <Route path='/' component={Feedbacks} /> 
    <Route path='/' component={Footer} />
    </div>
  </Router>
  )
}

export default App

