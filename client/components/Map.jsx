import React from 'react'

export default class Map extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      height: '30vw',
      width: '30vw',
      center: { lat: -40.170674, lng: 175.387212}
    }
  }
  componentDidMount() {
    this.loadMap(this.state.center)
  }
  loadMap(center) {
    this.map = new google.maps.Map(this.refs.map, {
      center,
      zoom: 17
    })
    this.marker = new google.maps.Marker({
      position: center,
      map: this.map
    })
  }
  render() {
    let { height, width } = this.state
    return (
      <div className="map" style={{ width, height }} ref="map" >I should be a map!</div>
    )
  }
}