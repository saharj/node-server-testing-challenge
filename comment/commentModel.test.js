const { intersect } = require("../data/db-config");
const db = require("../data/db-config");
const Comments = require("./commentModel");

beforeEach(async () => {
  await db("comments").truncate();
});

describe("comment model", () => {
  describe("add()", () => {
    it("adds a new comment", async () => {
      await Comments.add({ user: "new-user", text: "comment" });
      let comment = await db("comments");
      expect(comment).toHaveLength(1);
    });
    it("gives back the new added comment", async () => {
      const comment = await Comments.add({ user: "new-user", text: "comment" });
      expect(comment).toMatchObject({
        id: 1,
        user: "new-user",
        text: "comment",
      });
    });
  });
  describe("remove()", () => {
    it("removes a comment", async () => {
      await Comments.add({ user: "new-user", text: "comment" });
      await Comments.remove(1);
      let comment = await db("comments");
      expect(comment).toHaveLength(0);
    });
  });
});
