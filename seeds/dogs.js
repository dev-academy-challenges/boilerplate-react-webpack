exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('dogs').del()
    .then(() => {
      // Inserts seed entries
      return knex('dogs').insert([
        {id: 40001, name: 'Toby', breed: 'staffy x', volunteer_id: 3},
        {id: 40002, name: 'Peanut', breed: 'lab', volunteer_id: 8},
        {id: 40003, name: 'Rover', breed: 'pomeranian', volunteer_id: 9},
        {id: 40004, name: 'Billy', breed: 'blue staffy', volunteer_id: 17},
        {id: 40005, name: 'Marlow', breed: 'golden retriever', volunteer_id: 28},
        {id: 40006, name: 'Fido', breed: 'french bulldog', volunteer_id: 61},
        {id: 40007, name: 'Bumbum', breed: 'ridgeback x', volunteer_id: 66},
        {id: 40008, name: 'John', breed: 'griffin', volunteer_id: 89},
        {id: 40009, name: 'Sparky', breed: 'dalmatian', volunteer_id: 116}
      ])
    })
}
