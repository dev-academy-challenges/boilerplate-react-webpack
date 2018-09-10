import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

export default function ShowMap (props) {
  const position = [-36.848461, 174.763336]
  const markerPosition = [-36.85119842, 174.76638922]
  return (
    <div className='container'>
      <div id='map'>
        <Map center={position} zoom={16}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
          <Marker position={markerPosition}>
            <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
          </Marker>
        </Map>
      </div>
    </div>
  )
}
