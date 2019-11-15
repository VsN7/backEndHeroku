const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  senha: {
    type: String,
    required: true,
  },
  nome: {
    type: String,
    required: true,
  },
  
});

UserSchema.plugin(mongoosePaginate);

mongoose.model('User', UserSchema);