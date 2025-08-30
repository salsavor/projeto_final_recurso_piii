const autor = require("../models/autor.model");

const endpointsFunction = {};

// método para criar um autor
endpointsFunction.createAutor = async (req, res) => {
  const {
    nome,
    nacionalidade,
    data_nascimento,
    data_falecimento,
    biografia,
    avatar,
  } = req.body;
  console.log(
    nome,
    nacionalidade,
    data_nascimento,
    data_falecimento,
    biografia,
    avatar
  );
  try {
    const dados = await autor.create({
      nome: nome,
      nacionalidade: nacionalidade,
      data_nascimento: data_nascimento,
      data_falecimento: data_falecimento,
      biografia: biografia,
      avatar: avatar,
    });

    res.status(201).json({
      status: "success",
      message: "autor criado com sucesso",
      data: dados,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "ocorreu um erro ao criar autor",
      data: null,
    });
  }
};

//método que retorna todos os autores
endpointsFunction.getAllAutores = async (req, res) => {
  try {
    const dados = await autor.findAll();

    res.status(200).json({
      status: "success",
      message: "lista de autores obtida com sucesso",
      data: dados,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "ocorreu um erro ao listar os autores",
      data: null,
    });
  }
};

//método que atualiza dos dados do autor de acordo com o seu ID
endpointsFunction.updateAutor = async (req, res) => {
  const { id } = req.params;
  const {
    nome,
    nacionalidade,
    data_nascimento,
    data_falecimento,
    biografia,
    avatar,
  } = req.body;

  try {
    const dados = await autor.update(
      {
        nome: nome,
        nacionalidade: nacionalidade,
        data_nascimento: data_nascimento,
        data_falecimento: data_falecimento,
        biografia: biografia,
        avatar: avatar,
      },
      {
        where: { id: id },
      }
    );
    if (!dados) {
      return res.status(404).json({
        status: "error",
        message: "autor não encontrado",
      });
    }
    res.status(200).json({
      status: "success",
      message: "autor atualizado com sucesso",
      data: dados,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "ocorreu um erro ao atualizar autor",
    });
  }
  res.status(200).json({
    status: "success",
    message: "autor atualizado com sucesso",
    data: dados,
  });
};

//método que apaga os dados de um autor com base no seu ID
endpointsFunction.deleteAutor = async (req, res) => {
  const { id } = req.params;
  try {
    const dados = await autor.destroy({
      where: { id: id },
    });
    if (!dados) {
      return res.status(404).json({
        status: "error",
        message: "autor não encontrado",
      });
    }
    res.status(204).json({
      status: "success",
      message: "autor apagado com sucesso",
      data: dados,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "ocorreu um erro ao apagar autor",
      data: null,
    });
  }
};

//método que retorna os dados de um autor com base no seu ID
endpointsFunction.getAutorById = async (req, res) => {
  const { id } = req.params;
  try {
    const dados = await autor.findOne({
      where: { id: id },
    });
    if (!dados) {
      return res.status(404).json({
        status: "error",
        message: "autor não encontrado",
      });
    }

    res.status(200).json({
      status: "success",
      message: "autor encontrado com sucesso",
      data: dados,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "ocorreu um erro ao listar autor",
      data: null,
    });
  }
};

//método que retorna os dados de um autor com base no seu nome
endpointsFunction.getAutorByName = async (req, res) => {
  const { nome } = req.params;
  try {
    const dados = await autor.findOne({
      where: { nome: nome },
    });
    if (!dados) {
      return res.status(404).json({
        status: "error",
        message: "autor não encontrado",
      });
    }

    res.status(200).json({
      status: "success",
      message: "autor encontrado com sucesso",
      data: dados,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "ocorreu um erro ao listar autor",
      data: null,
    });
  }
};

module.exports = endpointsFunction;
