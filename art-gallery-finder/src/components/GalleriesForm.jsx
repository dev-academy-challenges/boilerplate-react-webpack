import React, { Component } from 'react'

export default class GalleriesForm extends Component {
    state = {
        name: '',
        phone: '',
        email: '',
        location: ''
    }
    handleChange = (e) => {
        this.setState = ({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onCreate (this.state)
        this.setState = ({
            name: '',
            phone: '',
            email: '',
            location: ''
        })
    }

    render () {
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                <input
                placeholder="name"
                value={this.setState.name}
                onChange={this.handleChange}
                name="name" />
                </form>
                </div>
        )
    }
}