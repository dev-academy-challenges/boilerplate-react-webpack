import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import CarNamePlate from './CarNamePlate.jsx'

class Cars extends React.Component {

  render() {
    return (
      <div className='car-wrapper'>
          
      </div>
    )
  }
}

export default Cars


        {props.names.map(name => {
          return (
            <Car />
          )