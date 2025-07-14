const express = require("express");
const router = express.Router();

//importação da middleware
const middleware = require("../middleware");

//importação do controller
const livroController = require("../controllers/livro.controller.js");

//rotas (endpoints) da entidade 'livro'
router.post("/livro", middleware.checkToken, livroController.createLivro);

router.get("/livros", middleware.checkToken, livroController.getAllLivros);

router.delete("/livro/:id", middleware.checkToken, livroController.deleteLivro);

router.get("/livro/:id", middleware.checkToken, livroController.getLivroById);

router.get(
  "/livro/:titulo",
  middleware.checkToken,
  livroController.getLivroByTitle
);

router.get(
  "/livro/:genero",
  middleware.checkToken,
  livroController.getLivroByGenre
);

router.put("livro/:id", middleware.checkToken, livroController.updateLivro);

module.exports = router;
