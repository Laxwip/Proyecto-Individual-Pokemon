const server = require('./src/server');
// const {conn} = require('./src/db');


/*
  Iniciamos el servidor, escuchando en el puerto 3001
*/
server.listen(3001, () => {
  console.log("Server listening at 3001");
})