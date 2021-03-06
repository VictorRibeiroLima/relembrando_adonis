'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Brand extends Model {
    static get Serializer () {
        return use('App/Models/Serializers/JsonSerializer')
    }

    products(){
        return this.hasMany('App/Models/Products')
    }
}

module.exports = Brand
