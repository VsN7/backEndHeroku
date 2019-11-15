const mongoose = require('mongoose');

const Orcamento = mongoose.model('Orcamento');

module.exports = {
  async index(req, res) {
    const orcamento = await Orcamento.find(req.query);
    return res.json(orcamento);
  },

  async show(req, res) {
    const orcamento = await Orcamento.findById(req.params.id);

    return res.json(orcamento);
  },

  async verificar(req, res) {
    console.log(req.params.email);
    
    const orcamento = await Orcamento.findOne({ email: req.params.email});

    return res.json(orcamento);
  },

  async store(req, res) {
    const orcamento = await Orcamento.create(req.body);
    return res.json(orcamento);
  },

  async update(req, res) {
    const orcamento = await Orcamento.findByIdAndUpdate(req.params.id, req.body, { new: true });

    return res.json(orcamento);
  },

  async destroy(req, res) {
    await Orcamento.findByIdAndRemove(req.params.id);

    return res.send();
  }
};