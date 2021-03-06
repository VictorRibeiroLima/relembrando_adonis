'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Service = use('App/Services/BrandService')
const StatusCode = use('App/Enums/StatusCode')


class BrandController {

     /**
   * Create/save a new Brand.
   * POST users
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async create ({ request, response }) {
    const service = new Service()

    const data = request.only(['name'])
    
    const brand = await service.create(data)

    response.status(StatusCode.CREATED).send(brand)
  }

  /**
   * find all system brands.
   * GET brand
   *
   * @param {object} ctx
   * @param {Response} ctx.response
   */
   async findAll({response}){
    const service = new Service()

    const brands = await service.findAll()

    response.status(StatusCode.OK).send(brands)

  }
}

module.exports = BrandController
