import React, { Component } from 'react'

export default class ArtistInfo extends Component {
    static defaultProps = {
        name: 'name',
        email: 'name@gmail.com',
        phone: '000 000 000',
        id: 0
    }
    render() {
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        }
        const { name, email, phone, id } = this.props.info
        return (
            <div style={style}>
                <span><b>{name}</b></span><br/>
                <span>{email}</span>
                <span> {phone}</span>
            </div>
        )
    }
}

