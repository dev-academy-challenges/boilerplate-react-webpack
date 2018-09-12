import React from 'react'
import Header from './Header'
import Menu from './Menu'
import GalleriesList from '../../data/galleries'

export default class Galleries extends React.Component {
  
  render() {
    return (
      <div>
        <Header />
        <Menu />
        <h3>Galleries</h3>
        
      </div>
    )
  }
}
