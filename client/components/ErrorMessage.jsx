import React from 'react'

export default class Error extends React.Component {
    shouldComponentUpdate () {
        return !!this.props.error
    }

    render () {
        const {error} = this.props
        let errorView = null
        if (error) {
            errorView = (
                <div className = 'error'>
                Error: {error.message}
                </div>
            )
        }
            return errorView
    }
}