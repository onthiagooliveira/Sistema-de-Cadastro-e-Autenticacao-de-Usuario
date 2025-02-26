# 🚀 Exercício: Sistema de Cadastro e Autenticação de Usuário
<br>
<h2>Objetivo</h2>
<p>Criar uma aplicação web onde os usuários possam:</p><br>
<p>✅ Criar uma conta</p>
<p>✅ Fazer login e receber um token JWT</p>
<p>✅ Atualizar suas informações</p>
<p>✅ Deletar sua conta</p>
<br><br>

<h2>Requisitos Técnicos</h2>
<p>Backend em Node.js com Express.js</p><br>
<p>Banco de dados PostgreSQL (ou MongoDB, se preferir)</p><br>
<p>Autenticação com JWT (JSON Web Token)</p><br>
<p>Criptografia de senha com bcrypt</p><br>
<p>Validação de entrada com Joi</p><br>
<p>Armazenamento seguro de variáveis de ambiente com dotenv</p><br>
<p>Boas práticas de estruturação de código</p><br>


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
