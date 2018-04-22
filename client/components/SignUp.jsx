import React from 'react'
import Header from './Header'
import Footer from './Footer'

class SignUp extends React.Component {
    constructor(props) {
        super(props)
    }
    render () {
        return (
        <div>
        <Header />
        <form>
        <div className="row">
          <div className="four columns">
            <label htmlFor="firstName">Your first name</label>
            <input className="u-full-width" type="text" placeholder="First Name" id="firstNameInput" />
          </div>
          <div className="four columns">
            <label htmlFor="lastName">Your last name</label>
            <input className="u-full-width" type="text" placeholder="Last Name" id="lastNameInput" />
          </div>
          <div className="four columns">
            <label htmlFor="emailInput">Your email</label>
            <input className="u-full-width" type="email" placeholder="youremail@here.com" id="emailInput" />
          </div>
          <div className="four columns">
            <label htmlFor="passwordInput">Password</label>
            <input className="u-full-width" type="password" placeholder="Password" id="passwordInput" />
          </div>
          <div className="four columns">
            <label htmlFor="confirmPassword">Confirm password</label>
            <input className="u-full-width" type="password" placeholder="Enter password again" id="passwordConfirm" />
          </div>
        </div>
        <input className="button-primary" type="submit" value="Create profile" />
        </form>
        <Footer />
        </div>
        )
    }
}

export default SignUp
