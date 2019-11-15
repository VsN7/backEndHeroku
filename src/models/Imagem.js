const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');


var imagens = {
  url: { type: String },
};

const ImagemSchema = new mongoose.Schema({
  url: {
    type: String,
  },
  cliente_id: {
    type: String
  },
  data: {
    type: Date,
    default: Date.now
  },
  
});

ImagemSchema.plugin(mongoosePaginate);

mongoose.model('Imagem', ImagemSchema);