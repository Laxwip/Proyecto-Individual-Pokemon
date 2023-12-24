const express = require('express');
const PersonajeRoutes = express.Router();

PersonajeRoutes.get("/", (req, res) => {
  res.send("Hola");
})

module.exports = PersonajeRoutes;