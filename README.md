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
<br>


<h2>📂 Estrutura do Projeto</h2>
<p>📦 sistema-de-cadastro-e-autenticacao</p>
<p>┣ 📂 src</p>
<p>┃ ┣ 📂 controllers → Lógica das rotas</p>
<p>┃ ┣ 📂 models → Definição dos modelos do banco</p>
<p>┃ ┣ 📂 routes → Configuração das rotas</p>
<p>┃ ┣ 📂 middleware → Middleware de autenticação</p>
<p>┃ ┣ 📂 config → Configuração do banco e do servidor</p>
<p>┃ ┣ 📜 server.js → Inicia o servidor</p>
<p>┃ ┣ 📜 app.js → Configuração do express</p>
<p>┣ 📂 frontend → Configuração do banco e do servidor</p>
<p>┣ 📜 .env → Variáveis de ambiente</p>
<p>┣ 📜 .gitignore</p>
<p>┣ 📜 package.json</p>
<p>┣ 📜 README.md</p>
