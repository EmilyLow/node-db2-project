// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      // ?Some place you had to do file NOT from relative location. Here?
      filename: './data/car_database.db3'
    },
    useNullAsDefault: true,

    //!!Why wasn't this in lecture?
    //!! Do I need to create this file?
    migrations: {
      //? This didnt' make a subfolder it did some other weird thing. SHould I have made the folder first?
      directory: './data/migrations'
    }
  },

//Not sure I should actually delete all of these
  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }

};
