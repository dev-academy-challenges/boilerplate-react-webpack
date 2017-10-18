import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import Cars from './carComponents/Cars.jsx'
import FindNav from './FindNav.jsx'
import { getCars } from '.././client-api/index.js'

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
     this.setState({cars})
   })
  }

  render() {
    const cars = this.state.cars
    return (
      <div className='find'>
      <div className='title'>
        <h2 className="title is-1">Find a car</h2>
        <div className="field has-addons">
          <div className="control">
            <input className="input" type="text" placeholder="Find a car" />
          </div>
            <br />
            <br />            
            <div className="control">
              <a className="button is-info">Search</a>
            </div>
          </div>
        <div className='cars-list'>
         <Cars cars={cars} />
        </div>
        <div className='btm-nav'>
          <FindNav />
        </div>
      </div>
      </div>
    )
  }
}
  
export default Find

  