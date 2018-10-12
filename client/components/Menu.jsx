import React from 'react'

import { Link } from 'react-router-dom'

export default function Menu (props) {
  return (
    <div class="ui secondary menu">
      <a class="item"><Link to={'/'}>Home</Link></a>
      <a class="item"><Link to={'/exhibitions'}>Exhibitions</Link></a>
      <a class="item"><Link to={'/galleries'}>Galleries</Link></a>
      <a class="item"><Link to={'/artists'}>Artists</Link></a>
    </div>
  )
}