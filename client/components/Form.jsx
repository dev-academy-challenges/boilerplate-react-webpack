import React from 'react'

export default class Form extends React.Component  {
  constructor(props){
    super(props)
    this.state = {people: []}
    this.submitPerson =this.submitPerson.bind(this)
  }

// updatePersonDetails(e) {
//   let people = this.state.people
//
// }

submitPerson (e) {
  e.preventDefault()
  console.log({e});
}

  render() {
    return (
      <form onSubmit={this.submitPerson}>
        <input name='firstname' placeholder='name' type='text' />
        <input type="submit" />
      </form>
    )
  }
}
