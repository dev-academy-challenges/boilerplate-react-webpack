import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Header from './Header'
import Main_con from './Main_con'
// import Symbols from './Symbols'
import Feedbacks from './Feedbacks'
import Footer from './Footer'

import vids from '../../db'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      activeVidUrl: ''
    }
    this.showVideo = this.showVideo.bind(this)
  }

  showVideo () {
    this.setState({
      
    })
  }

  render () {
    return (
      <div className="id-container">

      </div>
    )
  }
}

export default App
