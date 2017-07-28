import React from 'react'
import ReactDOM from 'react-dom'

export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      people: []
    }
    this.submitPerson = this.submitPerson.bind(this)
  }

  submitPerson(e) {
    e.preventDefault()
    let firstname = ReactDOM.findDOMNode(this.refs.firstname).value
    let person = {firstname: firstname}
    let people = this.state.people
    people.push(person)
    this.setState({people: people})
  }

  render() {
    return (
      <div>
      <form onSubmit={this.submitPerson}>
        <input ref='firstname' name='firstname' placeholder='name' type='text'/>
        <input type="submit"/>
      </form>
      <ul>
        {this.state.people.map((person) => {
        return (
          <li >{person.firstname}</li>
        )
      })}
      </ul>
    </div>
    )
  }
}
