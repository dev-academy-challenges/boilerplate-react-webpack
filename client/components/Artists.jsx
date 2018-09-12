import React from 'react'
import Header from './Header'
import Menu from './Menu'


export default class Artists extends React.Component {
  render() {
    let artists = [
      {id: 1,
        name: 'Dane Mitchell',
        email: 'danemitchell@artist.com'
      },
      {id: 2,
        name: 'Gordon Walters',
        email: 'gordonwalters@artist.com'
      }
    ]

    return (
      <div>
        <Header />
        <Menu />
        <h3>Artists</h3>
        <div className='list'>
        <ul>
          {artists.map(artist => (
            <li><span className='name'>{artist.name}</span><br />
            <span className='email'>Email: {artist.email}</span></li>)
          )}
        </ul>
        </div>
      </div>
    )
  }
}