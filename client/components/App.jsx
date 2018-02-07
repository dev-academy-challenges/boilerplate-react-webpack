import React from 'react'

import Nav from './Nav'
import Header from './Header'
import RPost from './RPost'
import ImgStream from './ImgStream'
import Footer from './Footer'

const App = () => {
  return (
    <div>
      <div className='tophalf'>
        <Nav />
        <Header />
      </div>
      <div classNAme='lowerhalf'>
        <RPost />
        <ImgStream />
        <Footer />
      </div>
    </div>
  )
}

export default App
