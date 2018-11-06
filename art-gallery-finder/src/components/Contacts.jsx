import React, { Component } from 'react'
import ContactForm from './ContactForm'

export default class Contacts extends Component {
    handleCreate = (data) => {
        console.log(data)
    }
    render() {
        return (
            <div>
                <h3>Contact Us</h3>
                <ContactForm
                    onCreate={this.handleCreate} />
            </div>
        )
    }
}