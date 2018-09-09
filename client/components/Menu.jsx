import React from 'react'

import Events from './Events'
import Gallery from './Gallery'
import Artists from './Artists'

// class Menu extends React.Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       horoscope: '',
//       dailyhoroscope: {},
//       dates: {}
//     }
//     this.handleChange = this.handleChange.bind(this)
//     this.fetchHoroscopes = this.fetchHoroscopes.bind(this)
// }

const Menu = () => {
  return (
    <div className='menubar'>
      <button>Events</button>
      <button>Galleries</button>
      <button>Artists</button>
    </div>
  )
}

export default Menu
