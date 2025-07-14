const Emprestimo = require("../models/emprestimo.model");

const endpointsFunction = {};

// método para criar um emprestimo
endpointsFunction.createEmprestimo = async (req, res) => {
  const {
    data_emprestimo,
    data_devolucao_prevista,
    data_devolucao_realizada,
    user_id,
    livro_id,
  } = req.body;
  console.log(
    data_emprestimo,
    data_devolucao_prevista,
    data_devolucao_realizada,
    user_id,
    livro_id
  );
  try {
    const dados = await Emprestimo.create({
      data_emprestimo: data_emprestimo,
      data_devolucao_prevista: data_devolucao_prevista,
      data_devolucao_realizada: data_devolucao_realizada,
      user_id: user_id,
      livro_id: livro_id,
    });

    res.status(201).json({
      status: "success",
      message: "emprestimo criado com sucesso",
      data: dados,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "ocorreu um erro ao criar emprestimo",
      data: null,
    });
  }
};

//método que retorna todos os emprestimos
endpointsFunction.getAllEmprestimos = async (req, res) => {
  try {
    const dados = await Emprestimo.findAll();

    res.status(200).json({
      status: "success",
      message: "lista de emprestimos obtida com sucesso",
      data: dados,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "ocorreu um erro ao listar os emprestimos",
      data: null,
    });
  }
};

//método que atualiza dos dados do emprestimo de acordo com o seu ID
endpointsFunction.updateEmprestimo = async (req, res) => {
  const { id } = req.params;
  const {
    data_emprestimo,
    data_devolucao_prevista,
    data_devolucao_realizada,
    user_id,
    livro_id,
  } = req.body;

  try {
    const dados = await Emprestimo.update(
      {
        data_emprestimo: data_emprestimo,
        data_devolucao_prevista: data_devolucao_prevista,
        data_devolucao_realizada: data_devolucao_realizada,
        user_id: user_id,
        livro_id: livro_id,
      },
      {
        where: { id: id },
      }
    );
    if (!dados) {
      return res.status(404).json({
        status: "error",
        message: "emprestimo não encontrado",
      });
    }
    res.status(200).json({
      status: "success",
      message: "emprestimo atualizado com sucesso",
      data: dados,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "ocorreu um erro ao atualizar emprestimo",
      data: null,
    });
  }
};

//método que apaga os dados de um emprestimo com base no seu ID
endpointsFunction.deleteEmprestimo = async (req, res) => {
  const { id } = req.params;
  try {
    const dados = await Emprestimo.destroy({
      where: { id: id },
    });
    if (!dados) {
      return res.status(404).json({
        status: "error",
        message: "emprestimo não encontrado",
      });
    }
    res.status(204).json({
      status: "success",
      message: "emprestimo apagado com sucesso",
      data: dados,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "ocorreu um erro ao apagar emprestimo",
      data: null,
    });
  }
};

//método que retorna os dados de um emprestimo com base no seu ID
endpointsFunction.getEmprestimoById = async (req, res) => {
  const { id } = req.params;
  try {
    const dados = await Emprestimo.findOne({
      where: { id: id },
    });
    if (!dados) {
      return res.status(404).json({
        status: "error",
        message: "emprestimo não encontrado",
      });
    }

    res.status(200).json({
      status: "success",
      message: "emprestimo encontrado com sucesso",
      data: dados,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "ocorreu um erro ao listar emprestimo",
      data: null,
    });
  }
};

module.exports = endpointsFunction;
