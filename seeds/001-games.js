
exports.seed = function(knex, Promise) {
  return knex('games')
    .truncate()
    .then(function () {
      return knex('games').insert([
        {title: 'Madden Football', genre: 'Football', releaseYear: 1988},
        {title: 'Halo', genre: 'First-person Shooter', releaseYear: 2001},
        {title: 'Call Of Duty', genre: 'First-person Shooter', releaseYear: 2003},
        {title: 'Fortnite', genre: 'Action-adventure', releaseYear: 2018}
      ]);
    });
};