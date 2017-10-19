import React from 'react'
import PeopleList from './PeopleList'

export default class Peeps extends React.Component {
	constructor (props) {
		super (props)
		this.state = {
			peopleComing: ' ',
			food: '',
			people: [{name: 'Harold', food: 'Cake'}]
		}

		this.addToList = this.addToList.bind(this)
		this.Peeps = this.Peeps.bind(this)
		this.updatePeopleList = this.updatePeopleList.bind(this)
		this.updateFood = this.updateFood.bind(this)
	}


	addToList(e) {
		e.preventDefault()
		this.Peeps({name: this.state.peopleComing, food: this.state.food})
	}

	Peeps (person) {
		const {people} = this.state
		people.push(person)
		this.setState({people, peopleComing: '', food: ''})
	}
    
	updatePeopleList(e) {
		this.setState({ peopleComing: e.target.value })
	}
	updateFood(e) {
		this.setState({food: e.target.value})
	}


	render() {
		return ( 
			<div className='field'>
				<label class="label">Name</label><label class="label">      Food</label>
				<div class="control">

					<form onSubmit={this.addToList}>

						<input name="peopleComing" type='text' onChange={this.updatePeopleList} placeholder='Wanna join?'value={this.state.peopleComing} />


						<input name="food" type='text' onChange={this.updateFood} placeholder={'Watcha Bringin\'?'} value={this.state.food} />
						<br />
						<input type="submit" value="Add new person" />
					</form>
				</div>
       
				<PeopleList people={this.state.people} />
			</div>
		)
	}}