import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

function Car (props) {
  const car = props.car
  // const { id, name, year, body, seats, origin, color, transmission, drive, odometer, fuel, engine, wof_exp, rego_exp, url } = props.car

  // console.log(car)
  return (
    <div className='car'>
    <p className='name'>{car.name}</p>
    <p className='year'>{car.year}</p>
    <div className="car-image">
      <img src={car.url} alt="" height="400" width="300"></img>
    </div>
    <p>
      <span className='body'>{car.body}</span>
      <span className='seats'>{car.seats}</span>      
    </p>
    </div>
  )
}

Car.defaultProps = {
  car: {
    id: '',
    name: '',
    year: '',
    body: '',
    seats: '',
    origin: '',
    color: '',
    transmission: '',
    drive: '',
    odometer: '',
    fuel: '',
    engine: '',
    wof_exp: '',
    rego_exp: '',
    url: ''
  }
}
export default Car

 