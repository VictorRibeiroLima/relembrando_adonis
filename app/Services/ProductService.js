const Repository = use('App/Repositorys/ProductRepository')
const AbstractService = use('/Abstracts/AbstractService')

class ProductService extends AbstractService{
    constructor(){
        super(new Repository())
    }
}

module.exports = ProductService