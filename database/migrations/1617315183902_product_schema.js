'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments()
      table.string('name', 80).notNullable().index()
      table.string('description', 250).notNullable()
      table.float('price',6,2).notNullable().unsigned()
      table.integer('stock_amount').notNullable().unsigned()
      table.integer('brand_id').references('id').inTable('brands').unsigned()
      table.timestamps()
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductSchema
