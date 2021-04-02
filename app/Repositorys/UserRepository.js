const User = use('App/Models/User')
const AbstractRepository = use('/Abstracts/AbstractRepository')

class UserRepository extends AbstractRepository {
    constructor(){
        super(User)
    }

    async update({userId,email,password,permissions}){
        const user = await super.findOrFailById(userId)
        if(permissions && permissions.length > 0){
            await user.permissions().attach(permissions);
            await user.permissions().fetch();
        }
        return user
    }
}

module.exports = UserRepository