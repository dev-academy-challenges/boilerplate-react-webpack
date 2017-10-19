import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import View from './SingleCar.jsx'

function Car (props) {
  const car = props.car

  return (
    <div className="column has-text-centered is-half-desktop tile is-parent">
      <article className="tile is-child box">
        <a><Link to={`/view/${car.id}`}><p className="title">{car.name}</p></Link></a>
          <a><Link to={`/view/${car.id}`}><p className="subtitle">{car.year}</p></Link></a>
        <hr />
      <figure className="image">
              <a><Link to={`/view/${car.id}`}><img src={car.url} alt=""></img></Link></a>
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

  