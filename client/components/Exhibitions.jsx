import React from 'react'
import Menu from './Menu'


export default class Exhibitions extends React.Component {
  render() {
    let currentExhibitions = [
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
      },
      {
        id: 4,
        title: 'James Cousins: Step Size Zero',
        date: '5 Sep 2018 — 29 Sep 2018',
        location: 'Gow Langsford Gallery'
      }
    ]
    let upcomingExhibitions = [
      {
        id: 1,
        title: 'Sydney Contemporary 2018',
        date: '13 Sep 2018 — 16 Sep 2018',
        location: 'Gow Langsford Gallery'
      },
      {
        id: 2,
        title: 'Rachel Whiteread: Untitled (Pair)',
        date: '13 Nov 2018 — 16 Dec 2018',
        location: 'Auckland Art Gallery'
      },
      {
        id: 3,
        title: 'André Hemer: André Hemer',
        date: '28 Nov 2018 — 22 Dec 2018',
        location: 'Gow Langsford Gallery'
      }
    ]


    return (
      <div>
        <Menu />
        <h3>Current Exhibitions</h3>
        <div className='list'>
          <ul>
            {currentExhibitions.map(exhibition => (
              <li><span className='title'>{exhibition.title}</span><br />
                <span className='date'>Date : {exhibition.date}</span><br />
                <span className='location'>Location : {exhibition.location}</span></li>)
            )}
          </ul>
        </div>
        <h3>Upcoming Exhibitions</h3>
        <div className='list'>
          <ul>
            {upcomingExhibitions.map(exhibition => (
              <li><span className='title'>{exhibition.title}</span><br />
                <span className='date'>Contact : {exhibition.date}</span><br />
                <span className='location'>Location : {exhibition.location}</span></li>)
            )}
          </ul>
        </div>
        {/* <Calendar /> */}
      </div>
    )
  }
}