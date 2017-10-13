import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Header from './Header'
import ActiveVid from './ActiveVid'
import Ratings from './Ratings'
import Comments from './Comments'
import Footer from './Footer'
import VidList from './VidList'

import { getVids } from '../../server/db'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      vids: getVids(),
      activeVid: getVids()[0]
    }
    this.showVideo = this.showVideo.bind(this)
  }

  showVideo (vid) {
    this.setState({
      activeVid: vid
    })
  }

  // handleListClick (vid) {
  //   this.setState({
  //     activeVid: vid
  //   })
  // }

  render () {
    return (
      <div className="app">
        <Header />
        <div className="vid-container">
          <ActiveVid video={this.state.activeVid} title={this.state.title}/>
          <VidList active={this.state.activeVid} vids={this.state.vids} showVideo={this.showVideo}/>
        </div>
        <Ratings activeVid={this.state.activeVid} />
        <Comments activeVid={this.state.activeVid} />
      </div>
    )
  }
}

export default App
