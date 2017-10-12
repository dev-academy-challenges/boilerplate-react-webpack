import React from 'react'

import { HashRouter as Router, Route } from 'react-router-dom'

const Main_con = () => {
  return (
      <div className="vid-container">
        <div className="vid-main">child of 
          vid here
          </div>
        <div className="vid-side">child of Vid-con</div>
      </div>
    )
}

export default Main_con


// Class component  

// class Main_con extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {}
//   }

//   render() {
//     return (
//       <div className="vid-container">
//         <div className="vid-main">child of Vid-con</div>
//         <div className="vid-side">child of Vid-con</div>
//       </div>
//     )
//   }
// }