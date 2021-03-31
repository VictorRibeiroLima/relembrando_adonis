'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Repository = use('App/Repositorys/UserRepository')
const StatusCode = use('App/Enums/StatusCode')

/**
 * Resourceful controller for interacting with users
 */

class UserController {

  /**
   * Create/save a new user.
   * POST users
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async create ({ request, response }) {
    const repository = new Repository()

    const data = request.only(['username','email','password'])
    
    const user = await repository.create(data)

    response.status(StatusCode.CREATED).send(user)
  }

  /**
   * Generate a new JWT tokem.
   * POST
   * 
   * @param {Object} ctx
   * @param {Request} ctx.request
   * @param {Auth} ctx.auth
   */
  async login({request,auth}){
    const {email,password} = request.all()

    const token = auth.attempt(email,password)

    return token

  }

  /**
   * Update user details.
   * PUT or PATCH users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response,auth }) {

    const repository = new Repository()

    const data = request.only(['username','email','password','permissions'])
    
    data.userId = (await auth.getUser()).id

    const user = await repository.update(data)

    response.status(StatusCode.ACCEPTED).send(user)
  }

  /**
   * Delete a user with id.
   * DELETE users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = UserController
