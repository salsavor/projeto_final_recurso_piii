const sequelize = require("sequelize");
const conexao = require("../config/database");
const Livro = require("./livro.model"); // Importa o modelo Livro

let Autor = conexao.define(
  "autor",
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: sequelize.STRING,
      allowNull: false,
    },
    nacionalidade: {
      type: sequelize.STRING,
      allowNull: false,
    },
    data_nascimento: {
      type: sequelize.DATE,
      allowNull: false,
    },
    data_falecimento: {
      type: sequelize.DATE,
      allowNull: true, // pode ser null se o autor ainda estiver vivo
    },
    livro_id: {
      type: sequelize.INTEGER,
      allowNull: true, // pode ser null se o autor não tiver livros associados
      references: {
        model: "livro", // nome da tabela referenciada
        key: "id", // chave primária da tabela referenciada
      },
    },
  },
  {
    tableName: "autor",
    timestamps: false,
  }
);

module.exports = Autor;
