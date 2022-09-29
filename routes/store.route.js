const express = require('express')
const StoreRouter = express.Router()
const StoreController = require('../controllers/store.controller')

StoreRouter.get('/store', async (req, res) => {
    let response = await StoreController.getAllStore()
    return res.status(200).send({response})
})

StoreRouter.get('/store/:id', async (req, res) => {
    let response = await StoreController.getOneStore(parseInt(req.params.id))
    return res.status(200).send({response})
})

StoreRouter.post('/store', async (req, res) => {
    let response = await StoreController.addStore(req.body)
    return res.status(200).send(response)
})

StoreRouter.put('/store/:id', async (req, res) => {
    let clientId = req.params.id
    let requestObject = req.body
    let response = await StoreController.updateStore(parseInt(clientId), requestObject)
    return res.status(200).send(response)
})

StoreRouter.delete('/store/:id', async (req, res) => {
    let response = await StoreController.deleteStore(parseInt(req.params.id))
    return res.status(200).send(response)
})

module.exports = StoreRouter