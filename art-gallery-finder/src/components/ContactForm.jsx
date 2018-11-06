import React, { Component } from 'react'

export default class ContactForm extends Component {
    state = {
        name: '',
        email:'',
        phone: ''
    }
    handleChange = (e) => {
        this.setState ({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onCreate(this.state)
        this.setState = ({
            name: '',
            email: '',
            phone: ''
        })
    }

    render() {
        return (
            <div>
                <form>
                    <input
                        placeholder="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        name ="name" />
                        <input
                        placeholder="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        name ="email" />
                        <input
                        placeholder="phone"
                        value={this.state.phone}
                        onChange={this.handleChange}
                        name ="phone" />
                        <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}