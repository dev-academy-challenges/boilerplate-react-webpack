import React from 'react'

import { Link } from 'react-router-dom'

export default class Menu extends React.Component {
  render() {
    return (
      <div className='menubar'>
        <ul>
          <div className="btn-group-wrap" role="group" aria-label="Basic example">
            <Link to={'/'}><button type="button" >Home</button></Link>
            <Link to={'/exhibitions'}><button type="button" className="btn btn-flat btn-lg">Exhibitions</button></Link>
            <Link to={'/galleries'}><button type="button" className="btn btn-flat btn-lg">Galleries</button></Link>
            <Link to={'/artists'}><button type="button" className="btn btn-flat btn-lg">Artists</button></Link>
            </div>
        </ul>
      </div>
    )
  }
}