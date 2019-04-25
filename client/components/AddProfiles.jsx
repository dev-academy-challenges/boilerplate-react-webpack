import React from 'react'

import TextField from '@material-ui/core/TextField'

import { appendProfiles } from '../api'

export default class AddProfiles extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      Name: '',
      Age: '',
      House: '',
      Year: '',
      Comments: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.addProfiles = this.addProfiles.bind(this)
  }
  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addProfiles (e) {
    appendProfiles(this.state, this.props.finishAdd)
  }

  render () {
    return (
      <div className='add-profiles'>
        <form>
          <p><TextField
            placeholder='Name' name='name'
            onChange={this.handleChange}
            value={this.state.name}
          /></p>
          <p><TextField placeholder='Age' name='age'
            onChange={this.handleChange}
            value={this.state.age}
          /></p>
          <p><TextField placeholder='House' name='house'
            onChange={this.handleChange}
            value={this.state.house}
          /></p>
          <p><TextField placeholder='Year' name='year'
            onChange={this.handleChange}
            value={this.state.year}
          /></p>
          <p><TextField placeholder='Comments' name='comments'
            onChange={this.handleChange}
            value={this.state.comments}
          /></p>
          <button type='button' onClick={this.addProfiles}>Add profiles</button>
          { '' }
          <a href='#' onClick={this.props.finishAdd}>Cancel</a>
        </form>
      </div>
    )
  }
}
