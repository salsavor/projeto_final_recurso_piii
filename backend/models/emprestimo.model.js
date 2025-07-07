const sequelize = require("sequelize");
const conexao = require("../config/database");
const User = require("./user.model"); // Importa o modelo User
const Livro = require("./livro.model"); // Importa o modelo Livro

let Emprestimo = conexao.define(
  "Emprestimo",
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    user_id: {
      type: sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "users", // nome da tabela referenciada
        key: "id", // chave primária da tabela referenciada
      },
    },
    livro_id: {
      type: sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "livros", // nome da tabela referenciada
        key: "id", // chave primária da tabela referenciada
      },
    },
    data_emprestimo: {
      type: sequelize.DATE,
      allowNull: false,
    },
    data_devolucao_prevista: {
      type: sequelize.DATE,
      allowNull: false,
    },
    data_devolucao_realizada: {
      type: sequelize.DATE,
      allowNull: true, // pode ser null se o livro ainda não foi devolvido
    },
    estado: {
      type: sequelize.STRING,
      allowNull: false,
      defaultValue: "pendente", // pode ser 'pendente', 'terminado', 'em atraso'
      validate: {
        isIn: [["pendente", "terminado", "em atraso"]],
      },
    },
  },
  {
    tableName: "emprestimos",
    timestamps: true, // adiciona automaticamente createdAt e updatedAt fields
    createdAt: "data_registo", // nome para createdAt
    updatedAt: "data_atualizacao", // nome para updatedAt
  }
);

Emprestimo.belongsTo(User, {
  foreignKey: "user_id",
  targetKey: "id",
  as: "emprestimo_user",
  onDelete: "CASCADE", // se o user for apagado, os empréstimos associados também vão ser
});

Emprestimo.belongsTo(Livro, {
  foreignKey: "livro_id",
  targetKey: "id",
  as: "emprestimo_livro",
  onDelete: "CASCADE", // se o livro for apagado, os empréstimos associados também serão
});

// quando o empréstimo é criado o estado do livro fica "reservado"
Emprestimo.afterCreate(async (emprestimo, options) => {
  const livro = await Livro.findByPk(emprestimo.livro_id);
  if (livro) {
    livro.estado = "reservado";
    await livro.save();
  }
});

// quando o empréstimo é atualizado, pode ficar "terminado" ou "em atraso", atualizando o estado do livro tmb
Emprestimo.afterUpdate(async (emprestimo, options) => {
  if (emprestimo.estado === "terminado") {
    const livro = await Livro.findByPk(emprestimo.livro_id);
    if (livro) {
      livro.estado = "disponivel";
      await livro.save();
    }
  }
  if (emprestimo.estado === "em atraso") {
    const livro = await Livro.findByPk(emprestimo.livro_id);
    if (livro) {
      livro.estado = "em atraso";
      await livro.save();
    }
  }
});

module.exports = Emprestimo;
