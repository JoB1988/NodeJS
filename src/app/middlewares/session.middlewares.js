const sessionService = require("../../core/services/session.services");

class sessionMiddleware {
  async auth(req, res, next) {
    try {
        const authHeader = req.headers.authorization;
      if (!authHeader) {
        return res.status(401).send({ message: "token not provided" });
      }
      req = sessionService.auth(req);
      next();
    } catch (error) {
        res.status(401).send({message: 'token invalid'})
        throw error
    }
  }
}

module.exports = new sessionMiddleware();
