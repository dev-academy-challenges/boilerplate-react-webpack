exports.seed = (knex, Promise) => {
  return knex('event_times').del()
    .then(() => {
      return knex('event_times').insert([
        {id: 30001, date: '', time_slot: '', event_id: 20181},
        {id: 30002, date: '', time_slot: '', event_id: 20181},
        {id: 30003, date: '', time_slot: '', event_id: 20181},
        {id: 30004, date: '', time_slot: '', event_id: 20181},
        {id: 30005, date: '', time_slot: '', event_id: 20181},
        {id: 30006, date: '', time_slot: '', event_id: 20181},
        {id: 30007, date: '', time_slot: '', event_id: 20181},
        {id: 30008, date: '', time_slot: '', event_id: 20181},
        {id: 30009, date: '', time_slot: '', event_id: 20181}
      ])
    })
}
