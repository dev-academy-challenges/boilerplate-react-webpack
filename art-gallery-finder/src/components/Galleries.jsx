import React, { Component } from 'react'
import GalleriesForm from './GalleriesForm'

export default class Galleries extends Component {
    handleCreate = (data) => {
        console.log (data)
    }
    render() {
        return (
            <div>
                <h3>Galleries</h3>
                <GalleriesForm
                onCreate = {this.handleCreate} />
                </div>
        )
    }
}