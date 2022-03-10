const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const OrcamentoSchema = new mongoose.Schema({
  cliente: {
    type: String,
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
  },
  previsaoEntrega: {
    type: String,
  },
  valor: {
    type: Number,
  },
  observacoes: {
    type: String,
  },

  
});

OrcamentoSchema.plugin(mongoosePaginate);

mongoose.model('Orcamento', OrcamentoSchema);