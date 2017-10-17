import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

function Cars (props) {
  const cars = props.cars
  console.log(cars);
  return (
    <div className='cars'>
      <table className='striped centered'>
        <thread>
          <tr>
            <th><h5>Name</h5></th>
            <th><h5>Year</h5></th>
          </tr>
        </thread>
        <tbody>
          {cars.map(car => {
            const {id, name, year, body, seats, origin, color, transmission, drive, odometer, fuel, engine, wof_exp, rego_exp, url} = car
            return (
              <tr key={id} className='car'>
              <td><h5>{name} {year}</h5></td>
              <td><img src={url} alt='' height="100" width="100"></img></td>
              </tr>
            )
         })}
        </tbody>
      </table>
    </div>
  )
}
             

export default Cars


{/* <h4>Cars</h4>
{cars.map(car => {
  return (
    <Car car={car} />
  )
})} */}

