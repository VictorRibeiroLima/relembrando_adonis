'use strict'

const Service = use('App/Services/ProductService')
const StatusCode = use('App/Enums/StatusCode')


class ProductController {
    async create ({ request, response }) {
        const service = new Service()
    
        const data = request.only(['name','description','price','stockAmount','brandId'])
        
        const product = await service.findOrCreate(data)
    
        response.status(StatusCode.CREATED).send(product)
      }
}

module.exports = ProductController
