const Product = use('App/Models/Product')
const AbstractRepository = use('/Abstracts/AbstractRepository')

class ProductRepository extends AbstractRepository {

    constructor(){
        super(Product)
    }
}

module.exports = ProductRepository