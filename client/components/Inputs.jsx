import React from 'react'
import Chart from 'chart.js'

const session = []
const reducer = (accumulator, currentValue) => accumulator + currentValue


class Inputs extends React.Component {
  render () {
    return (
      <React.Fragment>
        <button onClick={() => session.push(0)}
          className='button'>Incorrect</button>
        <button onClick={() => session.push(0)}
          className='button'>Prompt</button>
        <button onClick={() => session.push(1)}
          className='button'>Correct</button>
        <br></br><br></br>
        <button onClick={() => console.log((session.reduce(reducer) / session.length))} className='button'>Done</button>
      </React.Fragment>
    )
  }
}

export default Inputs
// Need to have it so that + pushes a correct value to array
// - and P push incorrect and prompt

// Done button takes the array and reduced it into a % correct
// % correct is then plotted on a graph

// Ideally I then want to take a copy of the array that was made
// perhaps a map, and then have that displayed if the user wants to

// Going to start so that Incorrect and prompt only push 0 and correct pushes 1
// for sake of ease with reduce.

//How do I assign a new value to an array using onclick

//Implement graph