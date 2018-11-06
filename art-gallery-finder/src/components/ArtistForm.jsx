import React, { Component } from 'react'

export default class ArtistForm extends Component {
    state = {
        name: '',
        email: ''
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
            email: ''
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
                        placeholder="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        name="email" />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}