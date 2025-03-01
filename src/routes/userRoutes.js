// Importando módulo express
const express = require('express');

// Imports Controller
const { registerUser } = require('../controllers/userController');
const { loginUser } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const { getUserProfile } = require('../controllers/userController')
const { updateUserProfile } = require('../controllers/userController');
const { deleteUserAccount } = require('../controllers/userController');


// Definindo as Rotas
const router = express.Router();

// Rota de registro
router.post('/register', registerUser);

// Rota de login
router.post('/login', loginUser);

// Rota Protegida para acesso de usuários cadastrados
router.get('/profile', authMiddleware, getUserProfile);

// Rota para atualizar perfil
router.put('/profile', authMiddleware, updateUserProfile);

//  Rota para exclusão de perfil
router.delete('/profile', authMiddleware,deleteUserAccount);
module.exports = router;
