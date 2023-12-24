/*
Requerimos una config para traer datos de el archivo .env
*/
require('dotenv').config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

/*
  Requerimos la libreria Sequelize
*/
const { Sequelize } = require('sequelize');

const PokemonModel = require('./models/Pokemon');
const TypesModel = require('./models/Types');

const Database = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  {
    logging: false,
    native: false,
  }
);

PokemonModel(Database);
TypesModel(Database)

const { Pokemon, Types } = Database.models;

Pokemon.belongsToMany(Types, { through: 'pokemon_types' });
Types.belongsToMany(Pokemon, { through: 'pokemon_types' });

module.exports = Database;
