import React from 'react'

import Header from './Header'
import Menu from './Menu'
import ShowMap from './ShowMap'

const Home = () => {
  const coords = {
    lat: -36.8471567,
    lng: 174.7649395
  }
  return (
    <div>
      <Header />
      <Menu />
      <ShowMap coords={coords} />
    </div>
  )
}

export default Home
