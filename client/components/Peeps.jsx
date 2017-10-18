import React from 'react'
import PeopleList from './PeopleList'

export default class Peeps extends React.Component {
	constructor (props) {
		super (props)
		this.state = {
			peopleComing: ' ',
			people: ['Harold']
		}

		this.addToList = this.addToList.bind(this)
		this.Peeps = this.Peeps.bind(this)
		this.updatePeopleList = this.updatePeopleList.bind(this)
	}


	addToList(e) {
		e.preventDefault()
		this.Peeps(this.state.peopleComing)
	}

	Peeps (person) {
		const {people} = this.state
		people.push(person)
		this.setState({people, peopleComing: ''})
	}
    
	updatePeopleList(e) {
		this.setState({ peopleComing: e.target.value })
	}

	render() {
		return ( 
			<div className='container'>
				<div className='People Going to Lunch'></div>
				<div className='adding-yourself'>

					<form onSubmit={this.addToList}>

						<input name="peopleComing" type='text' onChange={this.updatePeopleList} placeholder='Wanna join?' value={this.state.peopleComing} />
						<br />
						<input type="submit" value="Add new person" />
					</form>
				</div>
       
				<PeopleList people={this.state.people} />
			</div>
		)
	}}