const express = require('express')
const ProductRouter = express.Router()
const ProductController = require('../controllers/product.controller')

ProductRouter.get('/product', async (req, res) => {
    let response = await ProductController.getAllProducts()
    return res.status(200).send({response})
})

ProductRouter.get('/product/:id', async (req, res) => {
    let response = await ProductController.getOneProduct(parseInt(req.params.id))
    return res.status(200).send({response})
})

ProductRouter.post('/product', async (req, res) => {
    let response = await ProductController.addProduct(req.body)
    return res.status(200).send(response)
})

ProductRouter.put('/product/:id', async (req, res) => {
    let productId = req.params.id
    let requestObject = req.body
    let response = await ProductController.updateProduct(parseInt(productId), requestObject)
    return res.status(200).send(response)
})

ProductRouter.delete('/product/:id', async (req, res) => {
    let response = await ProductController.deleteProduct(parseInt(req.params.id))
    return res.status(200).send(response)
})

module.exports = ProductRouter