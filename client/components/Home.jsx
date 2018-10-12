import React from 'react'

import Header from './Header'
import ShowMap from './ShowMap'
import Footer from './Footer'
import Menu from './Menu'


const Home = () => {
  return (
    <div className='container'>
      <div className='header pure-u-1'>
        <h1>Art Gallery Finder</h1>
      </div>
      <div className='header pure-u-1'>
        <Menu />
      </div>
      <div className='header pure-u-1'>
        <ShowMap />
      </div>
    </div>
  )
}

export default Home