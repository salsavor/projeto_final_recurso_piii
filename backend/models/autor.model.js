const sequelize = require("sequelize");
const conexao = require("../config/database");

const autor = conexao.define(
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
    biografia: {
      type: sequelize.TEXT,
      allowNull: true, // autor pode nao ter biografia
    },
    livro_id: {
      type: sequelize.INTEGER,
      allowNull: true, // pode ser null se o autor não tiver livros associados
      references: {
        model: "livros", // nome da tabela referenciada
        key: "id", // chave primária da tabela referenciada
      },
    },
  },
  {
    tableName: "autor",
    timestamps: true, // adiciona automaticamente createdAt e updatedAt fields
    createdAt: "data_registo", // nome para createdAt
    updatedAt: "data_atualizacao", // nome para updatedAt
  }
);

module.exports = autor;
