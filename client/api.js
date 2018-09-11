import request from 'superagent'

const rootUrl = 'http://localhost:3000/'

export function getAllGalleries () {
  return request.get(rootUrl + '/getAllGalleries')
    .then(res => {
      return res.body.getAllGalleries
    })
}
