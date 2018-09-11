import React from 'react'
// import { render } from 'react-dom'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

export default function ShowMap (props) {
  const position = [-36.848461, 174.763336]
  // const position2 = [-36.85119842, 174.76638922]

  // addMarker = (e) => {
  //   const {markers} = this.state
  //   markers.push(e.latlng)
  //   this.setState({markers})
  // }

  return (
    <div className='container'>
      <div id='map'>
        <Map center={position} zoom={16}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
          <Marker position={position}>
            <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
          </Marker>
        </Map>
      </div>
    </div>
  )
}

// render(map, document.getElementById('map-container'))
