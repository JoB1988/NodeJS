const express = require("express");

const app = express();

// Necessário para usar json
app.use(express.json());

// Middlewares
app.get("/", (req, res) => {
  return res.status(200).send("Bem vindo a nossa API!");
});

// Middlewares
app.get("/nome/:nome/:idade", (req, res) => {
  const {nome, idade} = req.params
  return res.status(200).send(`Bem vindo ${nome} sua idade é ${idade}`);
});

// Middlewares
app.post("/aluno", (req, res) => {
  const aluno = req.body
  return res.status(200).send(`aluno criado com sucesso`);
});

app.listen(4000, () => {
  console.log("Servidor rodando em http://localhost:4000");
});
