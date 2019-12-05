'use strict'

const Database = use('Database')

const Route = use('Route')

Route.post('/users', 'UserController.create')
Route.post('/sessions', 'SessionController.create')
Route.resource('properties', 'PropertyController')
  .apiOnly()
  .middleware('auth')
Route.post('properties/:id/images', 'ImageController.store')
  .middleware('auth')
Route.get('images/:path', 'ImageController.show')
Route.get('/proc', async () => {
  return await Database.raw('Exec trocanome') 
})