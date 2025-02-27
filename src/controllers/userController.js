const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.registerUser = async (req, res) => {
    try {
        const { name, email, password} = req.body;

        // Verificando se o usuário já existe
        let user = await User.findOne({ email });
        if(user) return res.status(400).json({message: 'Email já cadastrado'});

        // Hash de senha
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Isntanciando um novo usuário
        user = new User({ name, email, password: hashedPassword });
        await user.save();

        res.status(201).json({ message: 'Usuário criado com sucesso'});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Erro ao registrar usuário', error: error.message});
    }
}