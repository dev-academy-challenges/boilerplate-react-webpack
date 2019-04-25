import request from 'superagent'

const profilesUrl = 'http://localhost:3000/api/v1/profiles/'

export function getProfiles (callback) {
  request
    .get(profilesUrl)
    .end((err, res) => {
      callback(err, res.body)
    })
}

export function appendProfiles (profiles, callback) {
  request
    .post(profilesUrl)
    .send(profiles)
    .end((err, res) => {
      callback(err)
    })
}

export function deleteProfiles (profiles, callback) {
  request.delete(`${profilesUrl}/${profiles.id}`)
    .end((err) => {
      callback(err)
    })
}

export function updateProfiles (profiles, callback) {
  request.put(`${profilesUrl}/${profiles.id}`)
    .send(profiles)
    .end((err) => {
      callback(err)
    })
}

