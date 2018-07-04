import React from 'react'

export const Header = () => {
  return (
    <div id='header'>
      <div id='left-head'>
        <img id='spca-logo' src="../public/images/spca.png" alt="SPCA logo" />
        <h1>SPCA - EVENT PORTAL</h1>
      </div>
      <div id='right-head'>
        <ul id='nav'>
          <li>Volunteers</li>
          <li>Roster</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  )
}
