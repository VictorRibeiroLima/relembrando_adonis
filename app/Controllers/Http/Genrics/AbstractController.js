
const StatusCode = use('App/Enums/StatusCode')

class AbstractController {
    constructor(){
        if(this === AbstractController){
            throw new TypeError('Can not construct abstract class.')
        }
        this.StatusCode = StatusCode
    }
}
module.exports = AbstractController
