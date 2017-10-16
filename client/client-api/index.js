import request from 'superagent'

export function getCar() {
  return request.get('/api/v1/cars/car')
  .then(result => {
    const car = result.body
    return cars.map(car => {
      return Object.assign(
        {},
        car
      )
    })
    .catch(err => {
      throw Error('Cannot GET Car!')
    })
  })
}

export function getCarData(name) {
  return request.get('api/v1/cars/db')
  .query({car: name})
  .then(res => res.body[0])
}


