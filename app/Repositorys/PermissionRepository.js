const Permission = use('App/Models/Permission')
const AbstractRepository = use('/Abstracts/AbstractRepository')

class PermissionRepository extends AbstractRepository{
    constructor(){
        super(Permission)
    }

    async hasPermission(user,permissionId){
        const permission = await user.permissions().wherePivot('permission_id',permissionId).fetch()
        return permission.rows.length > 0
    }
}

module.exports = PermissionRepository