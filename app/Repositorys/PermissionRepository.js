const Permission = use('App/Models/Permission')

class PermissionRepository{
    async create(permission){
        permission.name = permission.name.toUpperCase();
        permission.description = permission.description.toUpperCase();
        return Permission.create(permission)
    }
}

module.exports = PermissionRepository