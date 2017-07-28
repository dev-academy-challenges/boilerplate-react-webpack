import React from 'react'

import Results from './Results'

import Form from "./Form"



const App = () => {
  let people = []

  return (
    <div>
      <h1>Mythical teams</h1>
        <Results people={people}/>
     <Form />
     <button onClick={this.props.onPeopleCompleted(this.people)}>Sort</button>
  </div>

  )
}

export default App
