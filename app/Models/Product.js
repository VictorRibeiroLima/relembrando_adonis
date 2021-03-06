'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {
    static get Serializer () {
        return use('App/Models/Serializers/JsonSerializer')
    }

    brand(){
        return this.belongsTo('App/Model/Brand')
    }
}

module.exports = Product
