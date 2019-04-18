import React from 'react'
import Inputs from './Inputs'
import LineChart from './LineChart'
import { Route } from 'react-router-dom'

// //css imports
import Grid from '@material-ui/core/Grid'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'
import purple from '@material-ui/core/colors/purple'
import Typography from '@material-ui/core/Typography'


const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: purple
  },
  status: {
    danger: 'orange'
  },
  typography: {
    fontFamily: 'Roboto',
    fontSize: 40
  }
})

const App = () => {
  return (
    <React.Fragment>
      <MuiThemeProvider theme={theme}>
        <Grid
          container
          direction="row"
          justify="center"
          alignitems="center">
          <Typography component="h5" variant="h5" gutterBottom>
        Discrete Trial Data
          </Typography>

        </Grid>
        <div className="content">
          <Route path = '/'component={LineChart} />
          <Route path ='/' component={Inputs} />
        </div>
      </MuiThemeProvider>
    </React.Fragment>
  )
}

export default App
