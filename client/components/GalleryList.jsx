import React from 'react'

export default class Galleries extends React.Component {

  render() {
    let galleries = [
      {
        id: 1,
        name: 'Auckland Art Gallery',
        contact: 'hello@aucklandartgallery.com',
        location: 'Cnr Kitchener and Wellesley Streets',
        website: 'www.aucklandartgallery.com'
      },
      {
        id: 2,
        name: 'Artspace',
        contact: 'artspace@artspace.org.nz',
        location: 'Level 1, 300 Karangahape Road',
        website: 'www.artspace.org.nz'
      },
      {
        id: 3,
        name: 'Gow Langsford Gallery',
        contact: 'info@gowlangsfordgallery.co.nz',
        location: '26 Lorne Street',
        website: 'www.gowlangsfordgallery.co.nz'
      }
    ]

    return (
      <div>
        <h3>Galleries</h3>
        <div className='list pure-u-1'>
        <ul>
          {galleries.map(gallery => (
            <li><span className='name'>{gallery.name}</span><br />
            <span className='contact'>Contact : {gallery.contact}</span><br />
            <span className='location'>Location : {gallery.location}</span><br />
            <span className='website'>Website : {gallery.website}</span></li>)
          )}
        </ul>
        </div>
      </div>
    )
  }
}
