# 🚀 Exercício: Sistema de Cadastro e Autenticação de Usuário
<br>
<h2>Objetivo</h2>
Criar uma aplicação web onde os usuários possam:
✅ Criar uma conta<br>
✅ Fazer login e receber um token JWT
✅ Atualizar suas informações
✅ Deletar sua conta

Requisitos Técnicos
Backend em Node.js com Express.js
Banco de dados PostgreSQL (ou MongoDB, se preferir)
Autenticação com JWT (JSON Web Token)
Criptografia de senha com bcrypt
Validação de entrada com Joi
Armazenamento seguro de variáveis de ambiente com dotenv
Boas práticas de estruturação de código


📂 Estrutura do Projeto
📦 user-auth-api
┣ 📂 src
┃ ┣ 📂 controllers → Lógica das rotas
┃ ┣ 📂 models → Definição dos modelos do banco
┃ ┣ 📂 routes → Configuração das rotas
┃ ┣ 📂 middleware → Middleware de autenticação
┃ ┣ 📂 config → Configuração do banco e do servidor
┃ ┣ 📜 server.js → Entrada do servidor
┣ 📜 .env → Variáveis de ambiente
┣ 📜 .gitignore
┣ 📜 package.json
┣ 📜 README.md
