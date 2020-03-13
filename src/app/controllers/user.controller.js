const userRepo = require('../../core/repo/user.repo');
class UserController {
  async list(_, res) {
    const result = await userRepo.list();
    return res.status(200).send(result);
  }

  async find(req, res) {
    const id = req.params.id;
    const result = await userRepo.findById(id);
    return res.status(200).send(result);
  }

  async delete(req, res) {
    const { id } = req.params;
    const result = await userRepo.delete(id);
    return res.status(200).send(result);
  }

  async store(req, res) {
    const user = req.body;
    const result = await userRepo.insert(user);
    return res.status(200).send(result);
  }

  async update(req, res) {
    const user = req.body;
    const result = await userRepo.update(user);
    return res.status(200).send(result);
  }
}

module.exports = new UserController();
