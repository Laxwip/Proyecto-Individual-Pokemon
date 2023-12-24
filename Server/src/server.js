/*
  Instancio la configuraciòn del servidor usando un framework web para Node.js (Express)
*/
const express = require("express");
const server = express();


/*
  Importacion de conjuntos de rutas
*/
const PersonajeRoutes = require('./routes/character');

/*
  Usamos los conjuntos de rutas importados
*/ 
server.use("/personajes", PersonajeRoutes)


server.get("/", (req, res) => {
  res.send("Mensaje de home")
})

module.exports = server;
