const sequelize = require('sequelize');

const conexao = new sequelize("gs_books", "root", "321", {
  host: process.env.DB_HOST || "localhost",
  dialect: "mysql",
  logging: false,
});

module.exports = conexao;