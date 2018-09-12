import React from 'react'
import { render } from 'react-dom'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

export default function ShowMap(props) {
  const position = [-36.848461, 174.763336]
  // const LeafletMarkers = markers.map(marker => (
  //   <Marker position={marker.latlng} key={`marker_${marker.name}`}>
  //     <Popup>
  //       <span>{marker.name}</span>
  //     </Popup>
  //   </Marker>
  // ))

  return (
    <div className='map'>
      <Map center={position} zoom={15}>
      <TileLayer
            url='https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}'
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            maxZoom='18'
            id='mapbox.streets'
            accessToken='pk.eyJ1IjoiYnJvbmJ1cmd1bmR5IiwiYSI6ImNqanJ3N3hlYzhvb2sza2xmdGZocmwzMHgifQ.W5lq17kl4kLbi4qmQ1DNrg'
            />
        <Marker position={position}>
          <Popup>
            <span>A pretty CSS3 popup. <br /> Easily customizable.</span>
          </Popup>
        </Marker>
        {/* {LeafletMarkers} */}
      </Map>
    </div>
  )
}