const express = require('express')
const app = express()
const routes = require('./routes')

routes(app)

app.listen(4200)
