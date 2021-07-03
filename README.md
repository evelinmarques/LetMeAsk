<p align="center">
<img src="https://github.com/rocketseat-education/nlw-06-reactjs/raw/master/.github/logo.svg/">
</p>

<h1 align="center"> 
  Resultado Visual Esperado: 
</h1>

<img src="https://user-images.githubusercontent.com/56482367/124347413-0e498a80-dbbb-11eb-81a9-efcf3955ac01.png">

<img src="https://user-images.githubusercontent.com/56482367/124347433-29b49580-dbbb-11eb-940c-10eb3c0fa90f.png">

<img src="https://user-images.githubusercontent.com/56482367/124347451-4cdf4500-dbbb-11eb-9311-6e100b29ebd0.png">

<img src="https://user-images.githubusercontent.com/56482367/124347483-6da79a80-dbbb-11eb-89e6-ec18f47d6e4c.png">

<h1 align="center"> 
  💻 Como rodar o projeto: 
</h1>
<p align="center">
    Após clonar o projeto, acesse ele via seu terminal e execute os comandos:

    yarn 
  
  ```
yarn start
```
O app estará disponível no seu browser pelo endereço http://localhost:3000

Lembrando que será necessário criar uma conta no Firebase e um projeto para disponibilizar um Realtime Database.

Um exemplo de regras compatíveis para o Realtime Database seria: 
```
{
  "rules": {
   	"rooms": {
      ".read": false,
      ".write": "auth != null",
      "$roomId": {
        ".read": true,
        ".write": "auth != null && (!data.exists() || data.child('authorId').val() == auth.id)",
          "questions": {
            ".read": true,
              ".write": "auth != null && (!data.exists() || data.parent().child('authorId').val() == auth.id)",
                "likes":{
                  ".read": true,
                    ".write": "auth != null && (!data.exists() || data.child('authorId').val() == auth.id)",
                }
          }
      }
    }
  }
}
```

O arquivo firebase.ts também deverá ser modificado e substituido com as configurações do seu projeto no firebase ou deverá ser criado o .env.local no projeto conforme o exemplo abaixo: 
```
# Firebase 
REACT_APP_API_KEY="FIREBASE CONFIG AQUI"
REACT_APP_AUTH_DOMAIN="FIREBASE CONFIG AQUI"
REACT_APP_DATABASE_URL="FIREBASE CONFIG AQUI"
REACT_APP_PROJECT_ID="FIREBASE CONFIG AQUI"
REACT_APP_STORAGE_BUCKET="FIREBASE CONFIG AQUI"
REACT_APP_MESSAGING_SENDER_ID="FIREBASE CONFIG AQUI"
REACT_APP_APP_ID="FIREBASE CONFIG AQUI"
```
</p>
<h1 align="center"> 
  🛠 Tecnologias: 
</h1>
<p align="center">
   React.js •
   TypeScript •
   Firebase •
   Sass •
</p>

<p align="center">
  Feito com 💜
  por <a href="https://www.linkedin.com/in/evelinmarquess/">Évelin Marques</a>
</p>
