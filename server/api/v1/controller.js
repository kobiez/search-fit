const Freefit = require('./freeFitService')
const status = require('http-status');
require('dotenv').config()

class FreefitController {
    static freefitData;

    static async searchInFreeFit(req, res, next) {

        try {
            const { CompanyID, area, freeText, subcategoryId } = req.body;
            const { data } = await Freefit.freeFitService(CompanyID, area, freeText, subcategoryId)

            FreefitController.freefitData = data;
            res.send({ Message: "Searching...." })
            
        } catch (error) {
            console.error(error)
            res.status(status.INTERNAL_SERVER_ERROR)
                .send({ error: "Internal server error" })
        }
    }

    static freeFitDataArray(req, res, next) {
        const data = FreefitController.freefitData;
        res.send(data.d)
    }

    static validateSearch(req, res, next) {
        const { area, subcategoryId } = req.body
        if (!area && !subcategoryId) {
            throw new Error("Please provide a valide data")
        } else {
            next()
        }
    }
}

module.exports = FreefitController;