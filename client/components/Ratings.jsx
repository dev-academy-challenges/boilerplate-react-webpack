import React from 'react'

const Ratings = (props) => {
  const {activeVid} = props
  return (
    <div className="feedback-symbols">
      
        <h2 className="symbols">Knowledge: {activeVid.knowledge}</h2>
        <h2 className="symbols">Humour: {activeVid.humour}</h2>
        <h2 className="symbols">Use of board: {activeVid.useofBoard}</h2>
        <h2 className="symbols">Flow: {activeVid.flow}</h2>
        <h2 className="symbols">Topic: {activeVid.topic}</h2>
      
    </div>
  )
}

export default Ratings

      // < div key= { activeVid.id } className= "single-rating" >