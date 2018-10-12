import React from 'react'

export default function Menu (props) {
  return (
    <div class="pure-menu pure-menu-horizontal">
      <ul className="pure-menu-list">
        <li className="pure-menu-item"><a href="/" className="pure-menu-link ">
        HOME</a></li>
        <li className="pure-menu-item"><a href="/exhibitions" className="pure-menu-link ">
        <button className="pure-button">EXHIBITIONS</button></a></li>
        <li className="pure-menu-item"><a href="/galleries" className="pure-menu-link ">
        <button className="pure-button">GALLERIES</button></a></li>
        <li className="pure-menu-item"><a href="/artists" className="pure-menu-link ">
        <button className="pure-button">ARTISTS</button></a></li>
      </ul>
    </div>
  )
}
