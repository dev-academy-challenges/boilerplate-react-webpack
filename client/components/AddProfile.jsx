import React from 'react'

// import { appendProfiles } from '..api/' 

export default class AddProfiles extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            name: '',
            Age: 0,
            House: '',
            Year: 0,
            Comments:''
        }

        this.handleChange = this.handleChange.bind(this)
        this.addProfiles = this.addProfiles.bind(this)

        // Look up below 
        handleChange (e) {
            this.setState({
            [e.target.name]: e.target.value
           })
        }
//look up below
        addProfiles (e) {
            appendProfiles(this.state, this.props.finishAdd)
        }

        render () {
            return (
                <div className='add-profiles'>
                <form>
                <p>><input placeholder='Name' name='name'
                onChange={this.handleChange}
                value={this.state.name}
                /></p>
                <p><input placeholder='Age' name='age'
                onChange={this.handleChange}
                value={this.state.name}
                /></p>
                <p><input placeholder='House' name='age'
                onchange={this.handleChange}
                value={this.state.name}
                /></p>
                <p><input placeholder='Year' name='year'
                onchange={this.handleChange}
                value={this.state.name}
                /></p>
                <p>input placeholder='Comments' name='comments'
                onChange={this.handleChange}
                value={this.state.name}
                /></p>

                <button type='button' onClick={this.addProfiles}>Add Profiles</button>
                { '' }
                <a href='#' onClick={this.props.finishAdd}>Cancel</a>
                </form>
                </div>
            )
        }

    }
}
