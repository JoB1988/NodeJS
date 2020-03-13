const userModel = require("../db/models/user.model");
const Repository = require("../db/repository");
const bcrypt = require("bcrypt");

class UserRepo extends Repository {
  constructor() {
    super(userModel);
  }

  async getFirst() {
    try {
      const result = await userModel.find({}, { limit: 1 });
      return result;
    } catch (error) {
      throw error;
    }
  }

  async comparePassword(password, candidatePassword) {
    try {
      return new Promise((resolve, reject) => {
        bcrypt.compare(candidatePassword, password, (err, isMatch) => {
          if (err) return reject(err);
          else return resolve(isMatch);
        });
      });
    } catch (error) {}
  }
}

module.exports = new UserRepo();
