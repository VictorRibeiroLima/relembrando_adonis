'use strict'

class Brand {
  get rules () {
    return {
      name: 'required'
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

module.exports = Brand
