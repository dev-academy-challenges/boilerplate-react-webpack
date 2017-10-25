import React from 'react'
import {Link} from 'react-router-dom'

import About from './About'

const isActive = (path, route) => {
	if (path == route) return 'is-active tab'
	else return 'tab'
}

const Footer = (props) => {
	const path = props.location.pathname
	return (

		<div className="hero-foot">
			<nav className="tabs is-boxed is-fullwidth">
				<div className="container">
					<ul>
						<li className={isActive(path, '/')}><Link to="/">Overview</Link></li>
						<li className={isActive(path, '/about')}><Link to='/about'>About</Link></li>
						<li className={isActive(path, '/lunches')}><Link to='/lunches'>Lunch</Link></li>
						<li className={isActive(path, '/people')}><Link to= '/people'>People</Link></li>
						<li className={isActive(path, '/peeps')}><Link to= '/peeps'>Add Yourself</Link></li>
						<li className={isActive(path, '/contact')}><Link to='/contact'>Contact Us</Link></li>
					</ul>
				</div>
			</nav>
		</div>

	)
}

export default Footer
