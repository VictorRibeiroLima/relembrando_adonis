class AbstractService {
    constructor (repository){
        if(this === AbstractService){
            throw new TypeError('Can not construct abstract class.')
        }
        this.repository = repository
    }

    async create(data){
        return this.repository.create(data)
    }

    async findById(id){
        return this.repository.findById(id)
    }

    async findOrFailById(id){
        return this.repository.findOrFailById(id)
    }

    async findAll(){
        return this.repository.findAll()
    }

    async delete(id){
        return this.repository.delete(id)
    }
}

module.exports = AbstractService