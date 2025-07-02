const express = require("express");
const router = express.Router();

//importação da middleware
const middleware = require("../middleware");

//importação do controller
const userController = require("../controllers/user.controller");

//rotas (endpoints) da entidade 'user'
router.post("/user", middleware.checkToken, userController.createUser);

router.get("/users", middleware.checkToken, userController.getAllUsers);

router.put("/user/:id", middleware.checkToken, userController.updateUser);

router.delete("/user/:id", middleware.checkToken, userController.deleteUser);

router.get("/user/:id", middleware.checkToken, userController.getUserById);

router.get("/user/:name", middleware.checkToken, userController.getUserByName);

module.exports = router;
