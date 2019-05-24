const env = require('./test-environment')
const db = require('../../../server/DB/users')

let testDb = null

beforeAll(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

test('getUserById returns a user given their id', () => {
  return db.getUserById(1, testDb)
    .then(user => {
      expect(user.username).toBe('')
    })
    .catch(err => expect(err).toBeNull())
})

test('createUser creates a new user', () => {
  const username = 'iamnew'
  const validateNewUser = newIds => {
    const id = newIds[0]
    return db.getUserById(id, testDb)
      .then(user => {
        expect(user.username).toBe(username)
      })
  }
  return db.createUser(username, '', testDb)
    .then(validateNewUser)
    .catch(err => expect(err).toBeNull)
})
