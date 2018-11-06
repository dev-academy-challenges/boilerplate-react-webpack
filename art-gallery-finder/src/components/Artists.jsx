import React, { Component } from 'react'
import ArtistForm from './ArtistForm';

export default class Artists extends Component {
    handleCreate = (data) => {
        console.log(data)
    }
    render() {
        return (
            <div>
                <h3>Artists</h3>
                <ArtistForm
                    onCreate={this.handleCreate} />
            </div>
        )
    }
}