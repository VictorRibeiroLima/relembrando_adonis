'use strict'

class Product {
  get rules () {
    return {
      name: 'required|max:80',
      description: 'required|max:250',
      price: 'required|under:1000000|number',
      stockAmount: 'required|number',
      brandId:'required|number'
    }
  }

  get messages()  {
    return {
      required:(field) =>{
        return `You must provide a ${field}`
      },
      max: (field,validation, args) =>{
        return `${field} has a max lenght of ${args[0]}`
      },
      under:(field,validation,args) =>{
        return `${field} must be under ${args[0]}`
      },
      number:(field)=>{
        return `${field} must be a numeric value`
      }
    }
  }
}

module.exports = Product
