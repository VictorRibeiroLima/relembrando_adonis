const Brand = use('App/Models/Brand')
const AbstractRepository = use('/Abstracts/AbstractRepository')

class BrandRepository extends AbstractRepository {
    constructor(){
        super(Brand)
    }
}

module.exports = BrandRepository