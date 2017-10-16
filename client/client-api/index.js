import request from 'superagent'

export function getCars() {
  return request.get('v1/find')
  .then(data => {
    const cars = data.body
    return cars.map(car => {
      return Object.assign(
        {},
        car,
        { name: JSON.parse(car.name) }
      )
    })
      .catch(err => {
        throw Error('Cannot GET Posts!')
      })
  })
}


export function getCarByCarId(carId) {
  return request.get(`/v1/find/${carId}/car`)
  .then(data => {
    const returnedCar = data.body
    return returnedCar
  })
  .catch(err => {
    throw Error('Cannot GET Car By Car Id!')
  })
}