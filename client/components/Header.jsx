import React from 'react'

export const Header = () => {
  return (
    <div className='header'>
      <div className='logobox'>
        <img id='spca-logo' src='../../images/spca.png' alt="SPCA logo" />
      </div>
      <div className='title'>
        <h1>EVENT PORTAL</h1>
      </div>
      <div className='navbar'>
        <ul>
          <a href='#'><li>Volunteers</li></a>
          <a href='#'><li>Roster</li></a>
          <a href='#'><li>Contact</li></a>
        </ul>
      </div>
    </div>
  )
}
