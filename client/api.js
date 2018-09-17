import request from 'superagent'

const calendarApi = 'https://www.googleapis.com/calendar/v3'

export function calendarApi () {
  return request
    .get(calendarApi)
    .then(res => {
      return res.body
    })
    .catch(err => {
      console.log(err.message)
    })
}