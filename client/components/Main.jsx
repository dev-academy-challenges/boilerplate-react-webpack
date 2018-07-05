import React from 'react'
import {getAll} from '../apiClient'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      volunteers: []
    }
  }

  componentDidMount () {
    getAll()
      .then(volunteers => {
        this.setState({volunteers})
      })
  }

  render () {
    return (
      <div className='main'>
        <div className='main-content'>
          <h3>Volunteers</h3>
          <ul>
            {this.state.volunteers.map(volunteer => {
              return <li key={volunteer.id}>{volunteer}</li>
            })}
          </ul>
        </div>
      </div>
    )
  }
}
