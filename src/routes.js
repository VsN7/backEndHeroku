const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');
const UserController = require('./controllers/UserController');
const OrcamentoController = require('./controllers/OrcamentoController');
const ImagemController = require('./controllers/ImagemController');



routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);


routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.destroy);
routes.get('/users/:email', UserController.verificar);

routes.get('/orcamentos', OrcamentoController.index);
routes.post('/orcamentos', OrcamentoController.store);
routes.put('/orcamentos/:id', OrcamentoController.update);
routes.delete('/orcamentos/:id', OrcamentoController.destroy);
routes.get('/orcamentos/:email', OrcamentoController.verificar);

routes.get('/imagens', ImagemController.index);
routes.post('/imagens', ImagemController.store);
routes.put('/imagens/:id', ImagemController.update);
routes.delete('/imagens/:id', ImagemController.destroy);
routes.get('/imagens/:cliente_id', ImagemController.listaImagens);
routes.get('/imagens/id/:id', ImagemController.show);

module.exports = routes;