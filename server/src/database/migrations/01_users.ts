import Knex from 'knex'

export async function up (knex: Knex) {
  return knex.schema.createTable('users', table => {
    table.uuid('id').primary()

    table.string('name', 200).notNullable()
    table.string('bio', 600).notNullable()
    table.string('password', 72).notNullable()
    table.string('email', 320).notNullable()
    table.string('whatsapp', 20).notNullable()
    table.string('avatar', 100)

    table.integer('is_active', 1).notNullable()

    table.integer('type_user_id')
      .notNullable()
      .references('id')
      .inTable('type_user')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
  })
}

export async function down (knex: Knex) {
  return knex.schema.dropTable('users')
}
