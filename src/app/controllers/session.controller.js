const sessionService = require("../../core/services/session.services");

class sessionController {
  async store(req, res) {
    try {
      const { email, password } = req.body;
      const token = await sessionService.login(email, password);
      res.status(200).send(token);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new sessionController();