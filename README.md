# Congresso AEICBAS

### Correr o projeto

1. Instalar NodeJS
2. Correr npm install na root do projeto
3. Criar um ficheiro .env Existe o ficheiro .env.example que pode servir de exemplo
4. Abrir dois terminais: 
    a) Num deles correr npm run server:dev para arrancar o servidor. 
    b) No outro correr npm run client:dev para arrancar o React Native


### Editar a base de dados

Na pasta do projeto

1. cd db_scripts
2. node populate_db.js

Para apenas alterar algumas das coleções existentes (Article, Sponsor, Lecture), escpecificar como argumentos. Por exemplo, ```node populate_db.js Article Sponsor```
