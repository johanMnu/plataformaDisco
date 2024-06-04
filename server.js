const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000; // Usar el puerto especificado en la variable de entorno o el 5000 como valor por defecto
const path = require("path");
const routes = require("./routes/index");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config(); // Cargar las variables de entorno desde el archivo .env

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use("/health", (req, res) => res.sendStatus(200));
app.use("/", routes);
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${
      process.env.DB_CLUSTER
    }.bfxqi8m.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(function (db) {
    console.log("-- Conectado a MongoDB");
  })
  .catch(function (err) {
    console.log(err);
  });


app.listen(PORT, () => {
  console.log(`Iniciado server en puerto ${PORT}`);
});
