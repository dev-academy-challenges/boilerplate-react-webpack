import request from 'superagent'

const targetUrl = 'http://localhost:3000/'

export function newTarget (target, callback) {
  request
    .post(targetUrl)
    .send(target)
    .end((err, res) => {
      callback(err)
    })
}

