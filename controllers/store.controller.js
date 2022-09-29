const StoreService = require('../services/store.service')

class StoreController {
    async getAllStore() {
        return await StoreService.getAllStore()
    }

    async getOneStore(storeId) {
        return await StoreService.getOneStore(storeId)
    }

    async addStore(requestObject) {
        return await StoreService.addStore(requestObject)
    }

    async updateStore(storeId, requestObject) {
        return await StoreService.updateStore(storeId, requestObject)
    }

    async deleteStore(storeId) {
        return await StoreService.deleteStore(storeId)
    }
}

module.exports = new StoreController