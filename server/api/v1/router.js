const express = require('express');
const freefitController = require('./controller');

const router = express.Router();

router.post('/freefit-search', freefitController.validateSearch, freefitController.searchInFreeFit)

module.exports = router;