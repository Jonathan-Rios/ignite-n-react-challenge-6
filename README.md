<h1 align="center">Ignite - React - Desafio 06 - Book Wise</h1>

<p align="center">
  <img 
    src="https://img.shields.io/badge/React-%5E18.2.6-blue" 
    alt="React Ver. ^18.2.0"
  />
   <img 
    src="https://img.shields.io/badge/NextJS-%5E13.4.2-black" 
    alt="NextJS Ver. ^13.4.2"
  />
  <img 
    src="https://img.shields.io/badge/Typescript-%5E5.0.4-blue"
    alt="Typescript Ver. 5.0.4" 
  />
  <img
    src="https://img.shields.io/badge/Ignite-2023-green" 
    alt="Ignite-2023"
  />
  <img 
    alt="License"
    src="https://img.shields.io/static/v1?label=license&message=MIT&color=E51C44&labelColor=0A1033"
  />
</p>

<div align="center">

  ![Last commit](https://img.shields.io/github/last-commit/Jonathan-Rios/ignite-n-react-challenge-6?color=4DA1CD 'Last commit') &nbsp;
  ![Repo size](https://img.shields.io/github/repo-size/Jonathan-Rios/ignite-n-react-challenge-6?color=4DA1CD 'Repo size') &nbsp;
  ![Languages](https://img.shields.io/github/languages/count/Jonathan-Rios/ignite-n-react-challenge-6?color=4DA1CD 'Languages') &nbsp;

</div>

<br>

<h3 align="center">Imagem prévia da aplicação</h3>

![cover](.github/project-preview.png?style=flat)

<br>

## 💻 Projeto
Essa aplicação foi desenvolvida para estudos seguindo os ensinamentos da **[Rocketseat](https://www.rocketseat.com.br/)** no curso Ignite **[Ignite](https://www.rocketseat.com.br/ignite)** .

Essa aplicação aborda:  

Contendo anotações e comentários particulares servindo de consulta para novos projetos.

## 🧪 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [React](https://reactjs.org)
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Stitches](https://stitches.dev/)


## 🔗 Link do projeto
Se quiser ver o projeto no ar, clique [aqui](https://coffe-delivery-jrs.vercel.app).

## 🚀 Como executar

Clone o projeto e acesse a pasta do mesmo.

```bash
$ git clone https://github.com/Jonathan-Rios/ignite-n-react-challenge-6.git

$ cd ignite-n-react-challenge-6
```

Para iniciá-lo, siga os passos abaixo:
```bash
# Instalar as dependências
$ npm install

# Iniciar o projeto
$ npm run dev
```
- O app estará disponível no seu browser pelo endereço http://localhost:3000.
 

## 📝 License

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE.md) para mais detalhes.

<br />




## 📓 Anotações pessoais

<h3>Exemplo de descrição </h3>

```bash
 
  ➜ npx create-next-app@latest       

  ✔ What is your project named? … ignite-n-react-challenge-6
  ✔ Would you like to use TypeScript with this project? … Yes
  ✔ Would you like to use ESLint with this project? … Yes
  ✔ Would you like to use Tailwind CSS with this project? … No
  ✔ Would you like to use `src/` directory with this project? … Yes
  ✔ Use App Router (recommended)? … No
  ✔ Would you like to customize the default import alias? … No

  ➜ npm i @next/font 
  ➜ npm i @stitches/react

  ➜ npm i uuid
  ➜ npm i -D @types/uuid
  ➜ npm i -D ts-node typescript @types/node
  ➜ npm i prisma -D
  ➜ npm i @prisma/client sqlite3


  # Para rodar o arquivo de seed em prisma/seed.ts foi necessário usar o comando 
  # "npx prisma db seed" que pediu a instalação
  ➜ npm i -D ts-node typescript @types/node
  ➜ npm i phosphor-react
  ➜ npm i axios
  ➜ npm i dayjs
  
  ➜ npm i next-auth
  ➜ npm i @next-auth/prisma-adapter

  ➜ npm i react-toastify
  ➜ npm i react-hook-form 
  ➜ npm i @hookform/resolvers 
  ➜ npm i zod
```


<br />

<h3>Instalando o ReactQuery </h3>

Instale a biblioteca

```bash
  ➜ npm i @tanstack/react-query
```

Crie na src uma pasta para manter as configurações, nesse projeto foi a pasta: "src/lib/react-query.ts"

```bash
  #Usando a forma mais simples, o arquivo só possui essas 2 linhas
  import { QueryClient } from "@tanstack/react-query";

  export const queryClient = new QueryClient();
```

Adicione o provider e a config no arquivo "src/pages/_app.page.tsx"

```bash
    # Importações necessárias
    import { QueryClientProvider } from "@tanstack/react-query";
    import { queryClient } from "@/libs/react-query";


    # Envolva o component com o provider do ReactQuery
    <QueryClientProvider client={queryClient}>
      # <Component {...pageProps} />
    </QueryClientProvider>
    ...
```

---
<br />

<a href="https://github.com/Jonathan-Rios">
 <img src="https://github.com/Jonathan-Rios.png" width="100px;" alt="" style="border-radius:50%" />
 <br />
 <sub><b>Jonathan Rios Sousa</b></sub></a>

💠 NeverStopLearning 💠
 

[![Linkedin Badge](https://img.shields.io/badge/-Jonathan-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/jonathan-rios-sousa-19b3431b6/)](https://www.linkedin.com/in/jonathan-rios-sousa-19b3431b6/) 
[![Gmail Badge](https://img.shields.io/badge/-jonathan.riosousa@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:jonathan.riosousa@gmail.com)](mailto:jonathan.riosousa@gmail.com)