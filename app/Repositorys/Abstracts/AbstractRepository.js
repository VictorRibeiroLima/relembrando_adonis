class AbstractRepository {
    constructor (model){
        if(this === AbstractRepository){
            throw new TypeError('Can not construct abstract class.')
        }
        this.model = model
    }

    async create(data){
        return this.model.create(data)
    }

    async findById(id){
        return this.model.find(id)
    }

    async findOrFailById(id){
        return this.model.findOrFail(id)
    }

    async findAll(){
        return this.model.all()
    }

    async findOrCreate(searchParams,data){
        return this.model.findOrCreate(searchParams,data)
    }

    async delete(id){
        const data = await this.findOrFailById(id)
        return this.data.delete()
    }
}

module.exports = AbstractRepository