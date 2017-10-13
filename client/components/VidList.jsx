import React from 'react'

const VidList = (props) => {
  return (
    <div className="vid-side">
      {props.vids.filter(vid => vid != props.active).map((vid) =>
        <div key={vid.id}>
          <iframe width="120" height="100" src={vid.vidUrl} frameBorder="0" allowFullScreen></iframe>
          <div className="sideTitle">
            {vid.vidTitle}
            <button className="button" onClick={() => props.showVideo(vid)}>Play</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default VidList
