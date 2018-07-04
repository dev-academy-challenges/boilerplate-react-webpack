import React from 'react'

export const Header = () => {
  return (
    <div id='header'>
      <div id='left-head'>
        <img id='spca-logo' src='../../images/spca.png' alt="SPCA logo" />
        <h1>EVENT PORTAL</h1>
      </div>
      <div id='right-head'>
        <ul>
          <a href='#'><li>Volunteers</li></a>
          <a href='#'><li>Roster</li></a>
          <a href='#'><li>Contact</li></a>
        </ul>
      </div>
    </div>
  )
}
