import React from 'react'

const PeopleList = (props) => {
	return (
		<div className="holder">
			{props.people.map((person, i) =>
				<div key={i} className="people">{person.name} is bringing {person.food}</div>
			)}
		</div>

	)
}

export default PeopleList