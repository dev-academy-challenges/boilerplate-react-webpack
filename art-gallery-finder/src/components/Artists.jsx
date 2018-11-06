import React, { Component } from 'react'
import ArtistForm from './ArtistForm';
import ArtistInfoList from './ArtistInfoList';

export default class Artists extends Component {
    id = 2
    state = {
        information: [
            {
                id: 0,
                name: 'Amy',
                email: 'amy@gmail.com',
                phone: '0211078311'
            },
            {
                id: 1,
                name: 'Cindy',
                email: 'cindy@gmail.com',
                phone: '0211078312'
            }
        ]
    }

    handleCreate = (data) => {
        const { information } = this.state
        this.setState({
            information: information.concat({ id: this.id++, ...data })
        })
    }
    render() {
        const { information } = this.state
        return (
            <div>
                <h3>Artists</h3>
                <ArtistForm
                    onCreate={this.handleCreate} />
                <ArtistInfoList
                data = {this.state.information} />
            </div>
        )
    }
}