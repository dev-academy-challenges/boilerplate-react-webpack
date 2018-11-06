import React, { Component } from 'react'

export default class GalleriesForm extends Component {
    state = {
        name: ''
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
            name: ''
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
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}