import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import Car from './Car.jsx'

class Cars extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cars: [],
      errorMessage: ''
    }
    this.fetchCars = this.fetchCars.bind(this)
  }

  componentWillMount() {
    this.fetchCars()
  }

  fetchCars() {
    return getCar()
      .then(cars => {
        this.setState({ cars: cars})
      })
      .catch(err => {
        this.setState({ errorMessage: err.message })
      })
  }

  render() {
    return (
      <div className='car-wrapper'>
        <Switch>
          <Route
            exact
            path='/cars'
            render={(props) =>
              <Car
                movies={this.state.car}
                fetchMovies={this.fetchCars}
                {...props}
              />
            }
          />
          <Route
            exact
            path='/cars/car/:id'
            render={(props) =>
              <Movie
                movie={this.state.cars.find((car) =>
                  car.id === Number(props.match.params.id))
                }
                fetchCars={this.fetchCars}
                {...props}
              />
            }
          />
        </Switch>
        {this.state.errorMessage &&
          <h1>{this.state.errorMessage}</h1>}
          
      </div>
    )
  }
}

export default Cars


render() {
  return (
    <div className="">
    </div>

