import request from 'superagent'

export function getGreeting() {
  return request.get('/greeting')
                .then(res => res.body.greeting)
}