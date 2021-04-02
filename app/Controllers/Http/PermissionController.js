'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Service = use('App/Services/PermissionService')
const StatusCode = use('App/Enums/StatusCode')

class PermissionController {

    /**
   * Create/save a new permission.
   * POST permission
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async create ({ request, response }) {
    const service = new Service()

    const data = request.only(['name','description'])
    
    const permission = await service.create(data)

    response.status(StatusCode.CREATED).send(permission)
  }

   /**
   * find all system permissions.
   * GET permission
   *
   * @param {object} ctx
   * @param {Response} ctx.response
   */
  async findAll({response}){
    const service = new Service()

    const permissions = await service.findAll()

    response.status(StatusCode.OK).send(permissions)

  }

}

module.exports = PermissionController
