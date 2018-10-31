import React, { Component } from 'react'

export default class Contacts extends Component {
    constructor (props) {
        super (props)
        this.state =
        
    }
    render() {
        return (
            <div>
                <ul>
                    <li><a href="/"><button>Home</button></a></li>
                    <li><a href="/contacts"><button>Contacts</button></a></li>
                </ul>
            </div>
        )
    }
}