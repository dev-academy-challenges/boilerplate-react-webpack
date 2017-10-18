import React from 'react'

const PeopleList = (props) => {
	return (
		<div className="holder">
			{props.people.map((person, i) =>
				<div key={i} className="people">{person}</div>
			)}
		</div>

	)
}

export default PeopleList