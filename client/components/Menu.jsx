import React from 'react'

import { Link } from 'react-router-dom'

export default class Menu extends React.Component {
  render() {
    return (
      <div className= 'menubar'>
        <ul>
          <Link to={'/events'}><button>Events</button></Link>
          <Link to={'/galleries'}><button>Galleries</button></Link>
          <Link to={'/artists'}><button>Artists</button></Link>
        </ul>
      </div>
    )
  }
}