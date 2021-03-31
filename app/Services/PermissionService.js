const Repository = use('App/Repositorys/PermissionRepository')
const AbstractService = use('/Abstracts/AbstractService')

class PermissionService extends AbstractService {
    constructor(){
        super(new Repository())
    }
    
    async create(permission){
        permission.name = permission.name.toUpperCase();
        permission.description = permission.description.toUpperCase();
        return this.repository.create(permission)
    }

    async hasPermission(user,permissionId){
        return this.repository.hasPermission(user,permissionId)
    }
}

module.exports = PermissionService