import React from 'react'

const VidList = (props) => {
  return (
    <div className="vid-side">
      {props.vids.filter(vid => vid != props.active).map((vid) =>
        <div key={vid.id}>
          <article className="media">
            <figure className="media-left">
              <p className="image is-128x128">
                <img src={vid.vidPicUrl} frameBorder="0" onClick={() => props.showVideo(vid)}/>
              </p>
            </figure>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{vid.vidTitle}</strong>
                  <br/>
                </p>
              </div>
              <nav className="level is-mobile">
                <div className="level-left">
                  <a className="level-item">
                    <span className="icon is-small"><i className="fa fa-github"></i></span>
                  </a>
                  <a className="level-item">
                    <span className="icon is-small"><i className="fa fa-retweet"></i></span>
                  </a>
                  <a className="level-item">
                    <span className="icon is-small"><i className="fa fa-heart"></i></span>
                  </a>
                </div>
              </nav>
            </div>
            <div className="media-right">
            {/* <button className="button" onClick={() => props.showVideo(vid)}>Play</button> */}
        </div>
          </article>
        </div>
      )}
    </div>
  )
}

export default VidList
