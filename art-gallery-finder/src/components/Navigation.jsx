import React, { Component } from 'react'

export default class Navigation extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><a href="/"><button>Home</button></a></li>
                    <li><a href="/galleries"><button>Galleries</button></a></li>
                    <li><a href="/artists"><button>Artists</button></a></li>
                    <li><a href="/contacts"><button>Contacts</button></a></li>
                </ul>
            </div>
        )
    }
}