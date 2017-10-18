import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

class Home extends React.Component {
  
  render () {
    return (
      <div className='container'>
        <section class="section">
        <h2 className='title is-1'>Home page</h2>
          <div className='banner has-text-centered'>
            <figure class="image is-2by1">
              <img src="https://www.platinummotors.in/wp-content/uploads/2017/05/Used-Cars.jpg" />
            </figure>
          </div>
            <br />
          <div className='info'>
            <h3 className='title is-3'>Quality and reliable Used and New Cars for Sale from Japan</h3>
            <p>SK Imports & Exports is a family owned seller of used cars in New Zealand with 1 branch in Marton. With a huge range of well over 2,000 cars (and 1,500 being made ready for sale at any one time) there is truly something for everyone. From cheap cars to expensive cars, SUV’s to small town cars.  It really is a better way to buy and sell a used car. And if you want car finance or car insurance, we can sort that out for you as well.</p>
          </div>
            <br />
            <br />
          <h1 className='title is-1'>//** THIS AREA WILL HAVE A REACT FORM FOR FILTER OPTIONS **//</h1>
        </section>
      </div>
    )
  }
}

export default Home
















