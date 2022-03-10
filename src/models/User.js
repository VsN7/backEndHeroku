const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  senha: {
    type: String,
    required: true,
  },
  nome: {
    type: String,
  },
  login: {
    type: String,
  },
  
});

UserSchema.plugin(mongoosePaginate);

mongoose.model('User', UserSchema);