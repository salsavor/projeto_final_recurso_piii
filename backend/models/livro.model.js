const sequelize = require("sequelize");
const conexao = require("../config/database");
const autor = require("./autor.model"); // importa o modelo Autor

const livro = conexao.define(
  "livros",
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    titulo: {
      type: sequelize.STRING,
      allowNull: false,
    },
    autor_id: {
      type: sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "autor", // referencia o modelo Autor
        key: "id", // chave primária do modelo Autor
      },
    },
    ano_publicacao: {
      type: sequelize.INTEGER,
      allowNull: false,
    },
    genero: {
      type: sequelize.STRING,
      allowNull: true,
    },
    estado: {
      type: sequelize.STRING,
      allowNull: false,
      defaultValue: "disponivel", // pode ser 'disponivel', 'em atraso', 'reservado'
      validate: {
        isIn: [["disponivel", "em atraso", "reservado"]],
      },
    },
  },
  {
    tableName: "livros",
    timestamps: true, // adiciona automaticamente createdAt e updatedAt fields
    createdAt: "data_registo", // nome para createdAt
    updatedAt: "data_atualizacao", // nome para updatedAt
  }
);

livro.belongsTo(autor, {
  foreignKey: "autor_id",
  targeKey: "id",
  as: "livro_autor",
  onDelete: "CASCADE", // se o autor for apagado, os livros associados também serão deletados
});

module.exports = livro;
