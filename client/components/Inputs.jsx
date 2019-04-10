import React from 'react'

const session = []

class Inputs extends React.Component {
  render () {
    return (
      <React.Fragment>
        <button onClick={session.push('Incorrect')} className='button'>Incorrect</button>
        <button onClick={session.push('Prompt')} className='button'>Prompt</button>
        <button onClick={session.push('Correct')} className='button'>Correct</button>
        <br></br><br></br>
        <button onClick={console.log(session)} className='button'>Done</button>
      </React.Fragment>
    )
  }
}

export default Inputs
//Need to have it so that + pushes a correct value to array
// - and P push incorrect and prompt

// Done button takes the array and reduced it into a % correct
// % correct is then plotted on a graph

// Ideally I then want to take a copy of the array that was made
// perhaps a map, and then have that displayed if the user wants to
