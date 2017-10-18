import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

class Nav extends React.Component {

  render() {
    return (
    <div className='filter-nav'>
      <h3>Filter options</h3>
      <div className='type'>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
      </ul>
      </div>
    </div>
    )
  }
}

export default Nav






