const express = require('express');
const path = require('path')
const FreefitController = require('./controller');

const router = express.Router();

router.post('/freefit-search', FreefitController.validateSearch, FreefitController.searchInFreeFit)
router.get('/freefit-search', FreefitController.freeFitDataArray)

router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '../../../build', "index.html"));
});

module.exports = router;