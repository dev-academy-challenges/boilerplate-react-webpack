import React from 'react'
import Menu from './Menu'


export default class Artists extends React.Component {
  render() {
    let artists = [
      {id: 1,
        name: 'Rita Angus',
        website: 'www.ritaangus.com'
      },
      {id: 2,
        name: 'Colin McCahon',
        website: 'www.mccahon.co.nz'
      },
      {id: 2,
        name: 'Judy Millar',
        website: 'www.judymillar.com'
      }
    ]

    return (
      <div>
        <Menu />
        <h3>Artists</h3>
        <div className='list'>
        <ul>
          {artists.map(artist => (
            <li><span className='name'>{artist.name}</span><br />
            <span className='email'>Website : {artist.website}</span></li>)
          )}
        </ul>
        </div>
      </div>
    )
  }
}