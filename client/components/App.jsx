import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './Header.jsx'
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
            <hr/>
          <div className='container'>
            <Switch>
            <Route exact path='/' component={() => <Home />} />
            <Route path='/Find' component={Find} />
            <Route path='/Contact' component={Contact} />
            <Route path='/About' component={About} />
            </Switch>
          </div>
          </div>
      </Router>
    )
  }
}

export default App

