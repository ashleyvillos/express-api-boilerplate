const ProductService = require('../services/product.service')

class ProductController {
    async getAllProducts() {
        return await ProductService.getAllProducts()
    }

    async getOneProduct(productId) {
        return await ProductService.getOneProduct(productId)
    }

    async addProduct(requestObject) {
        return await ProductService.addProduct(requestObject)
    }

    async updateProduct(productId, requestObject) {
        return await ProductService.updateProduct(productId, requestObject)
    }

    async deleteProduct(productId) {
        return await ProductService.deleteProduct(productId)
    }
}

module.exports = new ProductController