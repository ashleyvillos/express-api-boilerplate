const ClientService = require('../services/client.service')

class ClientController {
    async getAllClients() {
        return await ClientService.getAllClients()
    }

    async getOneClient(clientId) {
        return await ClientService.getOneClient(clientId)
    }

    async addClient(requestObject) {
        return await ClientService.addClient(requestObject)
    }

    async updateClient(clientId, requestObject) {
        return await ClientService.updateClient(clientId, requestObject)
    }

    async deleteClient(clientId) {
        return await ClientService.deleteClient(clientId)
    }
}

module.exports = new ClientController