const mongoose = require('mongoose');

const Imagem = mongoose.model('Imagem');

module.exports = {
  async index(req, res) {
    const imagem = await Imagem.find(req.query);
    return res.json(imagem);
  },

  async show(req, res) {
    const imagem = await Imagem.findById(req.params.id);

    return res.json(imagem);
  },

  async listaImagens(req, res) {
    const imagem = await Imagem.find({ cliente_id: req.params.cliente_id});
    return res.json(imagem);
  },

  async store(req, res) {
    const imagem = await Imagem.create(req.body);
    return res.json(imagem);
  },

  async update(req, res) {
    const imagem = await Imagem.findByIdAndUpdate(req.params.id, req.body, { new: true });

    return res.json(imagem);
  },

  async destroy(req, res) {
    await Imagem.findByIdAndRemove(req.params.id);

    return res.send();
  },
};