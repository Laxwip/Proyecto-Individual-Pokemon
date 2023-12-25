const express = require('express');
const TypesRoutes = express.Router();

TypesRoutes.get("/", getTypesPokemons())