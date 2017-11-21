import React from 'react'
import { Link } from 'react-router-dom'

// This might need to be turned into a stateful component (aka container)
const Footer = () => (
  <div className='Footer'>
   <div className='copyright'>
    <p>© 2017 SK I/E</p>    
  </div>
  <div className='content has-text-centered'>
    <p>
      <strong>SK Imports & Exporting</strong> by
         <a href='https://github.com/rajal-kumar/sk-imports'> Rajal Kumar</a>. The source code is licensed
         <a href='https://github.com/rajal-kumar/sk-imports'> MIT</a>. The website content is licensed
    </p>
    <p>
      <a className='icon' href='https://github.com/rajal-kumar/sk-imports'>
        <i className='fa fa-github'></i>
      </a>
    </p>
  </div>
</div>
)

export default Footer
