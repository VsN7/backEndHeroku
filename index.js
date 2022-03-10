const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const bodyParser = require('body-parser');

// Iniciando o App
const app = express();
//app.use(express.json());d
app.use(cors());


app.use(express.json({ limit: '50mb' }));

//app.use(bodyParser.json({limit: '10mb', extended: true}))
//app.use(bodyParser.urlencoded({limit: '10mb', extended: true}))

 //app.use(bodyParser.urlencoded({extended: true, limit: '50mb',extend: true, parameterLimit:50000}));
 

mongoose
  .connect(
    'mongodb+srv://vitor:533596vsn@cluster0-mmqlk.mongodb.net/tabaratoserver?retryWrites=true&w=majority',
    //'mongodb+srv://Wilson:152029@cluster0-fddx8.mongodb.net/node-api?retryWrites=true',
      // process.env.MONGO_URL, //variavel de ambiente
    {
      useNewUrlParser: true
    })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

requireDir('./src/models');

// Rotas
app.use('/api', require('./src/routes'));

app.listen(process.env.PORT || 3000);