// Configurando o servidor Express

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

// Conectando ao banco de dados
connectDB();

const app = express();

// Middlewares
app.use(express.json()); // Permite receber JSON no body das requisições
app.use(cors()); // Permite requisições de outros domínios

// Definindo as Rotas
app.use('/api/users', require('./routes/userRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Servidor online na porta ${PORT}`));