// Imports
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const user = require('../models/user');

// Definindo a lógica de registro de usuários
exports.registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;


        // Verificando se o usuário já existe
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ message: 'Email já cadastrado' });

        // Hash de senha
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Instanciando um novo usuário
        user = new User({ name, email, password: hashedPassword });
        await user.save();

        res.status(201).json({ message: 'Usuário criado com sucesso' });

    } catch (error) {
        //console.log(error);
        res.status(500).json({ message: 'Erro ao registrar usuário', error: error.message });
    }
}

// Definindo a lógica de login
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Verificando se o usuário existe
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'Usuário não localizado ' });

        // Verificando se a senha está correta
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Credenciais inválidas ' });

        // Gerando o token JWT contendo ID do Usuário, nome e email, método GET
        const token = jwt.sign(
            {
                id: user._id,
                name: user.name,
                email: user.email
            },
            process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao realizar login' });
    }
}

// Rota protegida, acessada apenas por usuários autenticados
exports.getUserProfile = async (req, res) => {
    try {
        res.json({ user: req.user })

        if (!user) return res.status(404).json({ message: 'Usuário não localizado' })
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar perfil do usuário' });
    }
};

// Atualiza informações pessoais
exports.updateUserProfile = async (req, res) => {
    try {
        const { name, email, currentPassword, newPassword } = req.body;
        const user = await User.findById(req.user.id);

        if (!user) return res.status(404).json({ message: 'Usuário não localizado' });

        // Atualiza nome e email
        if (name) user.name = name;
        if (email) user.email = email;

        // Atualização de senha
        if (currentPassword && newPassword) {
            const isMatch = await bcrypt.compare(currentPassword, user.password);

            if (!isMatch) return res.status(400).json({ message: 'Senha atual incorreta' });


            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(newPassword, salt);
        }

        await user.save();
        res.json({ message: 'Perfil atualizado com sucesso' });

    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar perfil' });
    }
}


// Exclusão de conta
exports.deleteUserAccount = async (req, res) => {
    try {
        const { password } = req.body;
        const user = await User.findById(req.user.id);

        if(!user) return res.status(400).json({ message: 'Usuário não encontrado' });

        // Verificar senha
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({message: 'Senha incorreta'});


        await User.findByIdAndDelete(req.user.id);

        res.json({message: 'Conta excluída com sucesso'});
    } catch (error) {
        res.status(500).json({ message: 'Erro ao excluir conta'});
    }
}