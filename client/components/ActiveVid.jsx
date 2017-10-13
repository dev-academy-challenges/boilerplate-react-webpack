import React from 'react'

import { HashRouter as Router, Route } from 'react-router-dom'

const ActiveVid = (props) => {
  return (

    <div className="vid-main">
      <div>
        <iframe width="100%" height='500px'  src={props.video.vidUrl} frameBorder="0" allowFullScreen></iframe>
        <h1 className="box">{props.video.vidTitle}</h1>
      </div>
    </div>
    
  )
}

export default ActiveVid

// https://www.youtube.com/embed/FaOSCASqLsE

// class MainContainer extends React.Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       videoUrl: '',
//     }
//   }

//   render () {
//     return (
//       <div className="vid-container">
//         <div className="vid-main">
//           <MainChild />
//         </div>
//         <div className="vid-side">child of Vid-con</div>
//       </div>
//     )
//   }
// }
