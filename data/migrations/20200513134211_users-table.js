exports.up = function (knex) {
  return knex.schema.createTable("users", (tbl) => {
    tbl.increments();
    tbl.string("name");
    tbl.string("username").unique().notNullable();
    tbl.string("password").notNullable();
    tbl.string("email");
    tbl.string("profile_picture");
    tbl.integer("family_id").references("id").inTable("families").onDelete('CASCADE').onUpdate('CASCADE');
    tbl.integer("user_type_id").references("id").inTable("user_types").onDelete('CASCADE').onUpdate('CASCADE');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};
