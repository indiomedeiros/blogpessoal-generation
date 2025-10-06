# Documentação do Projeto Blog Pessoal

## Visão Geral do Projeto

Este projeto de aula, uma API para um blog pessoal, desenvolvida com o framework NestJS. A API permite a criação, leitura, atualização e exclusão de postagens, bem como o gerenciamento de temas (categorias) e usuários. A autenticação é baseada em JSON Web Tokens (JWT), e a API é documentada com Swagger.

## Tecnologias Utilizadas

- **Framework:** [NestJS](https://nestjs.com/)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Banco de Dados:** [TypeORM](https://typeorm.io/) com suporte para [MySQL](https://www.mysql.com/), [PostgreSQL](https://www.postgresql.org/) e [SQLite](https://www.sqlite.org/index.html)
- **Autenticação:** [Passport.js](http://www.passportjs.org/) com estratégias [JWT](https://jwt.io/) e local
- **Documentação da API:** [Swagger](https://swagger.io/)
- **Validação de Dados:** [class-validator](https://github.com/typestack/class-validator) e [class-transformer](https://github.com/typestack/class-transformer)
- **Testes:** [Jest](https://jestjs.io/)
- **Linting e Formatação:** [ESLint](https://eslint.org/) e [Prettier](https://prettier.io/)

## Estrutura do Projeto

O projeto é organizado em módulos, cada um com sua própria responsabilidade:

- **`AppModule`:** O módulo raiz da aplicação.
- **`AuthModule`:** Responsável pela autenticação e autorização dos usuários.
- **`UsuarioModule`:** Gerencia as operações de CRUD (Criar, Ler, Atualizar, Deletar) para os usuários.
- **`PostagemModule`:** Gerencia as operações de CRUD para as postagens do blog.
- **`TemaModule`:** Gerencia as operações de CRUD para os temas (categorias) das postagens.
- **`DataModule`:** Módulo responsável pela configuração e conexão com o banco de dados.

## Instalação e Configuração

1.  **Clone o repositório:**

    ```bash
    git clone <url-do-repositorio>
    cd <nome-do-diretorio>
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    ```

3.  **Execute o projeto:**
    - **Modo de desenvolvimento:**

      ```bash
      npm run start:dev
      ```

    - **Modo de produção:**

      ```bash
      npm run start:prod
      ```

## Documentação da API

A documentação da API é gerada automaticamente com o Swagger e pode ser acessada em:

[http://localhost:4000/swagger](http://localhost:4000/swagger)

## Testes

Para executar os testes, utilize os seguintes comandos:

- **Testes unitários:**

  ```bash
  npm run test
  ```

- **Testes end-to-end (e2e):**

  ```bash
  npm run test:e2e
  ```
