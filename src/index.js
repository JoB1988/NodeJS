require("dotenv/config");

const app = require('./app');

const PORT = process.env.PORT;

const db = require("./core/db")(process.env.MONGO_URL);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

db.connect();