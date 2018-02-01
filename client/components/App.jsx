import React from 'react'

import Form from './Form.jsx'
import NameList from './NameList.jsx'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      names: []
    }
    this.addName = this.addName.bind(this)
  }

  addName (name) {
    this.setState({
      names: [...this.state.names, name]
    })
  }

  render () {
    return (
      <div>
        <h1>Sorting Hat</h1>
        <Form addName={this.addName} />
        <NameList names={this.state.names} />
      </div>
    )
  }
}

export default App
