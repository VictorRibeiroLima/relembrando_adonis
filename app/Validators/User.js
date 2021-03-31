'use strict'

class User {
  get rules () {
    return {
      email:'required|email|unique:users',
      password: 'required',
      username: 'required|unique:users'
    }
  }
  
  get messages()  {
    return {
      required:(field) =>{
        return `You must provide a ${field}`
      },
      unique: (field) =>{
        return `This ${field} is already registered.`
      },
      email:(field) =>{
        return `${field} must be a valid email`
      }
    }
  }
}

module.exports = User
