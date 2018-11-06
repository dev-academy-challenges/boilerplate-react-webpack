import React, { Component } from 'react'
import GalleriesForm from './GalleriesForm'

export default class Galleries extends Component {
    handleCreate = (data) => {
        console.log (data)
    }
    render() {
        return (
            <div>
                <GalleriesForm
                onCreate = {this.handleCreate} />
                </div>
        )
    }
}