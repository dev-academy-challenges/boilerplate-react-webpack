exports.seed = function (knex, Promise) {
  return knex('volunteers').del()
    .then(function () {
      return Promise.all([
        knex('volunteers').insert({id: 1, First_name: 'Mike', Last_name: 'O\'Neil', Phone: '021 191 512', email: 'mike@icloud.com', DOB: 1989-12-17, gender: 'M'}),
        knex('volunteers').insert({id: 2, First_name: 'Renate', Last_name: 'De Sully', Phone: '021 024 5113', email: 'mike@icloud.com', DOB: 1989-12-17, gender: 'F'}),
        knex('volunteers').insert({id: 3, First_name: 'Fiona', Last_name: 'Ward', Phone: '027 034 654', email: 'mike@icloud.com', DOB: 1989-12-17, gender: 'F'}),
        knex('volunteers').insert({id: 4, First_name: 'Lisa', Last_name: 'Jones', Phone: '022 334 541', email: 'mike@icloud.com', DOB: 1989-12-17, gender: 'F'}),
        knex('volunteers').insert({id: 5, First_name: 'Kevin', Last_name: 'Peters', Phone: '021 806 798', email: 'mike@icloud.com', DOB: 1989-12-17, gender: 'M'}),
        knex('volunteers').insert({id: 6, First_name: 'Emily', Last_name: 'Burrowes', Phone: '021 676 121', email: 'mike@icloud.com', DOB: 1989-12-17, gender: 'F'}),
        knex('volunteers').insert({id: 7, First_name: 'Cornelia', Last_name: 'Flynn', Phone: '022 132 555', email: 'mike@icloud.com', DOB: 1989-12-17, gender: 'F'}),
        knex('volunteers').insert({id: 1, First_name: 'Don', Last_name: 'Chen', Phone: '021 193 512', email: 'mike@icloud.com', DOB: 1989-12-17, gender: 'M'}),
        knex('volunteers').insert({id: 2, First_name: 'Sam', Last_name: 'De Renzy', Phone: '021 022 5113', email: 'mike@icloud.com', DOB: 1989-12-17, gender: 'NA'}),
        knex('volunteers').insert({id: 3, First_name: 'Indigo', Last_name: 'Graham', Phone: '027 054 654', email: 'mike@icloud.com', DOB: 1989-12-17, gender: 'F'}),
        knex('volunteers').insert({id: 4, First_name: 'Bron', Last_name: 'Cotter', Phone: '022 334 521', email: 'mike@icloud.com', DOB: 1989-12-17, gender: 'F'}),
        knex('volunteers').insert({id: 5, First_name: 'Matt', Last_name: 'Feng', Phone: '021 806 738', email: 'mike@icloud.com', DOB: 1989-12-17, gender: 'M'}),
        knex('volunteers').insert({id: 6, First_name: 'Mike', Last_name: 'Mcintosh', Phone: '021 646 121', email: 'mike@icloud.com', DOB: 1989-12-17, gender: 'M'}),
        knex('volunteers').insert({id: 7, First_name: 'Ferne', Last_name: 'Staub', Phone: '022 132 655', email: 'mike@icloud.com', DOB: 1989-12-17, gender: 'F'}),
        knex('volunteers').insert({id: 1, First_name: 'Rachael', Last_name: 'Mills', Phone: '021 195 512', email: 'mike@icloud.com', DOB: 1989-12-17, gender: 'F'}),
        knex('volunteers').insert({id: 2, First_name: 'Jamie', Last_name: 'Moon', Phone: '021 024 5213', email: 'mike@icloud.com', DOB: 1989-12-17, gender: 'M'}),
        knex('volunteers').insert({id: 3, First_name: 'Saskia', Last_name: 'Barrington', Phone: '022 034 654', email: 'mike@icloud.com', DOB: 1989-12-17, gender: 'F'}),
        knex('volunteers').insert({id: 4, First_name: 'Caitlyn', Last_name: 'Jones-Ward', Phone: '022 834 541', email: 'mike@icloud.com', DOB: 1989-12-17, gender: 'F'}),
        knex('volunteers').insert({id: 5, First_name: 'Shane', Last_name: 'Dharan', Phone: '021 806 799', email: 'mike@icloud.com', DOB: 1989-12-17, gender: 'M'}),
        knex('volunteers').insert({id: 6, First_name: 'Anthony', Last_name: 'Vuleta', Phone: '021 676 421', email: 'mike@icloud.com', DOB: 1989-12-17, gender: 'M'})
      ])
    })
}