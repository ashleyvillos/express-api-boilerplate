const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const port = process.env.PORT || 3002

// Modules
const ClientRouter = require('./routes/client.route')
const StoreRouter = require('./routes/store.route')
const ProductRouter = require('./routes/product.route')

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

// Routing
app.use(ClientRouter)
app.use(StoreRouter)
app.use(ProductRouter)

app.listen(port, (err) => {
    if (err) throw err
  console.log(`Example app listening on port ${port}`)
})