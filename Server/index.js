const server = require('./src/server');
// const {conn} = require('./src/db');
const Database = require('./src/db');

/*
  Sincronizamos la base de datos con nuestro servidor
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
    return res.send(error.message);
  }