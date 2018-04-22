import React from 'react'
import SignUp from './SignUp'
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <div className="login">
            <form>
                    <div className="row">
                      <div className="four columns">
                        <label htmlFor="emailInput">Your email</label>
                        <input className="u-full-width" type="email" placeholder="youremail@here.com" id="emailInput" />
                      </div>
                      <div className="four columns">
                        <label htmlFor="passwordInput">Password</label>
                        <input className="u-full-width" type="password" placeholder="Password" id="passwordInput" />
                      </div>
                    </div>
                    <input className="button-primary" type="submit" value="Login" />
                    <Link to={`/usersignup`}>
                     <input className="button-primary" type="submit" value="Sign up" />
                    </ Link>
            </form>
                  {/* <!-- Note: The class .u-full-width is just a utility class shorthand for width: 100% --> */}
    </div>
  )
}

export default Login
