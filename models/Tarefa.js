const mongoose = require('mongoose');

const TarefaSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: [true, 'Título é obrigatório'],
    trim: true, 
    maxlength: [100, 'Título não pode ter mais de 100 caracteres']
  },
  descricao: {
    type: String,
    trim: true,
    maxlength: [500, 'Descrição não pode ter mais de 500 caracteres']
  },
  concluida: {
    type: Boolean,
    default: false
  },
  categoria: {
    type: String,
    trim: true,
    maxlength: [50, 'Categoria não pode ter mais de 50 caracteres']
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

module.exports = mongoose.model('Tarefa', TarefaSchema);
