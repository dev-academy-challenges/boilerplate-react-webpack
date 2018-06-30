exports.seed = (knex, Promise) => {
  return knex('volunteer_times').del()
    .then(function () {
      return knex('volunteer_times').insert([
        {id: 1, volunteer_id: 3, event_time_id: 3008, pencilled: '', confirmed: ''},
        {id: 2, volunteer_id: 8, event_time_id: 3, pencilled: '', confirmed: ''},
        {id: 3, volunteer_id: 22, event_time_id: 3, pencilled: '', confirmed: ''},
        {id: 8, volunteer_id: 22, event_time_id: 3, pencilled: '', confirmed: ''},
        {id: 9, volunteer_id: 22, event_time_id: 3, pencilled: '', confirmed: ''},
        {id: 12, volunteer_id: 22, event_time_id: 3, pencilled: '', confirmed: ''},
        {id: 17, volunteer_id: 22, event_time_id: 3, pencilled: '', confirmed: ''},
        {id: 28, volunteer_id: 22, event_time_id: 3, pencilled: '', confirmed: ''},
        {id: 29, volunteer_id: 22, event_time_id: 3, pencilled: '', confirmed: ''},
        {id: 32, volunteer_id: 22, event_time_id: 3, pencilled: '', confirmed: ''},
        {id: 41, volunteer_id: 22, event_time_id: 3, pencilled: '', confirmed: ''},
        {id: 43, volunteer_id: 22, event_time_id: 3, pencilled: '', confirmed: ''},
        {id: 46, volunteer_id: 22, event_time_id: 3, pencilled: '', confirmed: ''},
        {id: 47, volunteer_id: 22, event_time_id: 3, pencilled: '', confirmed: ''},
        {id: 61, volunteer_id: 22, event_time_id: 3, pencilled: '', confirmed: ''},
        {id: 66, volunteer_id: 22, event_time_id: 3, pencilled: '', confirmed: ''},
        {id: 73, volunteer_id: 22, event_time_id: 3, pencilled: '', confirmed: ''},
        {id: 89, volunteer_id: 22, event_time_id: 3, pencilled: '', confirmed: ''},
        {id: 104, volunteer_id: 22, event_time_id: 3, pencilled: '', confirmed: ''},
        {id: 116, volunteer_id: 22, event_time_id: 3, pencilled: '', confirmed: ''}
      ])
    })
}
