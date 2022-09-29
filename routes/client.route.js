const express = require('express')
const ClientRouter = express.Router()
const ClientController = require('../controllers/client.controller')

ClientRouter.get('/client', async (req, res) => {
    let response = await ClientController.getAllClients()
    return res.status(200).send({response})
})

ClientRouter.get('/client/:id', async (req, res) => {
    let response = await ClientController.getOneClient(parseInt(req.params.id))
    return res.status(200).send({response})
})

ClientRouter.post('/client', async (req, res) => {
    let response = await ClientController.addClient(req.body)
    return res.status(200).send(response)
})

ClientRouter.put('/client/:id', async (req, res) => {
    let clientId = req.params.id
    let requestObject = req.body
    let response = await ClientController.updateClient(parseInt(clientId), requestObject)
    return res.status(200).send(response)
})

ClientRouter.delete('/client/:id', async (req, res) => {
    let response = await ClientController.deleteClient(parseInt(req.params.id))
    return res.status(200).send(response)
})

module.exports = ClientRouter