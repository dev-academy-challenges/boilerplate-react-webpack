import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from './Home'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Route exact path='/' Component={Home} />
      </div>
    )
  }
}

export default App
