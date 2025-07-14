const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const conexao = require("./config/database");
const port = 5000;

app.set("port", process.env.PORT || port);
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

conexao.sync(); //verifica a base de dados

app.use("/api/v1", require("./routes/autor.route.js"));
app.use("/api/v1", require("./routes/emprestimo.route.js"));
app.use("/api/v1", require("./routes/user.route.js"));
app.use("/api/v1", require("./routes/livro.route.js"));
app.use("/api/v1", require("./routes/auth.route"));

app.listen(app.get("port"), () => {
  console.log("Servidor a correr na porta " + app.get("port"));
});
