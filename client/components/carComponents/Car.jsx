import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

function Car (props) {
  const car = props.car
  console.log(car)
  return (
    <div className='car'>
    <p className='name'>{car.name}</p>
    <p className='year'>{car.year}</p>
    <p>
      <span className='body'>{car.body}</span>
      <span className='seats'>{car.seats}</span>      
    </p>
    </div>
  )
}


export default Car

 