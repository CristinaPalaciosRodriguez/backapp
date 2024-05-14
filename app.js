// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const todoUsuariosRoutes = require('./app/routes/Usuarios');

const app = express();
const PORT = process.env.PORT || 3000;

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/testCV', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conexión a la base de datos establecida');
}).catch(err => console.error('Error al conectar a la base de datos:', err));

// Middleware
app.use(bodyParser.json());

// Rutas
app.use('/api', todoUsuariosRoutes);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
