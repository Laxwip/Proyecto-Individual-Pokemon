const axios = require('axios');
const { Pokemon } = require('../db');

module.exports = async (req, res) => {
  let pokemonApi = {}
  let pokemonDb = {}
  try {
    const id = req.params.id 
    const responseApi = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${id}`
      ); 
      if(responseApi.status === 200){
        const dataApi = responseApi.data
        pokemonApi = {
          id: dataApi.id,
          name: dataApi.name,
          image: dataApi.sprites.other.dream_world.front_default,
          health: dataApi.stats[0].base_stat,
          atack: dataApi.stats[1].base_stat,
          defense: dataApi.stats[2].base_stat,
        }
      }
    const responseDb = await Pokemon.findByPk(id);
      if(responseDb){
        pokemonDb = {
          id: responseDb.id,
        };
      }
    const responses = {
      pokemonApi,
      pokemonDb
    }

    res.status(200).json(responses);

    // res.status(200).json(pokemonApi)
  } catch (error) {
    if (error.response && error.response.status === 404) {
      // Manejar el caso específico de error 404 de la API
      res.status(404).send({ error: 'Pokémon no encontrado' });
    } else {
      // Manejar otros errores internos del servidor
      console.error('Error al realizar la solicitud:', error.message);
      res.status(500).send({ error: 'Error interno del servidor' });
    }
  }
}