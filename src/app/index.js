const express = require("express");

class Application {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    // Necessário para usar json
    this.app.use(express.json());
  }

  routes() {
      this.app.use(require('./routes/user.routes'))
      this.app.use(require('./routes/session.routes'))
  }
}

module.exports = new Application().app