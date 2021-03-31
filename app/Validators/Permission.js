'use strict'

class Permission {
  get rules () {
    return {
      name: 'required',
      description: 'required'
    }
  }

  get messages(){
    return{
      require:(field)=>{
        return `You must provide a ${field}`
      }
    }
  }
}

module.exports = Permission
