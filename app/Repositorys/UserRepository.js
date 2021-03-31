const User = use('App/Models/User')

class UserRepository {
    async create(user){
        return User.create(user)
    }

    async update({userId,email,password,permissions}){
        const user = await User.findOrFail(userId)
        if(permissions && permissions.length > 0){
            await user.permissions().attach(permissions);
            await user.permissions().fetch();
        }
        return user
    }
}

module.exports = UserRepository