import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'


import Car from './Car'

class CarNamePlate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render(props) {
    return (
        <div className='car-name-plate'>
          {props.cars.map(name => {
            return (
              <Car />
            )
          })}
          <span className='car-name'>{props.name}</span>
          <span className='car-year'>{props.year}</span>
        </div>
    )
  }
}

export default CarNamePlate
