import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

export default function ShowMap(props) {
  const position = [-36.8513272, 174.76624974]
  return (
    <div className='container'>
      <div id='regmap'>
        <Map center={position} zoom={18}>
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
