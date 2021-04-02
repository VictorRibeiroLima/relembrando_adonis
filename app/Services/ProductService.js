const Repository = use('App/Repositorys/ProductRepository')
const AbstractService = use('/Abstracts/AbstractService')
const BrandService = use('App/Repositorys/BrandRepository')

class ProductService extends AbstractService{
    constructor(){
        super(new Repository())
    }

    async findOrCreate(data){
        const brandService = new BrandService()
        await brandService.findOrFailById(data.brandId)
        const searchParams = {name:data.name, brandId:data.brandId}
        return this.repository.findOrCreate(searchParams,data)
    }
}

module.exports = ProductService