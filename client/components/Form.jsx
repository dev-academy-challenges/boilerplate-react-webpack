import React from 'react'
import starSigns from './astrology'

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
    const dest = (this.state.name.length + Number(this.state.starSign) + Number(this.state.maccas)) % 4
    let house = ''
    switch (dest) {
      case 0:
        house = 'gryffindor'
        break
      case 1:
        house = 'ravenclaw'
        break
      case 2:
        house = 'hufflepuff'
        break
      case 3:
        house = 'slytherin'
        break
    }

    this.props.addName(house, this.state)
    this.setState({
      houseName: '',
      name: '',
      starSign: '',
      maccas: ''
    })
  }

  render () {
    return (
      <form autoComplete='on'>
        <div>
          <label htmlFor='Name'>Name: </label>
          <input
            type='text'
            required='required'
            className=''
            name='name'
            onChange={this.handleChange}
            value={this.state.name} />
        </div>
        <br />
        <div>
          <select
            name='starSign'
            placeholder='Please select...'
            className=''
            onChange={this.handleChange}>
            {starSigns.map(opt => {
              return <option
                key={opt.id}
                value={opt.id}>
                {`${opt.sign} (${opt.startDate}\u2192)`}
              </option>
            })}
          </select>
        </div>
        <br />
        <div>
          <label>
            <input
              type='radio' name='maccas' value='0' /* checked={this.state.selectedOption === '0'} */
              onChange={this.handleChange} />
            Chicken nuggets
          </label>
        </div>

        <div>
          <label>
            <input
              type='radio' name='maccas' value='1' /* checked={this.state.selectedOption === '1'} */
              onChange={this.handleChange} />
            Cheeseburger
          </label>
        </div>

        <div>
          <label>
            <input
              type='radio' name='maccas' value='2' /* checked={this.state.selectedOption === '2'} */
              onChange={this.handleChange} />
            Big Mac
          </label>
        </div>

        <div>
          <label>
            <input
              type='radio' name='maccas' value='3' /* checked={this.state.selectedOption === '3'} */
              onChange={this.handleChange} />
            Hash browns
          </label>
        </div>
        <br />
        <button type='button' onClick={this.handleSubmit}>Sort!</button>
      </form>
    )
  }
}

export default Form
