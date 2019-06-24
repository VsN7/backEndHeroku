const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.utlencoded({ extended: true, limit: '10mb' }));

mongoose
  .connect(
     //'mongodb+srv://eduardo:ryer@cluster0-uygvn.mongodb.net/tabarato?retryWrites=true&w=majority',
    'mongodb+srv://vitor:533596vsn@cluster0-mmqlk.mongodb.net/test?retryWrites=true&w=majority',
    // 'mongodb+srv://<USUARIO>:<SENHA>@cluster0-plxve.mongodb.net/node-api?retryWrites=true',
    {
      useNewUrlParser: true
    })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

requireDir('./src/models');

// Rotas
app.use('/api', require('./src/routes'));

app.listen(process.env.PORT || 3000);