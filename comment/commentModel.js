const db = require("../data/db-config");

module.exports = { add, update, remove };

async function add(comment) {
  const [id] = await db("comments").insert(comment);
  return db("comments").where({ id }).first();
}

function update() {}

function remove(id) {
  return db("comments").where({ id }).del();
}
