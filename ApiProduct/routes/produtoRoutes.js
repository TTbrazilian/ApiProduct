const express = require('express');
const router = express.Router();
const Produto = require('../models/produto');

// POST – Cadastrar produto
router.post('/', async (req, res) => {
  const { nome, descricao, cor, peso, tipo, preco } = req.body;

  if (!nome || !descricao || !cor || !peso || !tipo || !preco) {
    return res.status(422).json({ erro: 'Preencha todos os campos obrigatórios.' });
  }

  try {
    const novoProduto = await Produto.create({ nome, descricao, cor, peso, tipo, preco });
    res.status(201).json(novoProduto);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
});

// GET – Listar todos
router.get('/', async (req, res) => {
  const produtos = await Produto.find();
  res.json(produtos);
});

// GET – Buscar por ID ou nome
router.get('/:valor', async (req, res) => {
  const { valor } = req.params;
  try {
    const produto = await Produto.findOne({
      $or: [{ _id: valor }, { nome: valor }]
    });

    if (!produto) return res.status(404).json({ erro: 'Produto não encontrado.' });
    res.json(produto);
  } catch (error) {
    res.status(400).json({ erro: 'ID inválido ou produto inexistente.' });
  }
});

// PUT – Atualizar
router.put('/:id', async (req, res) => {
  try {
    const produto = await Produto.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!produto) return res.status(404).json({ erro: 'Produto não encontrado.' });
    res.json(produto);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
});

// DELETE – Remover
router.delete('/:id', async (req, res) => {
  try {
    const produto = await Produto.findByIdAndDelete(req.params.id);
    if (!produto) return res.status(404).json({ erro: 'Produto não encontrado.' });
    res.json({ message: 'Produto deletado com sucesso.' });
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
});

module.exports = router;

