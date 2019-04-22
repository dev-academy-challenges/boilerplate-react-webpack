import React from 'react'

import { updateWidget } from '../api'

export default class EditWidget extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            name: props.profiles.name,
            age: props.profiles.age,
            house: props.profiles.age,
            year: props.profiles.year,
            comments: props.profiles.comments
        }
        this.handleChange = this.handleChange.bind(this)
        this.EditProfiles = this.EditProfiles.bind(this)
    }
    handleChange (e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    editProfiles (e) {
        updateProfiles(this.state, this.props.finishEdit)
    }

    componentDidUpdate (prevProps) {
        if (this.props.profiles !== prevProps.profiles) {
            this.setState({
                name: this.props.profiles.name, 
                age: this.props.profiles.name,
                house: this.props.profiles.house,
                year: this.props.profiles.year,
                comments: this.props.profiles.comments
            })
        }
    }

    render () {
        <div classname='add-profiles' >
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
        <button type='button' onClick={this.editProfiles}>Edit this profile</button>
        {' '}
        <a href='#' onClick={this.props.finishEdit}>Cancel</a>
        </form>
        </div>
        )
    }
}