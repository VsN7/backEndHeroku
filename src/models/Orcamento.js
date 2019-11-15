const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const OrcamentoSchema = new mongoose.Schema({
  cliente: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
  },
  veiculo: {
    type: String,
  },
  modelo: {
    type: String,
  },
  placa: {
    type: String,
  },
  servico: {
    type: String,
  },
  dataInicio: {
    type: String,
    required: true,
  },
  previsaoEntrega: {
    type: String,
    required: true,
  },
  valor: {
    type: Number,
    required: true,
  },
  observacoes: {
    type: String,
  },

  
});

OrcamentoSchema.plugin(mongoosePaginate);

mongoose.model('Orcamento', OrcamentoSchema);