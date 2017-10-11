import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Home from './Home.jsx'
import Find from './Find.jsx'
import Contact from './Contact.jsx'
import About from './About.jsx'

class App extends React.Component {
  
  render () {
    return (
      <Router>
        <div className='App'>
          <h1>SK imports & exporting</h1>
          <div className='container'>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/Find'>Find a Car</Link></li>
              <li><Link to='/Contact'>Contact Us</Link></li>
              <li><Link to='About'>About Us</Link></li>
            </ul>

            <hr/>

            <Route exact path='/' component={Home} />
            <Route path='/Find' component={Find} />
            <Route path='/Contact' component={Contact} />
            <Route path='/About' component={About} />
          </div>
          </div>
      </Router>
    )
  }
}

export default App

// import React from 'react'
// import {HashRouter as Router, Route, Link} from 'react-router-dom'

// import Home from './Home.jsx'

// const App = () => {
//   return (
//     <Router>
//     <div className='App'>
//     <h1>SK imports & exporting</h1>
//     <div className='container'>
//     <Route path='/' component={Home} />
//     </div>
//     </div>
//     </Router>
//   )
// }

// export default App