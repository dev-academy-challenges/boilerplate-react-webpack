import React, { Component } from 'react'
import ContactForm from './ContactForm'

export default class Contacts extends Component {
    handleCreate = (data) => {
        console.log(data)
    }
    render() {
        return (
            <div>
                <ContactForm
                onCreate = {this.handleCreate} />
            </div>
        )
    }
}