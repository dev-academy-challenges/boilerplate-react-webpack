exports.seed = (knex, Promise) => {
  return knex('volunteer_times').del()
    .then(function () {
      return knex('volunteer_times').insert([
        {id: 1, volunteer_id: 3, event_time_id: 3008},
        {id: 2, volunteer_id: 8, event_time_id: 3008},
        {id: 3, volunteer_id: 22, event_time_id: 3008},
        {id: 8, volunteer_id: 22, event_time_id: 3008},
        {id: 9, volunteer_id: 22, event_time_id: 3008},
        {id: 12, volunteer_id: 22, event_time_id: 3008},
        {id: 17, volunteer_id: 22, event_time_id: 3008},
        {id: 28, volunteer_id: 22, event_time_id: 3008},
        {id: 29, volunteer_id: 22, event_time_id: 3008},
        {id: 32, volunteer_id: 22, event_time_id: 3008},
        {id: 41, volunteer_id: 22, event_time_id: 3008},
        {id: 43, volunteer_id: 22, event_time_id: 3008},
        {id: 46, volunteer_id: 22, event_time_id: 3008},
        {id: 47, volunteer_id: 22, event_time_id: 3008},
        {id: 61, volunteer_id: 22, event_time_id: 3008},
        {id: 66, volunteer_id: 22, event_time_id: 3008},
        {id: 73, volunteer_id: 22, event_time_id: 3008},
        {id: 89, volunteer_id: 22, event_time_id: 3008},
        {id: 104, volunteer_id: 22, event_time_id: 3008},
        {id: 116, volunteer_id: 22, event_time_id: 3008}
      ])
    })
}
