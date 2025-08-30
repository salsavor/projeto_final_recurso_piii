const express = require("express");
const router = express.Router();

//importação da middleware
const middleware = require("../middleware");

//importação do controller
const autorController = require("../controllers/autor.controller.js");

//rotas (endpoints) da entidade 'autor'
router.post("/autor", middleware.checkToken, autorController.createAutor);

router.get("/autores", middleware.checkToken, autorController.getAllAutores);

router.delete("/autor/:id", middleware.checkToken, autorController.deleteAutor);

router.get("/autor/:id", middleware.checkToken, autorController.getAutorById);

router.put("/autor/:id", middleware.checkToken, autorController.updateAutor);

router.get(
  "/autor/:nome",
  middleware.checkToken,
  autorController.getAutorByName
);

router.get("/autor/:id", async (req, res) => {
  try {
    const autor = await autor.findByPk(req.params.id, {
      include: [
        {
          model: Livro,
          as: "livros", // ajuste conforme o nome da associação
          attributes: ["id", "titulo"],
        },
      ],
    });
    if (!autor) return res.status(404).json({ error: "Autor não encontrado" });
    res.json(autor);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar autor" });
  }
});

module.exports = router;
