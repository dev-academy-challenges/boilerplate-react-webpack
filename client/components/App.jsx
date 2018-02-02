import React from 'react'

import Form from './Form.jsx'
import NameList from './NameList.jsx'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      hufflepuff: {
        houseName: 'Hufflepuff',
        names: []
      },
      slytherin: {
        houseName: 'Slytherin',
        names: []
      },
      gryffindor: {
        houseName: 'Gryffindor',
        names: []
      },
      ravenclaw: {
        houseName: 'Ravenclaw',
        names: []
      }
    }
    this.addName = this.addName.bind(this)
  }

  addName(house, name) {
    this.setState({
      [house]: {
        houseName: this.state[house].houseName,
        names: [...this.state[house].names, name]
      }
    })
  }

  render() {
    return (
      <div className='app'>
        <div className='crest'>
          {/* <img className='crest' src="../images/sortingHat.png" alt="crest"/> */}
          </div>
          <div className='sorting'>
            <img className='paper' src="../images/paper2.png" alt="paper"/>
              </div>
            <h1>Sorting Hat</h1>
            <Form addName={this.addName} />
            <NameList house={this.state.hufflepuff} />
            <NameList house={this.state.slytherin} />
            <NameList house={this.state.gryffindor} />
            <NameList house={this.state.ravenclaw} />
          </div>
          )
  }
}

export default App
