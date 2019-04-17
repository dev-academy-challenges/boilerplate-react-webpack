import React from 'react'
import Inputs from './Inputs'
import LineChart from './LineChart'
import { Route } from 'react-router-dom'

// //css imports
import Grid from '@material-ui/core/Grid'
// import 'typeface-roboto'

const App = () => {
  return (
    <React.Fragment>
      <Grid
        container
        direction="row"
        justify="center"
        alignitems="center">
        <h1 className="header">Discrete Trial Data</h1>
      </Grid>
      <div className="content">
        <Route path = '/'component={LineChart} />
        <Route path ='/' component={Inputs} />
      </div>
    </React.Fragment>
  )
}

export default App
