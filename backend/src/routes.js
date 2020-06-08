const express = require('express')
const ListController = require('./controllers/ListController')

const routes = express.Router()

routes.get('/list', ListController.index )
routes.post('/list', ListController.store)
routes.get('/list/:id', ListController.show)
routes.put('/list/:id', ListController.update)
routes.delete('/list/:id', ListController.drop)

module.exports = routes
