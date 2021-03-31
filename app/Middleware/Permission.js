'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Service = use('App/Services/PermissionService')
const StatusCode = use('App/Enums/StatusCode')

class Permission {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ auth,response }, next, properties) {
    const service = new Service()
    const user = await auth.getUser()

    if(await service.hasPermission(user,properties[0])){
      await next()
    }else{
      response.status(StatusCode.UNAUTHORIZED).send("you don't have permission to performe this action")
    }
    
  }
}

module.exports = Permission
