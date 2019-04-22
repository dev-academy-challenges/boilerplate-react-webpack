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
}