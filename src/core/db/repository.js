class Repository {
  constructor(model) {
    this.model = model;
  }
  async list() {
    try {
      const result = await this.model.find();
      return result;
    } catch (exception) {
      throw exception;
    }
  }

  async delete(_id) {
    try {
      const result = await this.model.findOneAndDelete({ _id });
      return result;
    } catch (exception) {
      throw exception;
    }
  }

  async findOne(args) {
    try {
      const result = await this.model.findOne(args);
      return result;
    } catch (exception) {
      throw exception;
    }
  }

  async findById(_id) {
    try {
      const result = await this.model.findById(_id);
      return result;
    } catch (exception) {
      throw exception;
    }
  }
  async insert(args) {
    try {
      const User = this.model;
      const UserToSave = new User(args);
      const userSaved = await UserToSave.save();
      return userSaved;
    } catch (exception) {
      throw exception;
    }
  }

  async update(args) {
    try {
      //   return new Promise((resolve, reject) => {
      //     this.model.update({ id: args.id }, args, (err, raw) => {
      //       if (err) {
      //         throw reject(err);
      //       } else return resolve(raw);
      //     });
      //   });
      const result = await this.model.findOneAndUpdate({ _id: args.id }, args);
      return result;
    } catch (exception) {
      throw exception;
    }
  }
}

module.exports = Repository;
