const routes = require("express").Router();
const sessionController = require("../controllers/session.controller");

routes.post("/login", sessionController.store);

module.exports = routes;
