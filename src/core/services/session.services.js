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
      const jsonTokenObject = JSON.stringify({
        id: user._id,
        nome: user.nome,
        email: user.email
      });
      return (await repo.comparePassword(user.password, password))
        ? { user, token: jwt.sign(jsonTokenObject, process.env.JWT_KEY) }
        : { mesage: "" };
    } catch (error) {
      throw error;
    }
  }
  async auth(req, authHeader) {
    try {
      const [, token] = authHeader.split(" ");
      const decoded = await promisify(jwt.verify)(token, process.env.JWT_KEY);
      req._id = decoded._id;
      return req;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new SessionServices();
