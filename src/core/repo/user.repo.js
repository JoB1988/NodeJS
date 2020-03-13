const userModel = require("../db/models/user.model");
const Repository = require("../db/repository");

class UserRepo extends Repository {
  constructor() {
    super(userModel);
  }

  async getFirst() {
      try {
          const result = await userModel.find({},{limit:1})
          return result
      } catch (error) {
          throw error
      }
  }
}

module.exports = new UserRepo();
