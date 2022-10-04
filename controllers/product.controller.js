const ProductService = require('../services/product.service')

class ProductController {
    async getAllProductsByStoreId() {
        let response = await ProductService.getAllProductsByStoreId()
        return response
    }

    async getProductIdWithStoreInfo(productId) {
        let response = await ProductService.getProductIdWithStoreInfo(productId)
        return response
    }

    async getAllProducts(requestObject) {
        let offset = ('offset' in requestObject && requestObject.offset) ? parseInt(requestObject.offset) : 0
        let limit = ('limit' in requestObject && requestObject.limit) ? parseInt(requestObject.limit) : 5
        let sort = ('sort' in requestObject && requestObject.sort) ? requestObject.sort : 'id'
        let order = ('order' in requestObject && requestObject.order) ? requestObject.order : 'ASC'
        let response = await ProductService.getAllProducts(offset, limit, sort, order)
        return response
    }
}

module.exports = new ProductController