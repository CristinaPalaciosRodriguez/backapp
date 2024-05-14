const express = require('express');
const router = express.Router();
const Usuario = require('../models/Usuarios');

// Ruta para crear un nuevo usuario
router.post('/usuarios', async (req, res) => {
  try {
    const nuevoUsuario = new Usuario(req.body);
    const resultado = await nuevoUsuario.save();
    res.json(resultado);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
});

// Ruta para editar un usuario existente
router.put('/usuarios/:id', async (req, res) => {
    try {
      const usuarioId = req.params.id;
      const datosUsuarioActualizados = req.body;
  
      // Buscar el usuario por su ID y actualizar sus datos
      const usuarioActualizado = await Usuario.findByIdAndUpdate(usuarioId, datosUsuarioActualizados, { new: true });
  
      if (!usuarioActualizado) {
        // Si no se encontró el usuario, devolver un error 404
        return res.status(404).json({ mensaje: 'Usuario no encontrado' });
      }
  
      // Si se actualizó correctamente, devolver el usuario actualizado
      res.json(usuarioActualizado);
    } catch (error) {
      // Manejar cualquier error que ocurra durante la edición del usuario
      res.status(400).json({ mensaje: error.message });
    }
  });
  

// Agrega más rutas según tus necesidades (por ejemplo: obtener, actualizar, eliminar)

module.exports = router;
