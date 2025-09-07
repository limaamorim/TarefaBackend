const Tarefa = require('../models/Tarefa');

//Obter todas as tarefas
//GET /api/tarefas
const getTarefas = async (req, res) => {
  try {
    const tarefas = await Tarefa.find();
    res.status(200).json(tarefas);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar tarefas', error: error.message });
  }
};

//Obter uma tarefa por ID
//GET /api/tarefas/:id
const getTarefaById = async (req, res) => {
  try {
    const tarefa = await Tarefa.findById(req.params.id);
    if (!tarefa) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }
    res.status(200).json(tarefa);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar tarefa', error: error.message });
  }
};

//Criar nova tarefa
//POST /api/tarefas
const createTarefa = async (req, res) => {
  try {
    const tarefa = await Tarefa.create(req.body);
    res.status(201).json(tarefa);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao criar tarefa', error: error.message });
  }
};

//Atualizar tarefa
//PUT /api/tarefas/:id
const updateTarefa = async (req, res) => {
  try {
    const tarefa = await Tarefa.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!tarefa) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }

    res.status(200).json(tarefa);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao atualizar tarefa', error: error.message });
  }
};

//Deletar tarefa
//DELETE /api/tarefas/:id
const deleteTarefa = async (req, res) => {
  try {
    const tarefa = await Tarefa.findByIdAndDelete(req.params.id);
    if (!tarefa) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }
    res.status(200).json({ message: 'Tarefa removida com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar tarefa', error: error.message });
  }
};

module.exports = {
  getTarefas,
  getTarefaById,
  createTarefa,
  updateTarefa,
  deleteTarefa
};
