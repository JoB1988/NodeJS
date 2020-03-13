require("dotenv/config");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const repo = require("../repo/user.repo");

class SessionServices {
  async login(email, password) {
    try {
      const user = await repo.findOne({ email });
      if (!user) {
        return { message: "Usuário não encontrado" };
      }
      
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new SessionServices();
