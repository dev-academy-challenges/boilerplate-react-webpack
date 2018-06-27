exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('dogs').del()
    .then(() => {
      // Inserts seed entries
      return knex('dogs').insert([
        {id: 1, dog_name: 'Toby', dog_breed: 'staffy x'},
        {id: 2, dog_name: 'Peanut', dog_breed: 'lab'},
        {id: 3, dog_name: 'Rover', dog_breed: 'pomeranian'}
      ])
    })
}
