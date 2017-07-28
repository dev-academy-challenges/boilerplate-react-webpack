import React from 'react'
import Results from './Results'

const App = () => {
  let people = []

  return (
    <div>
    <h1>React development has begun!</h1>
    <Results people={people}/>
    </div>
  )
}

export default App

