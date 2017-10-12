import React from 'react'

import { HashRouter as Router, Route } from 'react-router-dom'

const Feedbacks = (props) => {
  return (
    <div className="feedbacks">
      <div className="neg-feedback">
        <div id="negs">...Constructive feedbacks...</div>
        <div>
          <div>{props.commentBad.map(comment =>
            <p>{comment}</p>
          )}
          </div>

        </div>

        <input type="text" name="neg-feed" placeholder="Give your constructive feedback here!"></input>
        <input type="submit" value="Submit my comment"></input>
      </div>
      <div className="pos-feedback">
        <div id="pos">...Positive feedbacks...
          <div>
            <div>{props.commentGood.map(comment =>
              <p>{comment}</p>
            )}
            </div>

          </div>

          <input type="text" name="pos-feed" placeholder="Unleash your praise here!"></input>
          <input type="submit" value="Submit my comment"></input>
        </div>
      </div>
    </div>
  )
}

export default Feedbacks

// class Main_con extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {}
//   }

//   render() {
//     return (
//       <div className="feedbacks">
//         <div className="neg-feedback">
//           <div id="negs">Constructive feedbacks</div>

//           <input type="text" name="neg-feed" placeholder="Give your constructive feedback here!"></input>
//           <input type="submit" value="Submit my comment"></input>
//         </div>
//         <div className="pos-feedback">
//           <div id="pos">Positive feedbacks</div>

//           <input type="text" name="pos-feed" placeholder="Unleash your praise here!"></input>
//           <input type="submit" value="Submit my comment"></input>
//         </div>
//       </div>
//     )
//   }
// }
