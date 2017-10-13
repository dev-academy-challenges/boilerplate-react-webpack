import React from 'react'

const Comments = (props) => {
  const {activeVid} = props
  return (
    <div className="feedbacks">
      <div className="neg-feedback">
        <div id="negs">...Constructive feedbacks...</div>
        <p key={activeVid.id}>{activeVid.commentBad}</p>
        <input type="text" name="neg-feed" placeholder="Give your constructive feedback here!"></input>
        <input type="submit" value="Submit my comment"></input>
      
      </div>
     
      
      <div className="pos-feedback">

        <div id="pos">...Positive feedbacks...</div>
        <p key={activeVid.id}>{activeVid.commentGood}</p>
        <input type="text" name="pos-feed" placeholder="Unleash your praise here!"></input>
        <input type="submit" value="Submit my comment"></input>
      </div>
    </div>
  )
}

export default Comments
