import React from 'react'
import { HashRouter as Router } from 'react-router-dom'

// import Nav from './Nav'
import Header from './Header'
// import RPost from './RPost'
// import ImgStream from './ImgStream'
// import Footer from './Footer'

const App = () => {
  return (
    <div>
      <Router>
        <div className='tophalf'>
          {/* <Nav /> */}
          <Header />
        </div>
        {/* <div className='lowerhalf'>
          <RPost />
          <ImgStream />
          <Footer />
        </div> */}
      </Router>
      </div>
  
  )
}

export default App
