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
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onCreate(this.state)
        this.setState = ({
            name: '',
            phone: '',
            email: '',
            location: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        placeholder="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        name="name" />
                        <input
                        placeholder="phone"
                        value={this.state.phone}
                        onChange={this.handleChange}
                        name="phone" />
                        <input
                        placeholder="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        name="email" />
                        <input
                        placeholder="location"
                        value={this.state.location}
                        onChange={this.handleChange}
                        name="location" />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}