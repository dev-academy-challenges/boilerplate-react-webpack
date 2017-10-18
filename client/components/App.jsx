import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Home from './Home.jsx'
import Find from './Find.jsx'
import Contact from './Contact.jsx'
import About from './About.jsx'
import Nav from './Nav.jsx'

class App extends React.Component {
  render () {
    return (
      <Router>
        <div className='App'>
          <div className='header'>
          <Header />
          </div>
            <hr />
          <div className='container'>
            <Switch>
            <Route exact path='/' component={() => <Home />} />
            <Route path='/find' component={Find} />
            <Route path='/contact' component={Contact} />
            <Route path='/about' component={About} />
            </Switch>
          </div>
            <hr className='footer-seperator' />
          <div className='footer'>
            <Footer />
          </div>
          </div>
      </Router>
    )
  }
}

export default App

