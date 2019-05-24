exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, userName: 'ihaka' },
        { id: 2, userName: 'paul' },
        { id: 3, userName: 'brad' }
      ])
    })
}
