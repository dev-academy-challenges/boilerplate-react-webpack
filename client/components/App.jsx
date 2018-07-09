import React from 'react'
import {Header} from './Header'
import {Main} from './Main'
import {Footer} from './Footer'
import {Banner} from './Banner'

const App = () => {
  return (
    <div className='container-fluid'>
      <Header />
      <Banner />
      <Main />
      <Footer />
    </div>
  )
}

export default App
