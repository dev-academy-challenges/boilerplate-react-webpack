import React from 'react'
import Header from './Header'
import Menu from './Menu'
import GalleriesList from '../../data/galleries'

export default function Galleries(props) {
  const galleryInfo = GalleriesList.map((item, iterator) => {
    return <li key={iterator}></li>
  })
  return (
    <div>
      <Header />
      <Menu />
      <h3>Galleries</h3>
      <ul> {galleryInfo} </ul>
    </div>
  )
}
