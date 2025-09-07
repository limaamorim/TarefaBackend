require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

// Importar rotas
const tarefaRoutes = require('./routes/tarefaRoutes');

// Inicializar aplicação Express
const app = express();

// Conectar ao banco de dados
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rotas
app.use('/api/tarefas', tarefaRoutes);

// Rota de health check
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    mensagem: 'Servidor está em execução',
    horario: new Date().toISOString()
  });
});

// Rota padrão para endpoints não encontrados
app.use('*', (req, res) => {
  res.status(404).json({ 
    erro: 'Endpoint não encontrado',
    mensagem: `O endpoint solicitado ${req.originalUrl} não existe.`
  });
});

// Middleware de tratamento de erros
app.use((error, req, res, next) => {
  console.error('Erro:', error);
  res.status(error.status || 500).json({
    erro: error.message || 'Erro interno do servidor',
    ...(process.env.NODE_ENV === 'development' && { pilha: error.stack })
  });
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});

module.exports = app;
