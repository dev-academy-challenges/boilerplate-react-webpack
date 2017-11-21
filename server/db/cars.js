const defaultConn = require('./connection')

function getCars (testConn) {
  const db = testConn || defaultConn
  return db('cars')
  .select()
}

function getCar (id, testConn) {
  const db = testConn || defaultConn  
  return db('cars')
    .where('id', id).first()
}

module.exports = {
  getCars,
  getCar
}