const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.status(200).send("Testando a rota get /sla");
});
app.listen(port, () => {
  console.log("O sevidor está na rodando na porta 3000");
});
