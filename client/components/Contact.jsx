import React from 'react'

class Contact extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			Name: ' ',
			Username: '',
			Email: '',
			Subject: '',
			Message: '',
			custcomtact: [{ Name: 'Harold', UserName: 'Hazza', Email: 'Haz@email.com', Subject: 'can I meet Louis?', Message: 'Hey there' }]
		}
	}
	render() {
		return (
			<div>
				<div className="section has-text-centered field">
					<label className="label">Name</label>
					<div className="control">
						<input className="input" type="text" placeholder="Text input"/>
					</div>
				</div>

				<div className="field">
					<label className="label">Username</label>
					<div className="control has-icons-left has-icons-right">
						<input className="input is-success" type="text" placeholder="Text input" value="hey there"/>
						<span className="icon is-small is-left">
							<i className="fa fa-user"></i>
						</span>
						<span className="icon is-small is-right">
							<i className="fa fa-check"></i>
						</span>
					</div>
					<p className="help is-success">This username is available</p>
				</div>

				<div className="field">
					<label className="label">Email</label>
					<div className="control has-icons-left has-icons-right">
						<input className="input is-danger" type="email" placeholder="Email input" value="hello@"/>
						<span className="icon is-small is-left">
							<i className="fa fa-envelope"></i>
						</span>
						<span className="icon is-small is-right">
							<i className="fa fa-warning"></i>
						</span>
					</div>
					<p className="help is-danger">This email is invalid</p>
				</div>

				<div className="field">
					<label className="label">Subject</label>
					<div className="control">
						<div className="select">
							<select>
								<option>Select dropdown</option>
								<option>Lunch</option>
								<option>Can I meet Louis?</option>
								<option>How can I use this site for fundraising?</option>
							</select>
						</div>
					</div>
				</div>

				<div className="field">
					<label className="label">Message</label>
					<div className="control">
						<textarea className="textarea" placeholder="Textarea"></textarea>
					</div>
				</div>
        

				<div className="field is-grouped">
					<div className="control">
						<button className="button is-link">Submit</button>
					</div>
					<div className="control">
						<button className="button is-text">Cancel</button>
					</div>
				</div>
			</div>
		)
	}}

export default Contact
