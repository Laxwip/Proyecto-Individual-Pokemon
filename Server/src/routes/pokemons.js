const express = require('express');
const PokemonRoutes = express.Router();

const getAllPokemons = require('../controllers/getAllPokemons');
// const getPokemonById = require('../controllers/getPokemonById');
// const getPokemonByName = require('../controllers/getPokemonByName');
// const createPokemon = require('../controllers/createPokemon');

PokemonRoutes.get('/', getAllPokemons);
// PokemonRoutes.get("/:id", getPokemonById())
// PokemonRoutes.get( "/:name", getPokemonByName())
// PokemonRoutes.post("/", createPokemon())

module.exports = PokemonRoutes;

// PokemonRoutes.put("/:id", updatePokemon())