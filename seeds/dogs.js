exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('dogs').del()
    .then(() => {
      // Inserts seed entries
      return knex('dogs').insert([
        {id: 1, name: 'Toby', breed: 'staffy x', owner_id: 3},
        {id: 2, name: 'Peanut', breed: 'lab', owner_id: 8},
        {id: 3, name: 'Rover', breed: 'pomeranian', owner_id: 9}
      ])
    })
}
