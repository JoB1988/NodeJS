require("dotenv/config");

const mongoose = require("mongoose");

class db {
  constructor(mongoURL) {
    this.mongoURL = mongoURL;
  }

  async connect() {
    try {
      await mongoose.connect(this.mongoURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify:false
      });
      console.log("MondoDB conectado");
    } catch (exception) {
      console.log(exception);
      throw exception;
    }
  }

  async disconnect() {
    try {
      await mongoose.disconnect();
      console.log("MondoDB desconectado");
    } catch (exception) {
      console.log(exception);
      throw exception;
    }
  }
}

module.exports = (mongoURL) => new db(mongoURL);
