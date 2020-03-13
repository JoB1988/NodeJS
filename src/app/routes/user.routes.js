const routes = require('express').Router();
const userController = require('../controllers/user.controller');
const userMiddlawares = require('../middlewares/user.middlewares')
routes.get("/users", userController.list);
routes.get("/users/:id", userController.find);
routes.post("/users", userMiddlawares.validateUser,userController.store);
routes.put("/users/", userMiddlawares.validateUser,userController.update);
routes.delete("/users/:id", userController.delete);
  
module.exports = routes