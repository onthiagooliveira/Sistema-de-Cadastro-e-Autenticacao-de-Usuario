const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Definindo a lógica de registro de usuários
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

// Definindo a lógica de login
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Verificando se o usuário existe
        const user = await User.findOne({ email });
        if(!user) return res.status(400).json({ message: 'Usuário não localizado '});

        // Verificando se a senha está correta
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({ message: 'Credenciais inválidas '});

        // Gerando o token JWT
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {expiresIn: '1h'});
        res.json({ token, user: {id: user._id, name: user.name, email: user.email} });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao realizar login'});
    }
}