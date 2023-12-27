/*
Nos trae las variables de entorno de un archivo .env
*/
require('dotenv').config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

/*
  Requerimos la libreria Sequelize
*/
const { Sequelize } = require('sequelize');

/*
  Intanciamos nuestra DB, pasandole a Sequelize un link con los datos traidos de las variables de entorno
  • logging: false  :  Permite que ya no veamos lo que realiza sequelize por detras en la consola.
*/
const Database = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  {
    logging: false,
  }
  );

/*
  Se traen las funciones que creamos para crear los modelos de Pokemon y Types
*/
const PokemonModel = require('./models/Pokemon');
const TypesModel = require('./models/Types');
/*
  Ejecutamos las funciones pasandoles nuestra DB, por consecuencia se crean estos 2 modelos dentro de nuestra base de datos (Database)
*/
PokemonModel(Database);
TypesModel(Database)
/*
  Una vez creadas, las instanciamos por separado en variables desestrunturandolas del objeto models de nuestra DB.
*/
const { Pokemon, Types } = Database.models;
/*
  Creamos las relaciones que van a tener nuestras tablas, en este caso de muchos a muchos (belongdToMany)
  • through : Aqui damos el nombre de nuestra tabla intermedia, necesaria en casos de tablas relacionadas de muchos a muchos.
*/
Pokemon.belongsToMany(Types, { through: 'pokemon_types' });
Types.belongsToMany(Pokemon, { through: 'pokemon_types' });

module.exports ={ Database , Pokemon, Types} ;
