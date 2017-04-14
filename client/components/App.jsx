import React from 'react'
import Beer from './Beer.jsx'
import Congrats from './Congrats.jsx'
import beerInfo from '../../data/beers.json'

const App = () => (
    <div>
      <h1>Let us explore our exclusive beer menu</h1>
      <Beer info={beerInfo.beers} />
      {beerInfo.beers.length > 10 ? <Congrats /> : null}
    </div>
  )

export default App
