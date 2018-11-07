import React, { Component } from 'react'
import Navigation from './Navigation'
import ContactForm from './ContactForm'

export default class Contacts extends Component {
    handleCreate = (data) => {
        console.log(data)
    }
    render() {
        return (
            <div>
                <div className="navbar">
                    <Navigation />
                </div>
                <div>
                    <h3>Contact Us</h3>
                    <ContactForm
                        onCreate={this.handleCreate} />
                </div>
            </div>
        )
    }
}