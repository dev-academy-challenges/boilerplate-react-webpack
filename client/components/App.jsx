import React from 'react'

const App = () => {
  return (
    <div className="hero is-fullheight is-success is-bold has-text-centered">
      <div className="hero-head">
        <figure className="image-container container image is-128x128 has-text-centered">
          <img src="http://pngimg.com/uploads/apple/apple_PNG12405.png" />
        </figure>
      </div>
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-1  has-text-centered">"Welcome to the Shared Lunch App..."</h1>
        </div>
      </div>
      <div className="hero-foot">
        <nav className="tabs is-boxed is-fullwidth">
          <div className="container">
            <ul>
              <li className="is-active"><a>Overview</a></li>
              <li><a>About</a></li>
              <li><a>Lunch</a></li>
              <li><a>People</a></li>
              <li><a>FAQ</a></li>
              <li><a>Contact Us</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default App
