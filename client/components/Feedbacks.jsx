import React from 'react'

import Comments from './Comments'


const Feedbacks = (props) => {
  return (
    <div className="feedbacks">
      <Comments activeVid={props.activeVid} />
    </div>
  )
}

export default Feedbacks
