import React from 'react'

const VidList = (props) => {
  return (
    <div className="vid-side">
      {props.vids.map((vid, i) =>
        <div>
          <iframe key={i} width="120" height="100" src={vid.vidUrl} frameBorder="0" allowFullScreen></iframe>
          <div className="sideTitle">
            {vid.vidTitle}
          </div>
        </div>
      )}
    </div>
  )
}

export default VidList
