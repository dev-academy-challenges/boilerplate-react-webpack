import React from 'react'
import { Link } from 'react-router-dom'


import lunches from '../../data/lunches'
import Peeps from './Peeps'
// import Lunch from './Lunch'

class Lunches extends React.Component {
	constructor (props) {
		super (props)
		this.state = {
			lunches: lunches,
			activeLunch: lunches[0]
		}
		this.handleLunchClick = this.handleLunchClick.bind(this)
	}

	handleLunchClick (lunch) {
		this.setState({
			activeLunch: lunch
		})
	}

	render() {
		return (
			<div>
				<h1>Take Your Pick...</h1>
				<ul>
					{this.state.lunches.map(lunch => {
						return <li key={lunch.id}>
							<ul>
								<li><Link to={`/lunches/lunch/${lunch.id}`}>{lunch.name}</Link></li>
							</ul>
						</li>
					})}
				</ul>
			</div>
		)
	}
}
export default Lunches