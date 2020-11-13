exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("comments")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("comments").insert([
        { id: 1, user: "User_1", text: "This is a comment..." },
        { id: 2, user: "User_2", text: "This is a comment..." },
        { id: 3, user: "User_3", text: "This is a comment..." },
      ]);
    });
};
