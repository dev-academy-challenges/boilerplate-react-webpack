import React from 'react'

import { newTarget } from '../api'

export default class AddTarget extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
        target: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.addWidget = this.addWidget.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addWidget (e) {
    newTarget(this.state, this.props.finishAdd)
  }

  render () {
    return (
      <div className='add-target'>
        <form>
          <p><input placeholder='target' name='target'
            onChange={this.handleChange}
            value={this.state.name}
          /></p>
          <button type='button' onClick={this.addTarget}>Add Target</button>
          {' '}
          <a href='#' onClick={this.props.finishAdd}>Cancel</a>
        </form>
      </div>
    )
  }
}
