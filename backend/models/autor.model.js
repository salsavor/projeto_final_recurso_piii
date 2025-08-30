const sequelize = require("sequelize");
const conexao = require("../config/database");
const livro = require("./livro.model"); // importa o modelo Livro

const autor = conexao.define(
  "autor",
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nome: {
      type: sequelize.STRING,
      allowNull: false,
    },
    nacionalidade: {
      type: sequelize.STRING,
      allowNull: false,
    },
    ano_nascimento: {
      type: sequelize.INTEGER,
      allowNull: false,
    },
    ano_falecimento: {
      type: sequelize.INTEGER,
      allowNull: true,
    },
    biografia: {
      type: sequelize.STRING,
      allowNull: true,
    },
    avatar: {
      type: sequelize.STRING,
      allowNull: true, // pode ser null se o autor não tiver avatar
    },
    livro_id: {
      type: sequelize.INTEGER,
      allowNull: true, // autor pode não ter livros
      references: {
        model: "livros", //nome da tabela de origem
        key: "id", //pk da tabela de origem
      },
    },
  },
  {
    tableName: "autor",
    timestamps: true, // adiciona automaticamente createdAt e updatedAt
    createdAt: "data_registo", // nome para createdAt
    updatedAt: "data_atualizacao", // nome para updatedAt
  }
);

autor.hasMany(livro, { foreignKey: "autor_id", as: "livros" }); // o relacionamento reverso

module.exports = livro;
