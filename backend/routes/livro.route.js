const express = require("express");
const router = express.Router();

//importação da middleware
const middleware = require("../middleware");

//importação do controller
const autorController = require("../controllers/autor.controller.js");

//rotas (endpoints) da entidade 'autor'
router.post("/autor", middleware.checkToken, autorController.createAutor);

router.get("/autores", middleware.checkToken, autorController.getAllAutors);

router.delete("/autor/:id", middleware.checkToken, autorController.deleteAutor);

router.get("/autor/:id", middleware.checkToken, autorController.getAutorById);

router.get(
  "/autor/:nome",
  middleware.checkToken,
  autorController.getAutorByNome
);

module.exports = router;
