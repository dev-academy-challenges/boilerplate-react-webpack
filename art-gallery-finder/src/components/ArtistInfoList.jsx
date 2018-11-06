import React, { Component } from 'react'
import ArtistInfo from './ArtistInfo';

export default class ArtistInfoList extends Component {
    static defaultProps = {
        data: []
    }
    render () {
        const { data } = this.props
        const list = data.map (
            info => (
                <ArtistInfo key={info.id} info={info}/>
            )
        )
        return (
            <div>
                {list}
                </div>
        )
    }
}