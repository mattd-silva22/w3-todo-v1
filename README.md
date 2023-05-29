# W3 TO.DO

Olá! esse meu mono repositório para o desafio da *Lista de Tarefas FullStack*. o projeto está divido em duas pasta, backend e frontend. Essa aplicação permite gerenciar tarefas, você pode criar, atualizar, excluir e recuperar tarefas. Logo abaixo você pode encontrar a documentação do projeto.
  > Clone este repositório usando o GIT
  
  `git clone https://github.com/mattd-silva22/w3-todo-v1.git`

## Backend
> Para executar o servidor execute os seguinte comandos dentro da pasta raiz do repositório 

`$ cd ./backend`
`$ yarn`
`$ yarn start:dev`
> O servidor node vai ficar disponível no localhost na porta 3000


## Frontend

> Para executar o cliente execute os seguinte comandos dentro da pasta raiz do repositório 

`$ cd ./frontend`
`$ yarn`
`$ yarn start`
> O frontend vai node disponível no localhost na porta 3001
Para a construção do Frontend**offline!**


# Documentação da API
### URL Base

A URL base para a API é `http://localhost:3000`.

### Objeto Tarefa

Um objeto de tarefa possui as seguintes propriedades:

-   `id` (string): O identificador único da tarefa.
-   `titulo` (string): O título da tarefa.
-   `concluida` (boolean): Indica se a tarefa está concluída (`true`) ou não (`false`).

### Pontos de extremidade

#### Obter todas as tarefas

-   URL: `/`
-   Método: `GET`
-   Descrição: Recupera todas as tarefas.
-   Exemplo do corpo da resposta:



`{
 "tasks": [
    {
      "id": "1",
      "titulo": "Tarefa 1",
      "concluida": false
    },
    {
      "id": "2",
      "titulo": "Tarefa 2",
      "concluida": true
    }
  ]
}` 

#### Criar uma tarefa

-   URL: `/`
-   Método: `POST`
-   Descrição: Cria uma nova tarefa.
-   Exemplo do corpo da requisição:



`{
  "task": {
    "id": "3",
    "titulo": "Tarefa 3",
    "concluida": false
  }
}` 

-   Exemplo do corpo da resposta:



`{
  "message": "tarefa criada",
  "id": "3"
}` 

#### Atualizar uma tarefa

-   URL: `/`
-   Método: `PATCH`
-   Descrição: Atualiza uma tarefa existente.
-   Exemplo do corpo da requisição:


`{
  "task": {
    "id": "3",
    "titulo": "Tarefa 3 Atualizada",
    "concluida": true
  }
}` 

-   Exemplo do corpo da resposta:



`{
  "message": "tarefa atualizada"
}` 

#### Excluir uma tarefa

-   URL: `/:id`
-   Método: `DELETE`
-   Descrição: Exclui uma tarefa com o ID especificado.
-   Exemplo do corpo da resposta:


`{
  "message": "Tarefa deletada"
}` 

### Respostas de Erro

-   Código de status: `400`
    
    -   Exemplo do corpo da resposta:
    

    
    `{
      "message": "Requisição inválida"
    }` 
    
-   Código de status: `404`
    
    -   Exemplo do corpo da resposta:
    
 
    
    `{
      "message": "Tarefa não encontrada"
    }` 
    
-   Código de status: `500`
    
    -   Exemplo do corpo da resposta:
    
   
    
    `{
      "message": "Erro no servidor"
    }` 
    


