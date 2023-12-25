/*
  Instancio la configuraciòn del servidor usando un framework web para Node.js (Express)
*/
const express = require("express");
const server = express();


/*
  Importacion de conjuntos de rutas
*/
const PokemonRoutes = require("./routes/pokemons");

/*
  Usamos los conjuntos de rutas importados
*/ 
server.use("/pokemon", PokemonRoutes)

module.exports = server;
