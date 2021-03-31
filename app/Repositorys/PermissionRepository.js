const Permission = use('App/Models/Permission')

class PermissionRepository{
    async hasPermission(user,permissionId){
        const permission = await user.permissions().wherePivot('permission_id',permissionId).fetch()
        return permission.rows.length > 0
    }
}

module.exports = PermissionRepository