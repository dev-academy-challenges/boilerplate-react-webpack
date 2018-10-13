import React from 'react'

import ShowMap from './ShowMap'
import Menu from './Menu'
import GalleryList from './GalleryList'


const Home = () => {
  return (
    <div className='container'>
      <div className='header pure-u-1'>
        <h1>Art Gallery Finder</h1>
      </div>
      <div className='pure-u-1'>
        <Menu />
      </div>
      <div className='pure-u-1-2'>
        <ShowMap />
      </div>
      <div className='pure-u-1-2'>
        <GalleryList />
      </div>
      <div className='footer pure-u-1'>
        <p>Made by Amy Han</p>
      </div>
    </div>
  )
}

export default Home