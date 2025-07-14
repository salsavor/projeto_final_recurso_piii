const bcrypt = require("bcrypt");
const sequelize = require("sequelize");
const conexao = require("../config/database");

const User = conexao.define(
  "User",
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    username: {
      type: sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    num_telefone: {
      type: sequelize.INTEGER,
      allowNull: true,
      validate: {
        is: /^[0-9]{9}$/, // valida 9 numeros
      },
    },
    password: {
      type: sequelize.STRING,
      allowNull: false,
    },
    isadmin: {
      type: sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    tableName: "users",
    timestamps: true, // adiciona automaticamente createdAt e updatedAt fields
    createdAt: "data_registo", // nome para createdAt
    updatedAt: "data_atualizacao", // nome para updatedAt
  }
);

User.beforeCreate((user, options) => {
  return bcrypt
    .hash(user.password, 10)
    .then((hash) => {
      user.password = hash;
    })
    .catch((error) => {
      throw new Error("Erro ao gerar o hash: " + error.message);
    });
});

User.beforeUpdate((user, options) => {
  if (user.changed("password")) {
    return bcrypt
      .hash(user.password, 10)
      .then((hash) => {
        user.password = hash;
      })
      .catch((error) => {
        throw new Error("Erro ao gerar o hash: " + error.message);
      });
  }
});

User.prototype.validPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = User;
