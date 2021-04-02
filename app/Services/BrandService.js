const Repository = use('App/Repositorys/BrandRepository')
const AbstractService = use('/Abstracts/AbstractService')

class BrandService extends AbstractService {
    constructor() {
        super(new Repository())
    }
}

module.exports = BrandService