require("dotenv/config");
const repo = require("../../src/core/repo/user.repo");
const db = require("../../src/core/db")(process.env.MONGO_URL);
describe("testando o repositório do usuário", () => {

  it("list users", async () => {
    // db.connect().then(() => {
      repo.list().then(result => {
        db.disconnect();
        expect(Array.isArray(result)).tobe(true);
        done();
      });
    // });
  });

  it("insert users", async () => {
    repo
      .insert({
        nome: "Jonathan",
        email: "jonathan@jonathan.com",
        password: "1234"
      })
      .then(result => {
        expect(typeof result == "object").tobe(true);
        done();
      });
  });

  it("listar usuários", async () => {
    const result = await repo.list();
    expect(Array.isArray(result)).tobe(true);
  });
});
