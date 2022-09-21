const express = require('express');
const path = require('path')

const FreefitController = require('./controller');

const publicPath = path.join(__dirname, '../../../build')

const router = express.Router();

router.post('/freefit-search', FreefitController.validateSearch, FreefitController.searchInFreeFit)
router.get('/freefit-search', FreefitController.freeFitDataArray)

router.get("*", (req, res) => {
    res.sendFile(path.join(publicPath, "index.html"));
});

module.exports = router;