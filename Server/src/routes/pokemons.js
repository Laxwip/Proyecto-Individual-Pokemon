const express = require('express');
const PokemonRoutes = express.Router();
/*
  Requerimos los controllers para usarlos en las rutas, siendo estos los que se comunican directamente con la DB y no las rutas.
*/
const getAllPokemons = require('../controllers/getAllPokemons');
const getPokemonById = require('../controllers/getPokemonById');
const getPokemonByName = require('../controllers/getPokemonByName');
// const createPokemon = require('../controllers/createPokemon');
/*
  Creamos las rutas y le damos el controller que se hará cargo
*/
PokemonRoutes.get('/', getAllPokemons);
PokemonRoutes.get("/:id", getPokemonById);
PokemonRoutes.get( "/:name", getPokemonByName)
// PokemonRoutes.post("/", createPokemon)

module.exports = PokemonRoutes;