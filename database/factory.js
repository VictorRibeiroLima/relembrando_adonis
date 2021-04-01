'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Hash = use('Hash')


Factory.blueprint('App/Models/User', async () => {
    return {
      email:'victorlima.12@hotmail.com',
      username:'zaiamlata',
      password: await Hash.make('1234')
    }
  })

  Factory.blueprint('App/Models/Permission', async () => {
    return {
        name: 'CREATE PERMISSION',
        description: 'A PERMISSION THAT ALLOW THE USER TO CREATE PERMISSIONS'
    }
  })

// Factory.blueprint('App/Models/User', (faker) => {
//   return {
//     username: faker.username()
//   }
// })
