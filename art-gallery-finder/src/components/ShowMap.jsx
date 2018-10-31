// import React from 'react'
// import { render } from 'react-dom'
// import { Map, TileLayer } from 'react-leaflet'

// export default function ShowMap (props) {
//   return (
//     <div>
//       <div className='map'>
//         <Map center={[-36.848461, 174.763336]} zoom={13}>
//           <TileLayer
//             url='https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}'
//             attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
//             maxZoom='18'
//             id='mapbox.streets'
//             accessToken='pk.eyJ1IjoiYnJvbmJ1cmd1bmR5IiwiYSI6ImNqanJ3N3hlYzhvb2sza2xmdGZocmwzMHgifQ.W5lq17kl4kLbi4qmQ1DNrg'
//           />
//           {/* <div className='marker'>
//         <Marker position={[-36.85116405, 174.76635718]}>
//         <Popup><span>Amy</span></Popup>
//       </Marker>
//       </div> */}
//         </Map>
//       </div>
//     </div>
//   )
// }