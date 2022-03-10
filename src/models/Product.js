const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProductSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  imagem: {
    type: String,
    required: true,
  },
  data: {
    type: Date,
    default: Date.now
  },

  produto: {
    type: String,
  },
  valor: {
    type: String,
  },
  local: {
    type: String,
  }


});


ProductSchema.plugin(mongoosePaginate);

mongoose.model('Product', ProductSchema);