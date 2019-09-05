import React from 'react'

import Messages from './Messages'

import { randomColor, randomName } from '../utils/random'

import Input from './Input'

class App extends React.Component {
  state = {
    messages: [
      {
        text:'This is a text message',
        member: {
          color: 'blue',
          username: 'bluemoon'
        }
      }
    ],
    member: {
      username: randomName(),
      color: randomColor()
    }
  }
  onSendMessage = (message) => {
    const messages = this.state.messages
    messages.push({
      text: message,
      member: this.state.member
    })
    this.setState({ messages: messages })
  }
  render() {
    return (
      <div className='App'>
        <div className= 'App-header'>
          <h1>Chat Me Up</h1>
        </div>
        <Messages
        messages={this.state.messages}
        currentMember={this.state.member}
        />
        <Input
        onSendMessage={this.onSendMessage}
        />
         
      </div>
    )
  }

}
export default App
