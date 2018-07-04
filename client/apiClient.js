import request from 'superagent'

export const getAll = () => {
  return request
    .get('/api/v1/volunteers')
    .then(res => {
      res.json(res.body)
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}
