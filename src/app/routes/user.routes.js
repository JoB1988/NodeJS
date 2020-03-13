const routes = require('express').Router();
const userController = require('../controllers/user.controller');
const userMiddlawares = require('../middlewares/user.middlewares')
const sessionMiddlawares = require('../middlewares/session.middlewares')

routes.get("/users", sessionMiddlawares.auth, userController.list);
routes.get("/users", userController.list);
routes.get("/users/:id", userController.find);
routes.post("/users", userMiddlawares.validateUser,userController.store);
routes.put("/users/", userMiddlawares.validateUser,userController.update);
routes.delete("/users/:id", userController.delete);
  
module.exports = routes