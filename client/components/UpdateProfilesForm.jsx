import React from 'react'

const defaultState = {
    name: '',
    age: '',
    year: '',
    house: '',
    comments: ''
  }
  

export default class UpdateProfilesForm extends React.Component {
    constructor (props) {
        super(props)
        this.state 
            this.state = this.props.profiles ? { ...props.profiles } : defaultState
            this.handleChange = this.handleChange.bind(this)
            this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange (e) {
        this.setState({
         [e.target.name]: e.target.value
        })
    }
    editSubmit (e) {
        this.setState({...this.defaultState})
        const profiles = this.state
        this.props.save(profiles)
        e.preventDefault()
    }

    
    render () {
        return (
        <div className='update-profiles'>
        <form>
        <p><input placeholder='Name' name='name'
        onChange={this.handleChange}
        value={this.state.name}
        /></p>
        <p><input placeholder='Age' name='age'
        onChange={this.handleChange}
        value={this.state.age}
        /></p>
        <p><input placeholder='House' name='house'
        onChange={this.handleChange}
        value={this.state.house}
        /></p>
        <p><input placeholder='Year' name='year'
        onChange={this.handleChange}
        value={this.state.year}
        /></p>
        <p><input placeholder='Comments' name='comments'
        onChange={this.handleChange}
        value={this.state.comments}
        /></p>
        <button type='button' onClick={this.updateProfiles}>Update profile</button>
        {' '}
        <a href='#' onClick={this.props.finishEdit}>Cancel</a>
        </form>
        </div>
        )
    }
}