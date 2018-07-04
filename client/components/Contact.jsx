import React from 'react'

export const Contact = () => {
  return (
    <div id='contact-box'>
      <div className='contact' id='contact-coord'>
        <h3>Contact</h3><br />
        <p>Lucie Fowler</p>
        <p>Events and Community Fundraising Coordinator</p>
        <a href="tel:0211820241">M: 021 182 0241</a>
        <a href="tel:092567312">P: 09 256 7312</a>
        <a href="mailto:lucie.fowler@spca.nz">E: lucie.fowler@spca.nz</a>
      </div>
      <div className='contact' id='contact-mgr'>
        <p>Alex Wilson</p>
        <p>Community and Events Fundraising Manager </p>
        <a href="tel:0220847190">M: 022 084 7190</a>
        <a href="mailto:alex.wilson@spca.nz">E: alex.wilson@spca.nz</a>
      </div>
      <div className='contact' id='contact-spca'>
        <p>SPCA</p>
        <p>Auckland Centre</p>
        <p>50 Westney Road</p>
        <p>Mangere</p>
        <a href="tel:092567300">P: 09 256 7300</a>
        <a href="mailto:info@spca.nz">E: info@spca.nz</a>
      </div>
    </div>
  )
}
