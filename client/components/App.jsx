import React from 'react'
import Inputs from './Inputs'
import ChartComp from './ChartComp'
import { Route } from 'react-router-dom'


const App = () => {
  return (
    <React.Fragment>
      <h1 className="header">Discrete Trial Data</h1>
      <div className="content">
        <Route path = '/'component={ChartComp} />
        <Route path ='/' component={Inputs} />
      </div>
    </React.Fragment>
  )
}

export default App
