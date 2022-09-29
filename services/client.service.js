const Response = require('../utils/response.utils')
const { OK, CREATED, UPDATE, NOTFOUND, BADREQUEST, INTERNAL_SERVER_ERROR } = require('../utils/constants.utils')
const { 
    OK_MESSAGE, 
    CREATED_MESSAGE, 
    UPDATE_MESSAGE, 
    NOTFOUND_MESSAGE, 
    BADREQUEST_MESSAGE, 
    INTERNAL_SERVER_ERROR_MESSAGE 
} = require('../utils/message.utils')
let { clients } = require('../test/dummy.test')

class ClientService extends Response {
    async getAllClients() {
        try {
            return this.RESPONSE(OK, clients, OK_MESSAGE)
        } catch(err) {
            return this.RESPONSE(INTERNAL_SERVER_ERROR, {}, INTERNAL_SERVER_ERROR_MESSAGE)
        }
    }

    async getOneClient(clientId) {
        try {
            if (clients.length != 0) {
                let getOneItem = clients.find((item) => {
                    return item.id === clientId
                })
                
                if (getOneItem) {
                    return this.RESPONSE(OK, getOneItem, OK_MESSAGE)
                } else {
                    return this.RESPONSE(NOTFOUND, {}, NOTFOUND_MESSAGE)
                }
            } else {
                return this.RESPONSE(NOTFOUND, [], NOTFOUND_MESSAGE)
            }
        } catch(err) {
            return this.RESPONSE(INTERNAL_SERVER_ERROR, {}, INTERNAL_SERVER_ERROR_MESSAGE)
        }
    }

    async addClient(requestObject) {
        try {
            clients.push(requestObject)
            return this.RESPONSE(OK, clients, OK_MESSAGE)
        } catch(err) {
            return this.RESPONSE(INTERNAL_SERVER_ERROR, {}, INTERNAL_SERVER_ERROR_MESSAGE)
        }
    }

    async updateClient(clientId, requestObject) {
        try {
            if (clients.length != 0) {
                let findItem = clients.findIndex((item) => {
                    return item.id == clientId
                })
                
                if (findItem != -1) {
                    // update specific fields only
                    for (const [key, value] of Object.entries(requestObject)) {
                        clients[findItem][key] = value
                    }
                    return this.RESPONSE(OK, clients, OK_MESSAGE)
                } else {
                    return this.RESPONSE(NOTFOUND, [], NOTFOUND_MESSAGE)    
                }
            } else {
                return this.RESPONSE(NOTFOUND, [], NOTFOUND_MESSAGE)
            }
        } catch(err) {
            return this.RESPONSE(INTERNAL_SERVER_ERROR, {}, INTERNAL_SERVER_ERROR_MESSAGE)
        }
    }

    async deleteClient(clientId) {
        try {
            if (clients.length != 0) {
                let filteredClients = clients.filter((item) => {
                    return item.id != clientId
                })
                clients = filteredClients
                return this.RESPONSE(OK, filteredClients, OK_MESSAGE)
            } else {
                return this.RESPONSE(NOTFOUND, [], NOTFOUND_MESSAGE)
            }
        } catch(err) {
            return this.RESPONSE(INTERNAL_SERVER_ERROR, {}, INTERNAL_SERVER_ERROR_MESSAGE)
        }
    }
}

module.exports = new ClientService