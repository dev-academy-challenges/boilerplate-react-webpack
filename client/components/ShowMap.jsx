// import React from 'react'
// import { Map } from 'react-leaflet'
// import request from 'superagent'

// class Map extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       center: {
//         lat: 50.5,
//         lng: 30.5
//       },
//       zoom: 10
//     }

//     this.getMap = this.getMap.bind(this)
//   }
// }

// getMap() {
//   let center = this.state.center
//   // let mymap = L.map('mapid').center
//   let accessToken = 'pk.eyJ1Ijoic3lhbXloYW4iLCJhIjoiY2pscTZwemZsMDQwMjNwb2J2aDk4OG10aCJ9.uNH5Jw1cUvO80CSKrcpWbQ'
//   request
//   // L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
//   //   attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//   //   maxZoom: 18,
//   //   id: 'mapbox.streets'}).addTo(mymap)
//     .get('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}')
//     .catch(err => {
//       console.error(err)
//     })
// }

// render() {
//   return (
//     <div id = "mapid">
//       <h2>Auckland CBD Map</h2>
//       <p>{this.state.getMap}</p>
//     </div >
//   )
// }

// export default Map

import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

export default function ShowMap(props) {
  const position = [-36.8471567, 174.7649395]
  return (
    <div className='container'>
      <h3>Auckland CBD Map</h3>
      <div id='regmap'>
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
