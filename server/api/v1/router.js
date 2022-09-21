const express = require('express');
const FreefitController = require('./controller');

const router = express.Router();

router.post('/freefit-search', FreefitController.validateSearch, FreefitController.searchInFreeFit)
router.get('/freefit-search', FreefitController.freeFitDataArray)

module.exports = router;