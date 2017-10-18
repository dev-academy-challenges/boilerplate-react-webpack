import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

function Car (props) {
  const car = props.car
  // const { id, name, year, body, seats, origin, color, transmission, drive, odometer, fuel, engine, wof_exp, rego_exp, url } = props.car

  // console.log(car)
  return (
    <div className="tile is-parent">
      <article className="tile is-child box">
        <a><p className="title">{car.name}</p></a>
        <a><p className="subtitle">{car.year}</p></a>
      <figure className="image is-128x128">
        <a><img src={car.url} alt=""></img></a>
        </figure>
      </article>
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

  