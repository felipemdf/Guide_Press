# Guide_Press

Painel administrativo de um blog de artigos criada durante o curso [Formação Node.js](https://www.udemy.com/course/formacao-nodejs/) do [Guia do Programador](https://www.udemy.com/user/guia-do-programador/) afim de aplicar o conhecimento adquirido sobre arquiterua MVC e através da tecnologia Node.js.

## :construction: Status <br/>
🚀 Concluído

## :toolbox: Tecnologias
* [Node.js](https://nodejs.org/pt-br/)
* [Express](https://expressjs.com/pt-br/)
* [EJS](https://ejs.co)
* [Bootstrap](https://getbootstrap.com)
* [sequelize](https://sequelize.org)
* [mysql](https://www.mysql.com)

## :computer: Features
:white_check_mark: Painel do usuário que exibe o título dos artigos em uma estrutura de paginação<br/>
:white_check_mark: Painel administrativo que exibe as funcionalidades de adição, exclusão e edição de artigos e categorias <br/>
:white_check_mark: Painel de login <br/>

## :hammer_and_wrench: Preparando o ambiente
```   
# Clone este repositório:
 $ git clone <https://github.com/felipemdf/Guide_Press.git>

# Acesse a pasta do projeto no terminal/cmd 
 $ cd Guide-Press-main

#Inicie o gerenciador de pacotes npm: 
 $ npm init

# Instale o pacote Express para criação das rotas: <br/>
 $ npm install express --save

# Instale o pacote EJS responsavel pela view engine: <br/>
 $ npm install ejs 

# Instale a ferramenta ORM Sequelize: 
 $ npm install --save sequelize
 
# Instale o Bootstrap:
 $ npm install bootstrap@next
 
# Instale o SlugiFy:
 $ npm install --save slugify

# Instale o Express Session:
 $ npm install --save express-session
 
 # Instale o bcryptjs:
 $ npm install --save bcrypt
 
# Instale o pacote de dependências do mySQL:
 $ npm install --save mysql2

# Opcionalmente pode-se instalar o Nodemon para monitorar e atualizar automaticamente o servidor:
 $ npm install -g nodemon
 
# Execute a aplicação
 $ nodemon index.js

# O servidor inciará na porta:8080 - acesse <http://localhost:8080> 
```
