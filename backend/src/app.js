const express = require('express')
const listRouter = require('./routes/list')
const cors = require('cors')
require('./config/database')

const app = express()

app.use(cors())
app.use(express.json())
app.use('/', listRouter)

module.exports = app
