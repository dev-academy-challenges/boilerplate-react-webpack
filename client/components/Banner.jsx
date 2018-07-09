import React from 'react'

export const Banner = () => {
  return (
    <div className='banner'>
      <img src='./../../images/spca_banner1.jpg' alt='cute AF puppies' />
      <div className='banner-overlay'>
        <h2>Welcome</h2>
        <p>This tool will help you to plan your event and organise your volunteers. For any questions or issues, please contact one of the people listed on the Contacts page.</p>
        <button id='banner-button' type='button'>Contacts</button>
      </div>
    </div>
    
  )
}
