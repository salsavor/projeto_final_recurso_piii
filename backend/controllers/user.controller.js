const User = require("../models/user.model");

const endpointsFunction = {};

// método para criar um user
endpointsFunction.createUser = async (req, res) => {
  const { username, email, num_telefone } = req.body;
  console.log(username, email, num_telefone);
  try {
    const dados = await User.create({
      username: username,
      email: email,
      num_telefone: num_telefone,
    });

    res.status(201).json({
      status: "success",
      message: "user criado com sucesso",
      data: dados,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "ocorreu um erro ao criar user",
      data: null,
    });
  }
};

//método que retorna todos os users
endpointsFunction.getAllUsers = async (req, res) => {
  try {
    const dados = await User.findAll();

    res.status(200).json({
      status: "success",
      message: "lista de users obtida com sucesso",
      data: dados,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "ocorreu um erro ao listar os users",
      data: null,
    });
  }
};

//método que atualiza dos dados do user de acordo com o seu ID
endpointsFunction.updateUser = async (req, res) => {
  const { id } = req.params;
  const { username, email, num_telefone } = req.body;

  try {
    const dados = await User.update(
      {
        username: username,
        email: email,
        num_telefone: num_telefone,
      },
      {
        where: { id: id },
      }
    );
    if (!dados) {
      return res.status(404).json({
        status: "error",
        message: "user não encontrado",
      });
    }
    res.status(200).json({
      status: "success",
      message: "user atualizado com sucesso",
      data: dados,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "ocorreu um erro ao atualizar user",
      data: null,
    });
  }
};

//método que apaga os dados de um user com base no seu ID
endpointsFunction.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const dados = await User.destroy({
      where: { id: id },
    });
    if (!dados) {
      return res.status(404).json({
        status: "error",
        message: "user não encontrado",
      });
    }
    res.status(204).json({
      status: "success",
      message: "user apagado com sucesso",
      data: dados,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "ocorreu um erro ao apagar user",
      data: null,
    });
  }
};

//método que retorna os dados de um user com base no seu ID
endpointsFunction.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const dados = await User.findOne({
      where: { id: id },
    });
    if (!dados) {
      return res.status(404).json({
        status: "error",
        message: "user não encontrado",
      });
    }

    res.status(200).json({
      status: "success",
      message: "user encontrado com sucesso",
      data: dados,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "ocorreu um erro ao listar user",
      data: null,
    });
  }
};

//método que retorna os dados de um user com base no seu nome
endpointsFunction.getUserByUsername = async (req, res) => {
  const { nome } = req.params;
  try {
    const dados = await User.findOne({
      where: { nome: nome },
    });
    if (!dados) {
      return res.status(404).json({
        status: "error",
        message: "user não encontrado",
      });
    }

    res.status(200).json({
      status: "success",
      message: "user encontrado com sucesso",
      data: dados,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "ocorreu um erro ao listar user",
      data: null,
    });
  }
};

module.exports = endpointsFunction;
