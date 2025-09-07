# 📌 Backend - API de Gerenciamento de Tarefas

API RESTful para gerenciamento de tarefas desenvolvida com **Node.js**, **Express** e **MongoDB**.  
Permite criar, listar, atualizar e excluir tarefas.

---

## 🚀 Tecnologias Utilizadas
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB + Mongoose](https://mongoosejs.com/)
- [Dotenv](https://github.com/motdotla/dotenv) (variáveis de ambiente)
- [Cors](https://github.com/expressjs/cors)
- [Nodemon](https://nodemon.io/) (ambiente de desenvolvimento)

---

## 📂 Estrutura do Projeto
```
backend-tarefas/
│── config/
│   └── db.js           # Conexão com o MongoDB
│── controllers/
│   └── tarefaController.js # Lógica de CRUD de tarefas
│── models/
│   └── Tarefa.js       # Schema do MongoDB (Mongoose)
│── routes/
│   └── tarefaRoutes.js # Rotas da API
│── server.js           # Arquivo principal da aplicação
│── package.json
│── .env                # Variáveis de ambiente
│── node_modules/
```

---

## ⚙️ Configuração do Ambiente

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/backend-tarefas.git
cd backend-tarefas
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configure as variáveis de ambiente  
Crie um arquivo **.env** na raiz do projeto com o seguinte conteúdo:
```
MONGODB_URI=sua_string_de_conexao_mongodb
PORT=3000
NODE_ENV=development
```

---

## ▶️ Executando o Projeto

### Ambiente de desenvolvimento (com hot reload)
```bash
npm run dev
```

### Produção
```bash
npm start
```

Servidor disponível em:
```
http://localhost:3000
```

---

## 📖 Endpoints da API

### Health Check
```
GET /health
```
Retorna o status do servidor.

### Tarefas
| Método | Rota              | Descrição |
|--------|-------------------|-----------|
| GET    | `/api/tarefas`    | Lista todas as tarefas |
| GET    | `/api/tarefas/:id` | Busca uma tarefa pelo ID |
| POST   | `/api/tarefas`    | Cria uma nova tarefa |
| PUT    | `/api/tarefas/:id` | Atualiza uma tarefa existente |
| DELETE | `/api/tarefas/:id` | Remove uma tarefa |

---

## 📌 Modelo de Tarefa
```json
{
  "titulo": "Estudar Node.js",
  "descricao": "Praticar Express e MongoDB",
  "concluida": false,
}
```

---

## 👨‍💻 Autor

Desenvolvido por José Fernando de Lima Amorim
