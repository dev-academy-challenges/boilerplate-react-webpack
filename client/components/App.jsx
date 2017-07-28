import React from 'react'
import Results from './Results'
import Form from "./Form"





export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { people: [] }
  }

  return (
    <div>
      <h1>Mythical teams</h1>
        <Results people={people}/>
     <Form />
     <button onClick={this.props.onPeopleCompleted(this.people)}>Sort</button>
  </div>

  setPeople(people) {
    this.setState({
      people: people
    })
  }

  render() {
    return (
      <div>
        <h1>Sorting Cats</h1>
        {this.state.people.length > 0 ?
          <Results people={people} /> :
          <Form onPeopleCompleted={this.setPeople} />
        }
      </div>
    )
  }
}
