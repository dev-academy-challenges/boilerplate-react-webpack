import React from 'react'

import { HashRouter as Router, Route } from 'react-router-dom'



class MainContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      videoUrl: '',
    }
  }

  render () {
    return (
      <div className="vid-container">
        <div className="vid-main">
          <Main_child />
        </div>
        <div className="vid-side">child of Vid-con</div>
      </div>
    )
  }
}

export default MainContainer

// https://www.youtube.com/embed/FaOSCASqLsE

// const Main_con = () => {
//   return (
//     <div className="vid-container">
//       <div className="vid-main">
//         <iframe width="854" height="480" src="" frameborder="0" allowfullscreen></iframe>
//       </div>
//       <div className="vid-side">child of Vid-con</div>
//     </div>
//   )
// }
