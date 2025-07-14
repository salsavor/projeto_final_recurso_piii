const Livro = require("../models/livro.model");

const endpointsFunction = {};

// método para criar um livro
endpointsFunction.createLivro = async (req, res) => {
  const { titulo, genero, ano_publicacao, autor_id } = req.body;
  console.log(titulo, genero, ano_publicacao, autor_id);
  try {
    const dados = await Livro.create({
      titulo: titulo,
      genero: genero,
      ano_publicacao: ano_publicacao,
      autor_id: autor_id,
    });

    res.status(201).json({
      status: "success",
      message: "livro criado com sucesso",
      data: dados,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "ocorreu um erro ao criar livro",
      data: null,
    });
  }
};

//método que retorna todos os livros
endpointsFunction.getAllLivros = async (req, res) => {
  try {
    const dados = await Livro.findAll();

    res.status(200).json({
      status: "success",
      message: "lista de livros obtida com sucesso",
      data: dados,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "ocorreu um erro ao listar os livros",
      data: null,
    });
  }
};

//método que atualiza dos dados do livro de acordo com o seu ID
endpointsFunction.updateLivro = async (req, res) => {
  const { id } = req.params;
  const { titulo, genero, ano_publicacao, autor_id } = req.body;

  try {
    const dados = await Livro.update(
      {
        titulo: titulo,
        genero: genero,
        ano_publicacao: ano_publicacao,
        autor_id: autor_id,
      },
      {
        where: { id: id },
      }
    );
    if (!dados) {
      return res.status(404).json({
        status: "error",
        message: "livro não encontrado",
      });
    }
    res.status(200).json({
      status: "success",
      message: "livro atualizado com sucesso",
      data: dados,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "ocorreu um erro ao atualizar livro",
      data: null,
    });
  }
};

//método que apaga os dados de um livro com base no seu ID
endpointsFunction.deleteLivro = async (req, res) => {
  const { id } = req.params;
  try {
    const dados = await Livro.destroy({
      where: { id: id },
    });
    if (!dados) {
      return res.status(404).json({
        status: "error",
        message: "livro não encontrado",
      });
    }
    res.status(204).json({
      status: "success",
      message: "livro apagado com sucesso",
      data: dados,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "ocorreu um erro ao apagar livro",
      data: null,
    });
  }
};

//método que retorna os dados de um livro com base no seu ID
endpointsFunction.getLivroById = async (req, res) => {
  const { id } = req.params;
  try {
    const dados = await Livro.findOne({
      where: { id: id },
    });
    if (!dados) {
      return res.status(404).json({
        status: "error",
        message: "livro não encontrado",
      });
    }

    res.status(200).json({
      status: "success",
      message: "livro encontrado com sucesso",
      data: dados,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "ocorreu um erro ao listar livro",
      data: null,
    });
  }
};

//método que retorna os dados de um livro com base no seu titulo
endpointsFunction.getLivroByTitle = async (req, res) => {
  const { titulo } = req.params;
  try {
    const dados = await Livro.findOne({
      where: { titulo: titulo },
    });
    if (!dados) {
      return res.status(404).json({
        status: "error",
        message: "livro não encontrado",
      });
    }

    res.status(200).json({
      status: "success",
      message: "livro encontrado com sucesso",
      data: dados,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "ocorreu um erro ao listar livro",
      data: null,
    });
  }
};

//método que retorna os dados de um livro com base no seu genero
endpointsFunction.getLivroByGenre = async (req, res) => {
  const { genero } = req.params;
  try {
    const dados = await Livro.findOne({
      where: { genero: genero },
    });
    if (!dados) {
      return res.status(404).json({
        status: "error",
        message: "livro não encontrado",
      });
    }

    res.status(200).json({
      status: "success",
      message: "livro encontrado com sucesso",
      data: dados,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "ocorreu um erro ao listar livro",
      data: null,
    });
  }
};

module.exports = endpointsFunction;
