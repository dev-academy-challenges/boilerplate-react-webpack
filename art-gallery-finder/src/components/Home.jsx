import React, { Component } from 'react'
import Navigation from './Navigation'
// import ShowMap from './ShowMap'

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="header">
                <h1>Art Gallery Finder</h1>
                </div>
                <div className="navbar">
                <Navigation />
                </div>
                {/* <div className="map">
                <ShowMap />
                </div> */}
                </div>
        )
    }
}