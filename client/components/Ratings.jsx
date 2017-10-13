import React from 'react'

const Ratings = (props) => {
  const {activeVid} = props
  return (
    <div className="feedback-symbols">

      <h2 className="symbols">Knowledge: <br/>{activeVid.knowledge}</h2>
      <h2 className="symbols">Humour: <br/>{activeVid.humour}</h2>
      <h2 className="symbols">Use of board:<br/> {activeVid.useofBoard}</h2>
      <h2 className="symbols">Flow: <br/>{activeVid.flow}</h2>
      <h2 className="symbols">Topic:<br/> {activeVid.topic}</h2>

    </div>
  )
}

export default Ratings

// < div key= { activeVid.id } className= "single-rating" >
