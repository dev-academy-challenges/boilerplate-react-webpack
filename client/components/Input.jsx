import React from 'react'


class Input extends React.Component {
    state = {
        text: ''
    }
    //When the text value changes this updates the state
    onChange(e) {
        this.setState({text: e.target.value})
    }
    //This handles sendinf the message
    onSubmit(e) {
        e.preventDefault()
        this.setState({text: ''})
        this.props.onSendMessage(this.state.text)
    }
    //Here we keep track of the currently entered text
render() {
    return (
        <div className='Input'>
            <form onSubmit={e => this.onSubmit(e)}>
                <input
                onChange={e => this.onChange(e)}
                value={this.state.text}
                type='text'
                placeholder='Enter your message and press ENTER'
                autoFocus={true}
                />
                <button>Send</button>
            </form>
        </div>
    )
}
}
export default Input
//An Input component with a text field and button so that we can send our messages.
