import React from 'react'

export default function Menu (props) {
  return (
    <div class="pure-menu pure-menu-horizontal">
        <li className="pure-menu-item"><a href="/" className="pure-menu-link ">
        HOME</a></li>
        <li className="pure-menu-item"><a href="/exhibitions" className="pure-menu-link ">
        EXHIBITIONS</a></li>
        <li className="pure-menu-item"><a href="/galleries" className="pure-menu-link ">
        GALLERIES</a></li>
        <li className="pure-menu-item"><a href="/artists" className="pure-menu-link ">
        ARTISTS</a></li>
    </div>
  )
}
