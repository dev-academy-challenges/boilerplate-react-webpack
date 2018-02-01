import React from 'react'

class Form extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      starSign: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit (evt) {
    this.props.addName('hufflepuff', this.state)
    this.setState({
      houseName: '',
      name: '',
      starSign: ''
    })
  }
  render () {
    return (
      <form autoComplete='on'>
        <div>
          <label htmlFor='Name'>Name</label>
          <input
            type='text'
            className=''
            name='name'
            onChange={this.handleChange}
            value={this.state.name} />
        </div>
        <button type='button' onClick={this.handleSubmit}>Sort!</button>
      </form>
    )
  }
}

export default Form
