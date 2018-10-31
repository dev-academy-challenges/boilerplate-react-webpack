import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Contacts from './Contacts'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <Switch>
        <Route exact path = "/" component = {Home} />
        <Route path = "/contacts" component = {Contacts} />
        </Switch>
      </Router>
      </div>
    )
  }
}

export default App
