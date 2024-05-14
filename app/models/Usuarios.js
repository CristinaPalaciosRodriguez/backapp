// models/todoUsuarios.js
const mongoose = require('mongoose');

const todoUsuariosSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  apellidos: {
    type: String,
    required: true
  },
  nacionalidad: String,
  edad: {
    type: Number,
    min: 0
  },
  ciudad: String,
  pais: String
}, { collection: 'todoUsuarios' });

module.exports = mongoose.model('todoUsuarios', todoUsuariosSchema);
