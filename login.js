const express = require("express");
const bodyParser = require("body-parser"); // inicializar app express
const app = express();

let port = 8000;
app.listen(port, () => {
  console.log("Server listening on port" + port);
});