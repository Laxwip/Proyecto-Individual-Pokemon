const server = require('./src/server');
const { Database } = require('./src/db');

/*
  Sincronizamos la base de datos con nuestro servidor
  • {force: true} : Permite hacer cambios en la estructura de la base de datos, borrando y volviendo a crear las tablas existentes cada que se realiza un cambio.
  • sync : Es un metodo de sequeliz.
*/
Database.sync({force: true})
  try {
    /*
      Iniciamos el servidor, escuchando en el puerto 3001
    */
    server.listen(3001, () => {
      console.log("Server listening at 3001");
    })    
  } catch (error) {
    return res.send("Error al sincronizar la base de datos: ",error.message);
  }