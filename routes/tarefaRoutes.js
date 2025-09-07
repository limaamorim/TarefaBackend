const express = require('express');
const router = express.Router();
const {
  getTarefas,
  getTarefaById,
  createTarefa,
  updateTarefa,
  deleteTarefa
} = require('../controllers/tarefaController');

// Rotas
router.get('/', getTarefas);
router.get('/:id', getTarefaById);
router.post('/', createTarefa);
router.put('/:id', updateTarefa);
router.delete('/:id', deleteTarefa);

module.exports = router;
