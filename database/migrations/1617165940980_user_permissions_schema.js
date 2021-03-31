'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserPermissionsSchema extends Schema {
  up () {
    this.create('user_permissions', (table) => {
      table.integer('user_id').references('id').inTable('users').onDelete('CASCADE').unsigned()
      table.integer('permission_id').references('id').inTable('permissions').onDelete('CASCADE').unsigned()
    })
  }

  down () {
    this.drop('user_permissions')
  }
}

module.exports = UserPermissionsSchema
