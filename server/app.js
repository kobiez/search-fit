const express = require('express');
const cors = require('cors')

const app = express();

app.use(cors())
app.use(express.json())

app.use('/', require('./api/v1/router'))

module.exports = app;