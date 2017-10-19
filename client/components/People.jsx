import React from 'react'

const People = () => {
	return (

		<div className="tile is-parent">
			<article className="tile is-child notification is-light">
				<p className="title">Our People</p>
				<p className="subtitle">Louis</p>
				<div className="content">
          Louis is a vital member of the team, a vegetarian dog who at the age of 12 years still manages to maintain his puppy like looks.
				</div>
        
				<img src='images/louis.jpg' alt='Louis'/>
        
			</article>
			<article className="tile is-child notification is-info">
				<p className="title">Our People</p>
				<p className="subtitle">Louis</p>
				<div className="content">
					Louis enjoys pats and being feed. He is also happy to sit on your lap while you code. 
				</div>

				<img src='images/LouisSkye.jpg' alt='Louis' />

			</article>
		</div>

	)
}

export default People
