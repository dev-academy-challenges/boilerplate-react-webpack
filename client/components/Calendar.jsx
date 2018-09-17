import React from 'react'
import request from 'superagent'

// import calendarApi from './calendarApi'

class Calendar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      events: []
    }
  }

  componentDidMount = () => {
    this.getEvents()
  }

  getCalendar () {
    const apiKey: 'GOOGLE_API_KEY'
    request
      .get('https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events')
      .then(res => {
        this.setState({
          url: res.body.url
        })
      })
      .catch(err => {
        console.error(err)
      })
  }

  render () {
    return (
      <div className='calendar-api'>
        <h3>Calendar</h3>
        {this.state.url}
      </div>
    )
  }
}

export default Calendar