import React from 'react'
// import { Link, Route } from 'react-router-dom'
import data from '../../data/lunches'

const Lunch = () => {
	// const id = props.match.params.id

	return (
		<div className="holder">
			{data.map((lunch) => 
				<div key={lunch.id} className="lunches">{lunch.description}{lunch.ingredients}</div>	
			)}
		</div>

	)
}
						
				

export default Lunch