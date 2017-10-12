import React from 'react'

import { HashRouter as Router, Route } from 'react-router-dom'

const Feedbacks = (props) => {
  return (
    <div className="feedbacks">
      <Rating/>
      <Comments/>
    </div>
  )
}

export default Feedbacks