import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

const App = () => {
  return (

    <Router>
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-1  has-text-centered">"Welcome to the Shared Lunch App..."</h1>
        </div>
      </div>
      <div className="hero-foot">
        <nav className="tabs is-boxed is-fullwidth">
          <div className="container">
            <ul>
              <li className="is-active"><a>Overview</a></li>
              <li><a>About</a></li>
              <li><a>Lunch</a></li>
              <li><a>People</a></li>
              <li><a>FAQ</a></li>
              <li><a>Contact Us</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default App
