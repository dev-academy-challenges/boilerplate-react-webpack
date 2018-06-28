exports.seed = (knex, Promise) => {
  return knex('event_times').del()
    .then(() => {
      return knex('event_times').insert([
        {id: 1, date: '2019-03-09', time_slot: '2pm-4pm', event_id: 20181},
        {id: 2, date: '2019-03-08', time_slot: '4pm-6pm', event_id: 20181},
        {id: 3, date: '2019-03-09', time_slot: '10am-12pm', event_id: 20181}
      ])
    })
}
