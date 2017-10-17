import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import { getCars } from '.././client-api/index.js'
import Cars from './carComponents/Cars.jsx'

class Find extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cars: []
    }
    this.fetchCars = this.fetchCars.bind(this)
  }

  componentWillMount() {
    this.fetchCars()
  }

  fetchCars() {
   return getCars()
   .then(cars => {
     this.setState({cars: cars})
   })
  }

  render() {
    const cars = this.state.cars
    return (
      <div className='find'>
      <div className='title'>
        <h2>Find a car</h2>
      </div>
        <div className='cars-list'>
        <Cars cars={cars} />
        </div>
      </div>
    )
  }
}
  
export default Find

  