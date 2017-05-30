import test from 'ava'
import request from 'supertest'

import app from '../../server/server'
import setupDb from './setup-db'

setupDb(test, (knex) => app.set('knex', knex))

test('example', t => {
  t.pass()
})
