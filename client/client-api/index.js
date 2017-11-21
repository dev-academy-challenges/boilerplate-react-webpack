import request from 'superagent'

export function getCars() {
  return request.get('/api/v1/cars')
  .then(result => {
    const cars = result.body
    return cars
    })
      .catch(err => {
        throw Error('Cannot GET Cars!')
      })
}
