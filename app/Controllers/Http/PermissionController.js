'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Repository = use('App/Repositorys/PermissionRepository')
const StatusCode = use('App/Enums/StatusCode')

class PermissionController {

    /**
   * Create/save a new permission.
   * POST users
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async create ({ request, response }) {
    const repository = new Repository()

    const data = request.only(['name','description'])
    
    const permission = await repository.create(data)

    response.status(StatusCode.CREATED).send(permission)
  }

}

module.exports = PermissionController
