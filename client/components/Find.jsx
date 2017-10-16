import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { getCarById } from '.././client-api/index.js'

import CarNamePlate from './car-components/CarNamePlate.jsx'

class Find extends React.Component {

  render() {
    return (
      <div className='find'>
        <h2>Find a car</h2>
          <CarNamePlate />
      </div>
    )
  }
}
  
export default Find
