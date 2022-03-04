const express = require('express');
const { json } = require('express/lib/response');
const ProductsAPI = require('../models/products.api');

const router = express.Router();
const Products = new ProductsAPI();

router.get('/', (req, res) => {
    res.json(Products.getAll());
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    if (isNaN(+id)) return res.json({ error: 'El parametro debe ser un numero' });
    res.json(Products.getById(id));
})

router.post('/', (req, res) => {
    const { title, price, thumbnail } = req.body;
    if (!title || !price || !thumbnail) return res.json({ error: 'datos insuficientes' })
    res.json(Products.saveProduct({ title, price, thumbnail }));
})

router.put('/:id', (req, res) => {
    const { id } = req.params;
    if (isNaN(+id)) return res.json({ error: '1-El parametro debe ser un numero' });
    const { title, price, thumbnail } = req.body;
    if (!title || !price || !thumbnail) return res.json({ error: 'datos insuficientes' });
    res.json(Products.updateProduct({ title, price, thumbnail }, id));
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    if (isNaN(+id)) return res.json({ error: 'El parametro debe ser un numero' });//verificamos que el parametro sea un numero
    res.json(Products.deleteProduct(id));
})

module.exports = router;