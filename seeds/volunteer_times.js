exports.seed = (knex, Promise) => {
  return knex('volunteer_times').del()
    .then(function () {
      return knex('volunteer_times').insert([
        {id: 1, volunteer_id: 22, friend_id: 4, dog_id: 3, event_time_id: 3, pencilled: 'Y', confirmed: 'N'},
        {id: 2, volunteer_id: 22, friend_id: 4, dog_id: 4, event_time_id: 3, pencilled: 'Y', confirmed: 'N'},
        {id: 3, volunteer_id: 22, friend_id: 4, dog_id: 5, event_time_id: 3, pencilled: 'Y', confirmed: 'N'},
        {id: 8, volunteer_id: 22, friend_id: 4, dog_id: 6, event_time_id: 3, pencilled: 'Y', confirmed: 'N'},
        {id: 9, volunteer_id: 22, friend_id: 4, dog_id: 7, event_time_id: 3, pencilled: 'Y', confirmed: 'N'},
        {id: 12, volunteer_id: 22, friend_id: 4, dog_id: 8, event_time_id: 3, pencilled: 'Y', confirmed: 'N'},
        {id: 17, volunteer_id: 22, friend_id: 4, dog_id: 9, event_time_id: 3, pencilled: 'Y', confirmed: 'N'},
        {id: 28, volunteer_id: 22, friend_id: 4, dog_id: 10, event_time_id: 3, pencilled: 'Y', confirmed: 'N'},
        {id: 29, volunteer_id: 22, friend_id: 4, dog_id: 2, event_time_id: 3, pencilled: 'Y', confirmed: 'N'},
        {id: 32, volunteer_id: 22, friend_id: 4, dog_id: 3, event_time_id: 3, pencilled: 'Y', confirmed: 'N'},
        {id: 41, volunteer_id: 22, friend_id: 4, dog_id: 4, event_time_id: 3, pencilled: 'Y', confirmed: 'N'},
        {id: 43, volunteer_id: 22, friend_id: 4, dog_id: 5, event_time_id: 3, pencilled: 'Y', confirmed: 'N'},
        {id: 46, volunteer_id: 22, friend_id: 4, dog_id: 6, event_time_id: 3, pencilled: 'Y', confirmed: 'N'},
        {id: 47, volunteer_id: 22, friend_id: 4, dog_id: 7, event_time_id: 3, pencilled: 'Y', confirmed: 'N'},
        {id: 61, volunteer_id: 22, friend_id: 4, dog_id: 2, event_time_id: 3, pencilled: 'Y', confirmed: 'N'},
        {id: 66, volunteer_id: 22, friend_id: 4, dog_id: 12, event_time_id: 3, pencilled: 'Y', confirmed: 'N'},
        {id: 73, volunteer_id: 22, friend_id: 4, dog_id: 32, event_time_id: 3, pencilled: 'Y', confirmed: 'N'},
        {id: 89, volunteer_id: 22, friend_id: 4, dog_id: 45, event_time_id: 3, pencilled: 'Y', confirmed: 'N'},
        {id: 104, volunteer_id: 22, friend_id: 4, dog_id: 44, event_time_id: 3, pencilled: 'Y', confirmed: 'N'},
        {id: 116, volunteer_id: 22, friend_id: 4, dog_id: 31, event_time_id: 3, pencilled: 'Y', confirmed: 'N'}
      ])
    })
}
