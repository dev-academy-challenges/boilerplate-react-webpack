import React from 'react'
import Header from './Header'
import Menu from './Menu'


export default class Artists extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Menu />
        <h3>Artists</h3>
      </div>
    )
  }
}