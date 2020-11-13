exports.up = function (knex) {
  return knex.schema.createTable("comments", (tbl) => {
    tbl.increments();
    tbl.string("user", 128).notNullable();
    tbl.string("text", 128);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("comments");
};
