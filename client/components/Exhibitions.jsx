import React from 'react'
import Header from './Header'
import Menu from './Menu'


export default class Exhibitions extends React.Component {
  render() {
    let exhibitions = [
      {
        id: 1,
        title: 'Wi Taepa: Retrospective',
        date: '28 Apr 2018 — 30 Sep 2018',
        location: 'Auckland Art Gallery'
      },
      {
        id: 2,
        title: 'Gordon Walters: New Vision',
        date: '7 Jul 2018 — 4 Nov 2018',
        location: 'Auckland Art Gallery'
      },
      {
        id: 3,
        title: 'Dane Mitchell: Iris, Iris, Iris',
        date: '1 Sep 2018 — 24 Feb 2019',
        location: 'Auckland Art Gallery'
      }
    ]

    return (
      <div>
        <Header />
        <Menu />
        <h3>Exhibitions</h3>
        <div className='list'>
          <ul>
            {exhibitions.map(exhibition => (
              <li><span className='title'>{exhibition.title}</span><br />
                <span className='date'>Contact: {exhibition.date}</span><br />
                <span className='location'>Location: {exhibition.location}</span></li>)
            )}
          </ul>
        </div>
      </div>
    )
  }
}