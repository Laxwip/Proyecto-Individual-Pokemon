const axios = require('axios');

module.exports = async (req, res) => {
  try {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=50"
      );
      if(response.status === 200){
        const pokemons = response.data.results
        return res.status(200).json(pokemons) 
      }else{
        return res.status(response.status).send({error: error.message})
      }
  } catch (error) {
    console.error('Error al realizar la solicitud:', error.message);
    res.status(500).send({ error: 'Error interno del servidor' });
  }
}