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
<ul>
  <li>Backend em Node.js com Express.js</li>
  <li>Banco de dados MongoDB</li>
  <li>Autenticação com JWT (JSON Web Token)</li>
  <li>Criptografia de senha com bcrypt</li>
  <li>Validação de entrada com Joi</li>
  <li>Armazenamento seguro de variáveis de ambiente com dotenv<</li>
  <li>Boas práticas de estruturação de código</li>
</ul>


<h2>📂 Estrutura do Projeto</h2>h2>
<p>📦 user-auth-api</p>
<p>┣ 📂 src</p>
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
