import React from 'react'
//Material UI Imports
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'


let session = []
const reducer = (accumulator, currentValue) => accumulator + currentValue
export let sessionData = []
export let target = [] //Not currently being used

class Inputs extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      display: 0,
      target: ''
    }
  }

  updateDisplay = (num, str) => {
    this.setState({
      display: num,
      target: str
    })
  }

  updateSession = () => {
    this.setState({
    display: 0,
    session: []
  })
  }



  render () {
    return (
      <React.Fragment>
        <Grid 
        container
        direction="row"
        justify="center"
        alignitems="center"
         className='display'>

      <Typography component="h5" variant="h5" gutterBottom>
        Target: {this.state.target}
      </Typography>
      <Typography component="h5" variant="h5" gutterBottom>
        {`${this.state.display}%`} Correct
      </Typography>
        </Grid>

        <Grid 
        container
        direction="row"
        justify="space-evenly"
        alignitems="center"
         className='display'>

        <form noValidate autoComplete="off">
        <TextField 
        id="outlined-target"
        label="target"
       
        variant="outlined"
        onChange={this.updateDisplay.target} />
        </form>

         </Grid>

        <Grid 
        container
        direction="row"
        justify="space-evenly"
        alignitems="center"
         className='display'>

        <Button size="large"
        color="primary"
        onClick={() => session.push(0)}
        className='button'>Incorrect</Button>
        <Button size="large"
        color="primary"
        onClick={() => session.push(0)}
        className='button'>Prompt</Button>
        <Button size="large"
        color="primary"
        onClick={() => session.push(1)}
        className='button'>Correct</Button>

        </Grid>
        <Grid 
        container
        direction="row"
        justify="space-evenly"
        alignitems="center"
         className='display'>

        <Button size="large"
        color="secondary"
        onClick={() =>
           this.updateDisplay
           (Math.round((session.reduce(reducer) / session.length) * 100))}
            className='button'>Done</Button>
        <Button size="large"
        color="secondary"
         onClick={() =>
         sessionData.push(this.state.display) & console.log(sessionData)}
          className='button'>Plot Data</Button>
        <Button size="large"
        color="secondary"
         onClick={() =>
         {this.updateDisplay(0); session = []}}
         className='button'>Reset</Button>
         </Grid>
      </React.Fragment>
    )
  }
}

export default Inputs


/* <button onClick={() => session.push('Incorrect')}
className='button'>Incorrect</button>
<button onClick={() => session.push('Prompt')}
className='button'>Prompt</button>
<button onClick={() => session.push('Correct')}
className='button'>Correct</button> */
