const express = require('express');
const freefitController = require('./controller');

const router = express.Router();

router.post('/', freefitController.postRequestValidate, freefitController.postToFreeFitServer)

module.exports = router;