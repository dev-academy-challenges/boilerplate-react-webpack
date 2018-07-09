exports.seed = (knex, Promise) => {
  return knex('volunteers').del()
    .then(function () {
      return knex('volunteers').insert([
        {id: 1, date_added: '', email: 'mike@icloud.com', password: 'dog', first_name: 'Mike', last_name: 'O\'Neil', phone: '021 191 512', dob: '1989-12-17', gender: 'M'},
        {id: 2, date_added: '', email: 'pe@icloud.com', password: 'dog', first_name: 'Renate', last_name: 'De Sully', phone: '021 024 5113', dob: '2001-12-31', gender: 'F'},
        {id: 3, date_added: '', email: 'lil@icloud.com', password: 'dog', first_name: 'Fiona', last_name: 'Ward', phone: '027 034 654', dob: '1989-06-22', gender: 'F'},
        {id: 8, date_added: '', email: 'e@icloud.com', password: 'dog', first_name: 'Lisa', last_name: 'Jones', phone: '022 334 541', dob: '1989-06-26', gender: 'F'},
        {id: 9, date_added: '', email: 'm@icloud.com', password: 'dog', first_name: 'Kevin', last_name: 'Peters', phone: '021 806 798', dob: '1989-09-10', gender: 'M'},
        {id: 12, date_added: '', email: 'nike@icloud.com', password: 'dog', first_name: 'Emily', last_name: 'Burrowes', phone: '021 676 121', dob: '1989-10-18', gender: 'F'},
        {id: 17, date_added: '', email: 'pop@icloud.com', password: 'dog', first_name: 'Cornelia', last_name: 'Flynn', phone: '022 132 555', dob: '1989-04-28', gender: 'F'},
        {id: 28, date_added: '', email: 'kol@icloud.com', password: 'dog', first_name: 'Don', last_name: 'Chen', phone: '021 193 512', dob: '1995-09-03', gender: 'M'},
        {id: 29, date_added: '', email: 'bob@icloud.com', password: 'dog', first_name: 'Sam', last_name: 'De Renzy', phone: '021 022 5113', dob: '1979-12-11', gender: 'NA'},
        {id: 32, date_added: '', email: 'gog@icloud.com', password: 'dog', first_name: 'Indigo', last_name: 'Graham', phone: '027 054 654', dob: '2014-02-07', gender: 'F'},
        {id: 41, date_added: '', email: 'xxx@icloud.com', password: 'dog', first_name: 'Bron', last_name: 'Cotter', phone: '022 334 521', dob: '2008-12-18', gender: 'F'},
        {id: 43, date_added: '', email: 'lol@icloud.com', password: 'dog', first_name: 'Matt', last_name: 'Feng', phone: '021 806 738', dob: '1989-12-21', gender: 'M'},
        {id: 46, date_added: '', email: 'ttt@icloud.com', password: 'dog', first_name: 'Mike', last_name: 'Mcintosh', phone: '021 646 121', dob: '1976-12-07', gender: 'M'},
        {id: 47, date_added: '', email: 'wer@icloud.com', password: 'dog', first_name: 'Ferne', last_name: 'Staub', phone: '022 132 655', dob: '1999-12-30', gender: 'F'},
        {id: 61, date_added: '', email: 'tree@icloud.com', password: 'dog', first_name: 'Rachael', last_name: 'Mills', phone: '021 195 512', dob: '1989-07-13', gender: 'F'},
        {id: 66, date_added: '', email: 'were@icloud.com', password: 'dog', first_name: 'Jamie', last_name: 'Moon', phone: '021 024 5213', dob: '1989-05-29', gender: 'M'},
        {id: 73, date_added: '', email: 'mum@icloud.com', password: 'dog', first_name: 'Saskia', last_name: 'Barrington', phone: '022 034 654', dob: '1966-10-20', gender: 'F'},
        {id: 89, date_added: '', email: 'nim@icloud.com', password: 'dog', first_name: 'Caitlyn', last_name: 'Jones-Ward', phone: '022 834 541', dob: '1985-14-01', gender: 'F'},
        {id: 104, date_added: '', email: 'gug@icloud.com', password: 'dog', first_name: 'Shane', last_name: 'Dharan', phone: '021 806 799', dob: '1989-11-12', gender: 'M'},
        {id: 116, date_added: '', email: 'high@icloud.com', password: 'dog', first_name: 'Anthony', last_name: 'Vuleta', phone: '021 676 421', dob: '1988-01-17', gender: 'M'}
      ])
    })
}
