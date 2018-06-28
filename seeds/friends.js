exports.seed = (knex, Promise) => {
  return knex('friends').del()
    .then(function () {
      return knex('friends').insert([
        {id: 1, first_name: 'Tupac', last_name: 'Shakur', phone: '021 191 512', email: 'mike@gmail.com', volunteer_id: 1},
        {id: 2, first_name: 'Marshall', last_name: 'Mathers', phone: '021 024 5113', email: 'mike@gmail.com', volunteer_id: 2},
        {id: 3, first_name: 'Christopher', last_name: 'Wallace', phone: '027 034 654', email: 'mike@gmail.com', volunteer_id: 2},
        {id: 4, first_name: 'Andre', last_name: 'Young', phone: '022 334 541', email: 'mike@gmail.com', volunteer_id: 9},
        {id: 5, first_name: 'O/Shea', last_name: 'Jackson', phone: '021 806 798', email: 'mike@gmail.com', volunteer_id: 17},
        {id: 6, first_name: 'Queen', last_name: 'Latifah', phone: '021 676 121', email: 'mike@gmail.com', volunteer_id: 41},
        {id: 7, first_name: 'Shawn', last_name: 'Carter', phone: '022 132 555', email: 'mike@gmail.com', volunteer_id: 46},
        {id: 8, first_name: 'Curtis', last_name: 'Jackson', phone: '021 193 512', email: 'mike@gmail.com', volunteer_id: 73},
        {id: 9, first_name: 'Dwayne', last_name: 'Carter', phone: '021 022 5113', email: 'mike@gmail.com', volunteer_id: 89},
        {id: 10, first_name: 'Lisa', last_name: 'Lopez', phone: '027 054 654', email: 'mike@gmail.com', volunteer_id: 116}
      ])
    })
}
