const Repository = use('App/Repositorys/UserRepository')
const AbstractService = use('/Abstracts/AbstractService')

class UserService extends AbstractService {
    constructor(){
        super(new Repository())
    }
    
    async havePermission(userId,permissionId){
        const user = await this.repository.havePermission(userId,permissionId)
        return user.rows.length > 0
    }
}

module.exports = UserService