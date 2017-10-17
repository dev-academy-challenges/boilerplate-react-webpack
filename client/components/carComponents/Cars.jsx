import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import Car from './Car'

function Cars (props) {
  const cars = props.cars
  console.log(props);
  return (
    <div className='cars'>
      <h4>Cars</h4>
      {cars.map(car => {
        return (
          <Car car={car} />
        )
      })}
    </div>
  )
}

export default Cars



