const express = require('express');
const cors = require('cors')
const path = require('path')

const app = express();
const publicPath = path.join(__dirname, '../build')

app.use(express.static(publicPath));
app.use(cors())
app.use(express.json())

app.use('/freefit', require('./api/v1/router'))

module.exports = app;