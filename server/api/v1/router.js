const express = require('express');
const path = require('path')

const FreefitController = require('./controller');

const publicPath = path.join(__dirname, '../../../build')

const router = express.Router();

router.post('/search', FreefitController.validateSearch, FreefitController.searchInFreeFit)
router.get('/search', FreefitController.freeFitDataArray)

router.get("*", (req, res) => {
    res.sendFile(path.join(publicPath, "index.html"));
});

module.exports = router;