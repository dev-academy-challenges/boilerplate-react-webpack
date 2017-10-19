import React from 'react'
// import { Link, Route } from 'react-router-dom'
import lunches from '../../data/lunches'

const Lunch = (props) => {
	const id = Number(props.match.params.id)
	const lunch = lunches.find((lunch) => lunch.id === id)
	return (
		<div>
			<div>
				{lunch.description}<br/>
				<img src={lunch.image}className='classic' alt='Lunch' />
			</div>
			<div className="holder">
				{lunch.ingredients.map((ingredient) => 
					<div key={ingredient} className="ingredients">{ingredient}</div>	
				)}
			</div>
		</div>

	)
}
						
				

export default Lunch