import React from 'react'
import { render } from 'react-dom'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { Link } from 'react-router-dom'

export default function ShowMap(props) {
  return (
    <div className='map'>
      <div className='cbdmap'>
        <Map center={[-36.848461, 174.763336]} zoom={15}>
          <TileLayer
            url='https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}'
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            maxZoom='18'
            id='mapbox.streets'
            accessToken='pk.eyJ1IjoiYnJvbmJ1cmd1bmR5IiwiYSI6ImNqanJ3N3hlYzhvb2sza2xmdGZocmwzMHgifQ.W5lq17kl4kLbi4qmQ1DNrg'
          />
          <div className='marker'>
            <Marker position={[-36.85116405, 174.76635718]}>
              <Popup><span><Link to={'/galleries'}>Auckland Art Gallery</Link></span></Popup>
            </Marker>
            <Marker position={[-36.8579061, 174.7580323]}>
              <Popup><span><Link to={'/galleries'}>Artspace</Link></span></Popup>
            </Marker>
            <Marker position={[-36.8503976, 174.7657216]}>
              <Popup><span><Link to={'/galleries'}>Gow Langsford Gallery</Link></span></Popup>
            </Marker>
            <Marker position={[-36.85109099, 174.76586388]}>
              <Popup><span><Link to={'/galleries'}>Gow Langsford Gallery</Link></span></Popup>
            </Marker>
            <Marker position={[-36.8492412, 174.7687759]}>
              <Popup><span><Link to={'/galleries'}>George Fraser Gallery</Link></span></Popup>
            </Marker>
            <Marker position={[-36.8496103, 174.766523]}>
              <Popup><span><Link to={'/galleries'}>Lane Gallery</Link></span></Popup>
            </Marker>
            <Marker position={[-36.85220303, 174.76313269]}>
              <Popup><span><Link to={'/galleries'}>Aotea Gallery</Link></span></Popup>
            </Marker>
            <Marker position={[-36.8467669, 174.7692954]}>
              <Popup><span><Link to={'/galleries'}>Gus Fisher Gallery</Link></span></Popup>
            </Marker>
          </div>
        </Map>
      </div>
    </div>
  )
}