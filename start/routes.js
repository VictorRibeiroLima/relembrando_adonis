'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(()=>{
  Route.post('','UserController.create').validator('User')
  Route.post('login','UserController.login')
  Route.put('','UserController.update').middleware('auth')
}).prefix('user')

Route.group(()=>{
  Route.post('','PermissionController.create').validator('Permission').middleware('permission:1')
  Route.get('','PermissionController.findAll')
}).prefix('permission').middleware('auth')

Route.group(()=>{
  Route.post('','BrandController.create').validator('Brand').middleware('permission:5')
  Route.get('','BrandController.findAll')
}).prefix('brand').middleware('auth')

Route.group(()=>{
  Route.post('','ProductController.create').validator('Product').middleware('permission:2')
}).prefix('product').middleware('auth')