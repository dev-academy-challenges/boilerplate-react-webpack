import React from 'react'
// import Chart from 'chart.js'

const session = []
const reducer = (accumulator, currentValue) => accumulator + currentValue
const display = ''

class Inputs extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className='display'>{display}0</div> 
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


// Done button takes the array and reduced it into a % correct
// % correct is then plotted on a graph

//Implement graph