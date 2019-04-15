import React from 'react'
// import Chart from 'chart.js'
import { promptDetails } from '../utilities'
const session = []
const reducer = (accumulator, currentValue) => accumulator + currentValue

class Inputs extends React.Component {

  constructor(props) {
    super(props)
    this.state = {display: 0}
  }

  updateDisplay = (num) => {
    this.setState({
      display: num
    })
  }

  render () {
    return (
      <React.Fragment>
        <div className='display'><h1>{`${this.state.display}%`}</h1></div>
        <button onClick={() => session.push(0)}
          className='button'>Incorrect</button>
        <button onClick={() => session.push(0)}
          className='button'>Prompt</button>
        <button onClick={() => session.push(1)}
          className='button'>Correct</button>
        <br></br><br></br>
        <button onClick={() =>
           this.updateDisplay(Math.round((session.reduce(reducer) / session.length) * 100))}
            className='button'>Done</button>
        <button onClick={() => this.updateDisplay(0)} className='button'>Reset</button>
      </React.Fragment>
    )
  }
}


{/* <button onClick={() => session.push('Incorrect')}
className='button'>Incorrect</button>
<button onClick={() => session.push('Prompt')}
className='button'>Prompt</button>
<button onClick={() => session.push('Correct')}
className='button'>Correct</button>
 */}



export default Inputs

// case switch can be used to change the prompt, correct, incorrect inputs to 0 1 0

// Alice pointed me towards count exercise, the words rerender were used, also could select element?

//States and counter