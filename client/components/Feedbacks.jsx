import React from 'react'

import Rating from './Rating'
import Comments from './Comments'
// import { HashRouter as Router, Route } from 'react-router-dom'

const Feedbacks = (props) => {
  return (
    <div className="feedbacks">
      <Rating/>
      <Comments/>
    </div>
  )
}

export default Feedbacks
