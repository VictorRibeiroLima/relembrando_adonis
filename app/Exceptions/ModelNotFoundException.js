'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')
const StatusCode = use('App/Enums/StatusCode')


class ModelNotFoundException extends LogicalException {
  constructor(message){
    super(message,StatusCode.NOT_FOUND)
  }

  /**
   * Handle this exception by itself
   */
  handle (exception,{response}) {
    const error = {
      message: exception.message,
      code: exception.status
    }
    response.status(exception.status).send(error)
  }
}

module.exports = ModelNotFoundException
