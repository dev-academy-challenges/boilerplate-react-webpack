import React from 'react'
import { HashRouter as Router, Route, } from 'react-router-dom'

import Nav from './Nav'
import Header from './Header'
import RPost from './RPost'
// import ImgStream from './ImgStream'
import Footer from './Footer'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      post: ''
    }
  }
  render() {
    return (
      <div>
        <Router>
          <div>
            <div className='tophalf'>
              <Nav />
              <Header />
            </div>
            <div className='lowerhalf'>
              <Route path='/recentpost' component={RPost} />
              {/* <ImgStream /> */}
              <Footer />
            </div>
          </div>
        </Router>
      </div>

    )
  }
}

export default App
