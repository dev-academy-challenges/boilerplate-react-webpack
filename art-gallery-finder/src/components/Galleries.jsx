import React, { Component } from 'react'
import Navigation from './Navigation'
import GalleriesForm from './GalleriesForm'

export default class Galleries extends Component {
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
                <h3>Galleries</h3>
                <GalleriesForm
                    onCreate={this.handleCreate} />
            </div>
            </div>
        )
    }
}