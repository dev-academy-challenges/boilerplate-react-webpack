import React from 'react'
import { Link, Route } from 'react-router-dom'


import lunches from '../../data/lunches'
import Peeps from './Peeps'
import Lunch from './Lunch'

class Lunches extends React.Component {
	constructor (props) {
		super (props)
		this.state = {
			lunches: lunches,
			activeLunch: lunches[0]
		}
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
								{/* <li>{lunch.description}</li> */}
								{/* <ul>
                                    {lunch.ingredients.map(ingredient => {
                                        return <li key={ingredient.type}>
                                            {ingredient.type}
                                        </li>
                                    })}
                                </ul> */}
							</ul>
						</li>
					})}
				</ul>
				<Route path='/lunches/lunch/:id' component={Lunch}/>
			</div>
		)
	}
}
export default Lunches