import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { getCar, getCarData} from '../../client-api/'

class Car extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data
    }
  }

  componentDidMount() {
    this.getSingleCarData(this.props.car.name, this.props.movie.id)
  }
  
  componentWillReceiveProps(props) {
    this.getSingleCarData(props.cars.name, props.cars.id)
  }

  getSingleCarData(name, id) {
    if (name) getCarData(name)
      .then(data => this.setState({ data }))
  }


  render(props) {
    return (
      <div className='car'>
        <h1>{name}</h1>
        <div key={cars[0].id}>
          <h1><strong>{cars[0].name + ': '}</strong>{cars[0].year}</h1>
        </div>
      </div>
    )
  }
}

export default Car

// render() {
//   const { data, reviews } = this.state
//   const { id, title, plot } = this.props.movie
//   return (
//     <div className="">
//       <h1>{title}</h1>
//       {/* <h3>{this.state.data}</h3> */}
//       {data && <div>
//         <h3>{data.overview}</h3>
//         <img src={`http://image.tmdb.org/t/p/w185/${data.backdrop_path}`} />
//         <img src={`http://image.tmdb.org/t/p/w185/${data.poster_path}`} />
//         <hr />
//         <div key={reviews[0].id}>
//           <h1><strong>{reviews[0].reviewer + ": "} </strong>{reviews[0].writeup}</h1>
//           <img src={reviews[0].url} />
//         </div>
//       </div>}
//     </div>
//   )
// }
// }