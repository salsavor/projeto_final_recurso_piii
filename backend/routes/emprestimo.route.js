const express = require("express");
const router = express.Router();

//importação da middleware
const middleware = require("../middleware");

//importação do controller
const emprestimoController = require("../controllers/emprestimo.controller.js");

//rotas (endpoints) da entidade 'Emprestimo'
router.post(
  "/emprestimo",
  middleware.checkToken,
  emprestimoController.createEmprestimo
);

router.get(
  "/emprestimos",
  middleware.checkToken,
  emprestimoController.getAllEmprestimos
);

router.delete(
  "/emprestimo/:id",
  middleware.checkToken,
  emprestimoController.deleteEmprestimo
);

router.get(
  "/emprestimo/:id",
  middleware.checkToken,
  emprestimoController.getEmprestimoById
);

module.exports = router;
