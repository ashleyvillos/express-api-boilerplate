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
let { products } = require('../test/dummy.test')

class ProductService extends Response {
    async getAllProducts() {
        try {
            return this.RESPONSE(OK, products, OK_MESSAGE)
        } catch(err) {
            return this.RESPONSE(INTERNAL_SERVER_ERROR, {}, INTERNAL_SERVER_ERROR_MESSAGE)
        }
    }

    async getOneProduct(productId) {
        try {
            if (products.length != 0) {
                let getOneItem = products.find((item) => {
                    return item.id === productId
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

    async addProduct(requestObject) {
        try {
            products.push(requestObject)
            return this.RESPONSE(OK, products, OK_MESSAGE)
        } catch(err) {
            return this.RESPONSE(INTERNAL_SERVER_ERROR, {}, INTERNAL_SERVER_ERROR_MESSAGE)
        }
    }

    async updateProduct(productId, requestObject) {
        try {
            if (products.length != 0) {
                let findItem = products.findIndex((item) => {
                    return item.id == productId
                })
                
                if (findItem != -1) {
                    // update specific fields only
                    for (const [key, value] of Object.entries(requestObject)) {
                        products[findItem][key] = value
                    }
                    return this.RESPONSE(OK, products, OK_MESSAGE)
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

    async deleteProduct(productId) {
        try {
            if (products.length != 0) {
                let filteredProducts = products.filter((item) => {
                    return item.id != productId
                })
                products = filteredProducts
                return this.RESPONSE(OK, products, OK_MESSAGE)
            } else {
                return this.RESPONSE(NOTFOUND, [], NOTFOUND_MESSAGE)
            }
        } catch(err) {
            return this.RESPONSE(INTERNAL_SERVER_ERROR, {}, INTERNAL_SERVER_ERROR_MESSAGE)
        }
    }
}

module.exports = new ProductService