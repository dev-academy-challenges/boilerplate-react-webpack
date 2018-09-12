import React from 'react'
import Header from './Header'
import Menu from './Menu'

export default class Galleries extends React.Component {

  render() {
    let galleries = [
      {
        id: 1,
        name: 'Auckland Art Gallery',
        contact: 'hello@aucklandartgallery.com',
        location: 'Cnr Kitchener and Wellesley Streets'
      },
      {
        id: 2,
        name: 'Artspace',
        contact: 'artspace@artspace.org.nz',
        location: 'Level 1, 300 Karangahape Road'
      },
      {
        id: 3,
        name: 'Gow Langsford Gallery',
        contact: 'info@gowlangsfordgallery.co.nz',
        location: '26 Lorne Street'
      }
    ]

    return (
      <div>
        <Header />
        <Menu />
        <h3>Galleries</h3>
        <div className='list'>
        <ul>
          {galleries.map(gallery => (
            <li><span className='name'>{gallery.name}</span><br />
            <span className='contact'>Contact: {gallery.contact}</span><br />
            <span className='location'>Location: {gallery.location}</span></li>)
          )}
        </ul>
        </div>
      </div>
    )
  }
}
