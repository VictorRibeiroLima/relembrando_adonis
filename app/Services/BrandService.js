const Repository = use('App/Repositorys/BrandRepository')
const AbstractService = use('/Abstracts/AbstractService')
const ProductService = use('App/Services/ProductService')

class BrandService extends AbstractService {
    constructor() {
        super(new Repository())
    }
}

module.exports = BrandService