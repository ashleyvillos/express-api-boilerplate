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
let { store } = require('../test/dummy.test')

class StoreService extends Response {
    async getAllStore() {
        try {
            return this.RESPONSE(OK, store, OK_MESSAGE)
        } catch(err) {
            return this.RESPONSE(INTERNAL_SERVER_ERROR, {}, INTERNAL_SERVER_ERROR_MESSAGE)
        }
    }

    async getOneStore(storeId) {
        try {
            if (store.length != 0) {
                let getOneItem = store.find((item) => {
                    return item.id === storeId
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

    async addStore(requestObject) {
        try {
            store.push(requestObject)
            return this.RESPONSE(OK, store, OK_MESSAGE)
        } catch(err) {
            return this.RESPONSE(INTERNAL_SERVER_ERROR, {}, INTERNAL_SERVER_ERROR_MESSAGE)
        }
    }

    async updateStore(storeId, requestObject) {
        try {
            if (store.length != 0) {
                let findItem = store.findIndex((item) => {
                    return item.id == storeId
                })
                
                if (findItem != -1) {
                    // update specific fields only
                    for (const [key, value] of Object.entries(requestObject)) {
                        store[findItem][key] = value
                    }
                    return this.RESPONSE(OK, store, OK_MESSAGE)
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

    async deleteStore(storeId) {
        try {
            if (store.length != 0) {
                let filteredStore = store.filter((item) => {
                    return item.id != storeId
                })
                store = filteredStore
                return this.RESPONSE(OK, store, OK_MESSAGE)
            } else {
                return this.RESPONSE(NOTFOUND, [], NOTFOUND_MESSAGE)
            }
        } catch(err) {
            return this.RESPONSE(INTERNAL_SERVER_ERROR, {}, INTERNAL_SERVER_ERROR_MESSAGE)
        }
    }
}

module.exports = new StoreService