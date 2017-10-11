import React from 'react'

class Lunch extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleAdd (event) {
    const { firstName, lastName } = this.state
    const name = `${firstName} ${lastName}`
    this.props.handleAddUser(name)
    this.setState({
      firstName: '',
      lastName: ''
    })
  }

  render () {
    const { firstName, lastName } = this.state
    return (
      <div className='add-user-form'>
        <input name='firstName' onChange={this.handleChange} value={firstName} />
        <input name='lastName' onChange={this.handleChange} value={lastName} />
        <button onClick={this.handleAdd}>Add Luncher</button>
      </div>
    )
  }
}

export default Lunch
